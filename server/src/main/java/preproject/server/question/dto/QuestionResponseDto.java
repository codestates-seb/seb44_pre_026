package preproject.server.question.dto;

import lombok.*;


import java.time.LocalDateTime;

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
}
