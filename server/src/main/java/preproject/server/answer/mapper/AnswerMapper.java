package preproject.server.answer.mapper;

import org.mapstruct.Mapper;
import preproject.server.answer.dto.AnswerDto;
import preproject.server.answer.entity.Answer;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerDto.Post answerPostDto);

    Answer answerPatchDtoToAnswer(AnswerDto.Patch answerPatchDto);

    AnswerDto.Response answerToAnswerResponseDto(Answer answer);
}
