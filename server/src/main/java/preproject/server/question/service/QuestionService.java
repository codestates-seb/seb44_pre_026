package preproject.server.question.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import preproject.server.member.entity.Member;
import preproject.server.member.repository.MemberRepository;
import preproject.server.question.entity.Question;
import preproject.server.question.repository.QuestionRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final MemberRepository memberRepository;

    public Question createQuestion(Question question) { //질문 생성
        Member member = question.getMember();
        question.setMember(member);
        return questionRepository.save(question);
    }

    public Question updateQuestion(Question question) { //질문 수정
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        Member member = question.getMember();

        Optional.ofNullable(question.getTitle())
                .ifPresent(title -> findQuestion.setTitle(title));
        Optional.ofNullable(question.getContent())
                .ifPresent(content -> findQuestion.setContent(content));

        return questionRepository.save(findQuestion);
    }

    public Question getQuestion(long questionId) { //질문 조회
        Question findQuestion = findVerifiedQuestion(questionId);

        return findQuestion;
    }

    public void deleteQuestion(long questionId) { //질문 삭제
        Question findQuestion = findVerifiedQuestion(questionId);

        Member member = findQuestion.getMember();
        Optional<Member> verifiedMember = memberRepository.findById(member.getMemberId());
        questionRepository.deleteById(questionId);
    }
    public Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(()
                -> new NullPointerException("질문을 조회할 수 없습니다."));
        return findQuestion;
    }
}
