package preproject.server.question.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

public class QuestionDto {

    @Setter
    @Getter
    @NoArgsConstructor
    public static class QuestionPostDto {
        @NotBlank(message = "질문 제목을 작성해야 합니다.")
        private String title;
        @NotBlank(message = "질문 내용을 작성해야 합니다.")
        private String content;
        private long memberId;
    }


    @NoArgsConstructor
    @Setter
    @Getter
    public static class QuestionPatchDto {
        @NotBlank(message = "질문 제목을 작성해야 합니다.")
        private String title;
        @NotBlank(message = "질문 내용을 작성해야 합니다.")
        private String content;
        private long memberId;
    }
    @Getter @Setter
    @Builder
    @AllArgsConstructor
    public static class SearchResponse {

        @Positive
        private long questionId;

        private String nickname;

        private String title;

        private String content;
    }
}
