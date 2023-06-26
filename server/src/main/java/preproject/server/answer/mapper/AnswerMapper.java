package preproject.server.answer.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import preproject.server.answer.dto.AnswerDto;
import preproject.server.answer.entity.Answer;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerDto.Post answerPostDto);

    Answer answerPatchDtoToAnswer(AnswerDto.Patch answerPatchDto);

    @Mapping(source = "member.memberId", target = "memberId")
    @Mapping(source = "question.questionId", target = "questionId")
    @Mapping(source = "member.nickName", target = "nickName")
    AnswerDto.Response answerToAnswerResponse(Answer answer);

    @Mapping(source = "member.memberId", target = "memberId")
    @Mapping(source = "question.questionId", target = "questionId")
    @Mapping(source = "member.nickName", target = "nickName")
    List<AnswerDto.Response> answerToAnswerResponses(List<Answer> answers);
}
