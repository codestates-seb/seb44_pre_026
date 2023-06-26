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
    date = "2023-06-26T17:14:42+0900",
    comments = "version: 1.5.3.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.6.1.jar, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question questionPostDtoToQuestion(QuestionDto.QuestionPostDto post) {
        if ( post == null ) {
            return null;
        }

        Question question = new Question();

        question.setMember( questionPostDtoToMember( post ) );
        question.setTitle( post.getTitle() );
        question.setContent( post.getContent() );

        return question;
    }

    @Override
    public Question questionPatchDtoToQuestion(QuestionDto.QuestionPatchDto patch) {
        if ( patch == null ) {
            return null;
        }

        Question question = new Question();

        question.setTitle( patch.getTitle() );
        question.setContent( patch.getContent() );

        return question;
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
}
