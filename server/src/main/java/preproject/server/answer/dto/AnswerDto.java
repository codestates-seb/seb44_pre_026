package preproject.server.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class AnswerDto {

    @Getter
    @AllArgsConstructor
    public static class Post {
        @NotBlank
        private String content;
    }

    @Getter
    public static class Patch {
        private long answerId;
        @NotBlank
        private String content;
    }

    @Getter
    @Builder
    public static class Response {
        private Long answerId;
        private Long questionId;
        private Long userId;
        private String content;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
    }
}
