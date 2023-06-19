package preproject.server.exception;

import lombok.Getter;

@Getter
public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member Not Found"),
    MEMBER_EXISTS(409, "Member Already Exists"),
    QUESTION_NOT_FOUND(404,"질문을 찾을 수 없습니다.");

    @Getter
    private int status;

    @Getter
    private String statusDescription;

    ExceptionCode(int status, String statusDescription) {
        this.status = status;
        this.statusDescription = statusDescription;
    }
}
