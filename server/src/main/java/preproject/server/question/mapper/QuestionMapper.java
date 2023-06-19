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
    @Mapping(source = "memberId", target = "member.memberId")
    Question questionPatchDtoToQuestion(QuestionDto.QuestionPatchDto questionPatchDto);
    @Mapping(source = "member.memberId", target = "memberId")
    //@Mapping(source = "member.name", target = "name")
    QuestionResponseDto questionToQuestionResponseDto(Question question);
    @Mapping(source = "member.memberId", target = "memberId")
    @Mapping(source = "member.name", target = "name")
    List<QuestionResponseDto> questionsToResponseDto(List<Question>questions);
}
