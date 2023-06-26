package preproject.server.question.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import preproject.server.question.dto.QuestionDto;
import preproject.server.question.dto.QuestionResponseDto;
import preproject.server.question.entity.Question;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    @Mapping(source = "memberId", target = "member.memberId")
    Question questionPostDtoToQuestion(QuestionDto.QuestionPostDto questionPostDto);
//    @Mapping(source = "memberId", target = "member.memberId")
    Question questionPatchDtoToQuestion(QuestionDto.QuestionPatchDto questionPatchDto);
    @Mapping(source = "member.memberId", target = "memberId")
    @Mapping(source = "member.nickName", target = "nickName")
    QuestionResponseDto questionToQuestionResponseDto(Question question);
    @Mapping(source = "member.memberId", target = "memberId")
    @Mapping(source = "member.nickName", target = "nickName")
    @Mapping(source = "answers", target = "answers")
    List<QuestionResponseDto> questionsToResponseDto(List<Question>questions);
    List<QuestionDto.SearchResponse> QuestionsToQuestionSearchResponseDtos(List<Question> questions);
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
}
