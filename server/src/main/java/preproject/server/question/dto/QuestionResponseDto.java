package preproject.server.question.dto;

import lombok.*;
import preproject.server.answer.dto.AnswerDto;


import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class QuestionResponseDto {
    private long questionId;
    private long memberId;
    private String name;
    private String title;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private List<AnswerDto.Response> answers;
}
