package preproject.server.answer.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;

public class AnswerDto {

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post {
        @NotBlank(message = "답변의 내용은 공백이 아니어야 합니다.")
        private String content;
        private long questionId;
        private long memberId;
    }

    @Getter
    @Setter
    public static class Patch {
        private long answerId;
        private long memberId;
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
