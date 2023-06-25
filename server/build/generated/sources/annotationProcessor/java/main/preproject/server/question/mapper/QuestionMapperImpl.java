package preproject.server.question.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import preproject.server.answer.dto.AnswerDto;
import preproject.server.answer.entity.Answer;
import preproject.server.member.entity.Member;
import preproject.server.question.dto.QuestionDto;
import preproject.server.question.dto.QuestionResponseDto;
import preproject.server.question.entity.Question;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-06-25T15:31:24+0900",
    comments = "version: 1.5.3.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.6.1.jar, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question questionPostDtoToQuestion(QuestionDto.QuestionPostDto questionPostDto) {
        if ( questionPostDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setTitle( questionPostDto.getTitle() );
        question.setContent( questionPostDto.getContent() );

        return question;
    }

    @Override
    public Question questionPatchDtoToQuestion(QuestionDto.QuestionPatchDto questionPatchDto) {
        if ( questionPatchDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setTitle( questionPatchDto.getTitle() );
        question.setContent( questionPatchDto.getContent() );

        return question;
    }

    @Override
    public QuestionResponseDto questionToQuestionResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionResponseDto.QuestionResponseDtoBuilder questionResponseDto = QuestionResponseDto.builder();

        questionResponseDto.memberId( questionMemberMemberId( question ) );
        questionResponseDto.name( questionMemberName( question ) );
        if ( question.getQuestionId() != null ) {
            questionResponseDto.questionId( question.getQuestionId() );
        }
        questionResponseDto.title( question.getTitle() );
        questionResponseDto.content( question.getContent() );
        questionResponseDto.createdAt( question.getCreatedAt() );
        questionResponseDto.modifiedAt( question.getModifiedAt() );
        questionResponseDto.answers( answerListToResponseList( question.getAnswers() ) );

        return questionResponseDto.build();
    }

    @Override
    public List<QuestionResponseDto> questionsToResponseDto(List<Question> questions) {
        if ( questions == null ) {
            return null;
        }

        List<QuestionResponseDto> list = new ArrayList<QuestionResponseDto>( questions.size() );
        for ( Question question : questions ) {
            list.add( questionToQuestionResponseDto( question ) );
        }

        return list;
    }

    @Override
    public List<QuestionDto.SearchResponse> QuestionsToQuestionSearchResponseDtos(List<Question> questions) {
        if ( questions == null ) {
            return null;
        }

        List<QuestionDto.SearchResponse> list = new ArrayList<QuestionDto.SearchResponse>( questions.size() );
        for ( Question question : questions ) {
            list.add( QuestionToQuestionSearchResponseDto( question ) );
        }

        return list;
    }

    private long questionMemberMemberId(Question question) {
        if ( question == null ) {
            return 0L;
        }
        Member member = question.getMember();
        if ( member == null ) {
            return 0L;
        }
        long memberId = member.getMemberId();
        return memberId;
    }

    private String questionMemberName(Question question) {
        if ( question == null ) {
            return null;
        }
        Member member = question.getMember();
        if ( member == null ) {
            return null;
        }
        String name = member.getName();
        if ( name == null ) {
            return null;
        }
        return name;
    }

    protected AnswerDto.Response answerToResponse(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerDto.Response.ResponseBuilder response = AnswerDto.Response.builder();

        response.nickName( answer.getNickName() );
        response.answerId( answer.getAnswerId() );
        response.questionId( answer.getQuestionId() );
        response.memberId( answer.getMemberId() );
        response.content( answer.getContent() );
        response.createdAt( answer.getCreatedAt() );
        response.modifiedAt( answer.getModifiedAt() );

        return response.build();
    }

    protected List<AnswerDto.Response> answerListToResponseList(List<Answer> list) {
        if ( list == null ) {
            return null;
        }

        List<AnswerDto.Response> list1 = new ArrayList<AnswerDto.Response>( list.size() );
        for ( Answer answer : list ) {
            list1.add( answerToResponse( answer ) );
        }

        return list1;
    }
}
