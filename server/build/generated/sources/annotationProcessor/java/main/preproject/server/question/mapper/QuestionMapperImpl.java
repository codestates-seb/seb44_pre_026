package preproject.server.question.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import preproject.server.member.entity.Member;
import preproject.server.question.dto.QuestionDto;
import preproject.server.question.dto.QuestionResponseDto;
import preproject.server.question.entity.Question;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-06-20T13:52:56+0900",
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

        question.setMember( questionPostDtoToMember( questionPostDto ) );
        question.setContent( questionPostDto.getContent() );
        question.setTitle( questionPostDto.getTitle() );

        return question;
    }

    @Override
    public Question questionPatchDtoToQuestion(QuestionDto.QuestionPatchDto questionPatchDto) {
        if ( questionPatchDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setMember( questionPatchDtoToMember( questionPatchDto ) );
        question.setContent( questionPatchDto.getContent() );
        question.setQuestionId( questionPatchDto.getQuestionId() );
        question.setTitle( questionPatchDto.getTitle() );

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

    protected Member questionPostDtoToMember(QuestionDto.QuestionPostDto questionPostDto) {
        if ( questionPostDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( questionPostDto.getMemberId() );

        return member;
    }

    protected Member questionPatchDtoToMember(QuestionDto.QuestionPatchDto questionPatchDto) {
        if ( questionPatchDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( questionPatchDto.getMemberId() );

        return member;
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
}
