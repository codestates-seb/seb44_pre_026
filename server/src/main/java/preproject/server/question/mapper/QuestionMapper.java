package preproject.server.question.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import preproject.server.answer.dto.AnswerDto;
import preproject.server.question.dto.QuestionDto;
import preproject.server.question.dto.QuestionResponseDto;
import preproject.server.question.entity.Question;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    @Mapping(source = "memberId", target = "member.memberId")
    Question questionPostDtoToQuestion(QuestionDto.QuestionPostDto post);

    Question questionPatchDtoToQuestion(QuestionDto.QuestionPatchDto patch);

    List<QuestionDto.SearchResponse> QuestionsToQuestionSearchResponseDtos(List<Question> questions);

    List<QuestionResponseDto> questionsToResponseDto(List<Question> questions);

    default QuestionDto.SearchResponse QuestionToQuestionSearchResponseDto(Question question){

        QuestionDto.SearchResponse questionSearchResponseDto =
                QuestionDto.SearchResponse.builder()
                        .questionId(question.getQuestionId())
                        .nickname(question.getMember().getNickName())
                        .title(question.getTitle())
                        .content(question.getContent())
                        .build();

        return questionSearchResponseDto;
    }
    default QuestionResponseDto questionToQuestionResponseDto(Question question){

        QuestionResponseDto questionResponseDto =
                QuestionResponseDto.builder()
                        .questionId(question.getQuestionId())
                        .nickName(question.getMember().getNickName())
                        .title(question.getTitle())
                        .content(question.getContent())
                        .createdAt(question.getCreatedAt())
                        .modifiedAt(question.getModifiedAt())
                        .build();

        if (question.getAnswers() != null) {
            List<AnswerDto.Response> answerResponseDtos =
                    question.getAnswers()
                            .stream()
                            .map(answer -> AnswerDto.Response.builder()
                                    .answerId(answer.getAnswerId())
                                    .questionId(answer.getQuestion().getQuestionId())
                                    .nickName(answer.getMember().getNickName())
                                    .content(answer.getContent())
                                    .memberId(answer.getMember().getMemberId())
                                    .createdAt(answer.getCreatedAt())
                                    .modifiedAt(answer.getModifiedAt())
                                    .build())
                            .collect(Collectors.toList());

            questionResponseDto.setAnswers(answerResponseDtos);
        }

        return questionResponseDto;
    }
}

