package preproject.server.answer.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import preproject.server.answer.dto.AnswerDto;
import preproject.server.answer.entity.Answer;
import preproject.server.member.entity.Member;
import preproject.server.question.entity.Question;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
//    Answer answerPostDtoToAnswer(AnswerDto.Post answerPostDto);
//
//    Answer answerPatchDtoToAnswer(AnswerDto.Patch answerPatchDto);
//
//    @Mapping(source = "member.memberId", target = "memberId")
//    @Mapping(source = "question.questionId", target = "questionId")
//    @Mapping(source = "member.nickName", target = "nickName")
//    AnswerDto.Response answerToAnswerResponse(Answer answer);
//
//    @Mapping(source = "member.memberId", target = "memberId")
//    @Mapping(source = "question.questionId", target = "questionId")
//    @Mapping(source = "member.nickName", target = "nickName")
//    List<AnswerDto.Response> answerToAnswerResponses(List<Answer> answers);


    default Answer answerPostDtoToAnswer(AnswerDto.Post postDto){
        if(postDto == null) {
            return null;
        } else {
            Answer answer = new Answer();
            Question question = new Question();
            question.setQuestionId(postDto.getQuestionId());
            Member member= new Member();
            member.setMemberId(postDto.getMemberId());

            answer.setContent(postDto.getContent());
            answer.setQuestion(question);
            answer.setMember(member);
            return answer;
        }
    }

    default Answer answerPatchDtoToAnswer(AnswerDto.Patch patchDto) {
        if (patchDto == null) {
            return null;
        } else {
            Answer answer = new Answer();
            Member member = new Member();
            member.setMemberId(patchDto.getMemberId());

            answer.setMember(member);
            answer.setAnswerId(patchDto.getAnswerId());
            answer.setContent(patchDto.getContent());
            return answer;
        }
    }

    default AnswerDto.Response answerToAnswerResponse(Answer answer) {
        if (answer == null) {
            return null;
        }
        return AnswerDto.Response.builder()
                .answerId(answer.getAnswerId())
                .questionId(answer.getQuestion().getQuestionId())
                .nickName(answer.getMember().getNickName())
                .content(answer.getContent())
                .memberId(answer.getMember().getMemberId())
                .createdAt(answer.getCreatedAt())
                .modifiedAt(answer.getModifiedAt())
                .build();
    }

    List<AnswerDto.Response> answerToAnswerResponses(List<Answer> answers);
}
