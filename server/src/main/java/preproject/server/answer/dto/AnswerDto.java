package preproject.server.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class AnswerDto {

    @Getter
    public static class Post {
        @NotBlank(message = "답변의 내용은 공백이 아니어야 합니다.")
        private String content;
    }

    @Getter
    @Setter
    public static class Patch {
        private long answerId;
        @NotBlank(message = "답변의 내용은 공백이 아니어야 합니다.")
        private String content;
    }

    @Getter
    @Setter // Test
    @Builder
    public static class Response {
        private String nickName;
        private Long answerId;
        private Long questionId;
        private Long memberId;
        private String content;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;

    }
}
