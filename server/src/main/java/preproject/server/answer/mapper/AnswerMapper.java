package preproject.server.answer.mapper;

import org.mapstruct.Mapper;
import preproject.server.answer.dto.AnswerDto;
import preproject.server.answer.entity.Answer;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerDto.Post answerPostDto);

    Answer answerPatchDtoToAnswer(AnswerDto.Patch answerPatchDto);

    AnswerDto.Response answerToAnswerResponse(Answer answer);

    List<AnswerDto.Response> answerToAnswerResponses(List<Answer> answers);
}
