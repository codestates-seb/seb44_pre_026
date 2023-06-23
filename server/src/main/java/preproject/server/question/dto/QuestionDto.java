package preproject.server.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

public class QuestionDto {

    @Setter
    @Getter
    @NoArgsConstructor
    public static class QuestionPostDto {
        @NotBlank(message = "질문 제목을 작성해야 합니다.")
        private String title;
        @NotBlank(message = "질문 내용을 작성해야 합니다.")
        private String content;
//        private long memberId;
    }

    @AllArgsConstructor
    @NoArgsConstructor
    @Setter
    @Getter
    public static class QuestionPatchDto {
        @NotBlank(message = "질문 제목을 작성해야 합니다.")
        private String title;
        @NotBlank(message = "질문 내용을 작성해야 합니다.")
        private String content;
//        private long memberId;
//        private long questionId;
    }
}
