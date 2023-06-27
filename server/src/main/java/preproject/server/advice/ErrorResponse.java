package preproject.server.advice;

import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import preproject.server.exception.ExceptionCode;

import javax.validation.ConstraintViolation;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Getter
public class ErrorResponse {
    private int status;
    private String statusDescription;
    private List<FieldError> fieldErrors; // MethodArgumentNotValidException으로부터 발생하는 에러 정보를 담음(dto필드값 유효성 검증 실패 에러)
    private List<ConstraintViolationError> violationErrors; // ConstraintViolationException으로부터 발생하는 에러 정보를 담음 // URI 변수 값 유효성 검증 실패 에러

    private ErrorResponse(int status, String statusDescription) {
        this.status = status;
        this.statusDescription = statusDescription;
    }

    private ErrorResponse(List<FieldError> fieldErrors, List<ConstraintViolationError> violationErrors) {
        this.fieldErrors = fieldErrors;
        this.violationErrors = violationErrors;
    }

    public static ErrorResponse of(BindingResult bindingResult) {
        return new ErrorResponse(FieldError.of(bindingResult),null);
    }

    public static ErrorResponse of(Set<ConstraintViolation<?>> violations) {
        return new ErrorResponse(null,ConstraintViolationError.of(violations));
    }

    public static ErrorResponse of(ExceptionCode exceptionCode) {
        return new ErrorResponse(exceptionCode.getStatus(),exceptionCode.getStatusDescription());
    }

    public static ErrorResponse of(HttpStatus httpStatus) {
        return new ErrorResponse(httpStatus.value(),httpStatus.getReasonPhrase());
    }

    public static ErrorResponse of(HttpStatus httpStatus, String message) {
        return new ErrorResponse(httpStatus.value(), message);
    }

    @Getter
    public static class FieldError {
        private String field;
        private Object rejectedValue;
        private String message;

        public FieldError(String field, Object rejectedValue, String message) {
            this.field = field;
            this.rejectedValue = rejectedValue;
            this.message = message;
        }

        public static List<FieldError> of(BindingResult bindingResult) {
            List<org.springframework.validation.FieldError> fieldErrors = bindingResult.getFieldErrors();

            List<FieldError> response = fieldErrors.stream()
                    .map(error -> new FieldError(error.getField(),
                            error.getRejectedValue() == null ? "" : error.getRejectedValue().toString(),
                            error.getDefaultMessage()))
                    .collect(Collectors.toList());

            return response;
        }
    }

        @Getter
        public static class ConstraintViolationError {
            private String propertyPath;
            private Object rejectedValue;
            private String message;

            public ConstraintViolationError(String propertyPath, Object rejectedValue, String message) {
                this.propertyPath = propertyPath;
                this.rejectedValue = rejectedValue;
                this.message = message;
            }

            public static List<ConstraintViolationError> of(Set<ConstraintViolation<?>> constraintViolations) {
                List<ConstraintViolationError> response = constraintViolations.stream()
                        .map(error -> new ConstraintViolationError(error.getPropertyPath().toString(),
                                error.getInvalidValue().toString(),
                                error.getMessage()))
                        .collect(Collectors.toList());

                return response;
            }
        }

}
