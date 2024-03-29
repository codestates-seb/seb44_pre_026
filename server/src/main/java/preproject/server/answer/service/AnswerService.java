package preproject.server.answer.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import preproject.server.answer.entity.Answer;
import preproject.server.answer.repository.AnswerRepository;
import preproject.server.exception.BusinessLogicException;
import preproject.server.exception.ExceptionCode;
import preproject.server.member.entity.Member;
import preproject.server.member.repository.MemberRepository;
import preproject.server.member.service.MemberService;
import preproject.server.question.entity.Question;
import preproject.server.question.repository.QuestionRepository;
import preproject.server.question.service.QuestionService;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static preproject.server.member.entity.Member.MemberStatus.MEMBER_QUIT;


@Transactional
@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final MemberRepository memberRepository;
    private final QuestionService questionService;

    public AnswerService(AnswerRepository answerRepository, MemberRepository memberRepository, QuestionService questionService) {
        this.answerRepository = answerRepository;
        this.memberRepository = memberRepository;
        this.questionService = questionService;
    }

    public Answer createAnswer(Answer answer,Long questionId) {
        Question question = questionService.findVerifiedQuestion(questionId);

        String principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        Optional<Member> optionalUser = memberRepository.findByEmail(principal);

        Member member = optionalUser.
                orElseThrow(() -> new BusinessLogicException(ExceptionCode.NO_PERMISSION_CREATING_POST));
        /**
         * Exceptioncode
         */
        if(member.getMemberStatus().equals(MEMBER_QUIT)){
            throw new BusinessLogicException(ExceptionCode.MEMBER_UNACTIVE);
        }
        answer.setMember(member);
        answer.setQuestion(question);
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        String principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        /**
         * Exceptioncode
         */
        if (findAnswer.getMember().getMemberStatus().equals(MEMBER_QUIT)){
            throw new BusinessLogicException(ExceptionCode.MEMBER_UNACTIVE);
        }
        Optional.ofNullable(answer.getContent())
                .ifPresent(content -> findAnswer.setContent(content));
        findAnswer.setModifiedAt(LocalDateTime.now());

        return answerRepository.save(findAnswer);
    }

    public Answer findAnswer(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);

        return findAnswer;
    }

    public Page<Answer> findAnswers(long questionId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("answerId").descending());
        Optional<Page<Answer>> optionalAnswers =answerRepository.findByQuestionQuestionId(questionId,pageable);

        Page<Answer> answerPage = optionalAnswers.orElseThrow(() ->  new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return answerPage;
    }

    public void deleteAnswer(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        String principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        /**
         * Exceptioncode
         */
        if (findAnswer.getMember().getMemberStatus().equals(MEMBER_QUIT)){
            throw new BusinessLogicException(ExceptionCode.MEMBER_UNACTIVE);
        }
        if (!findAnswer.getMember().getEmail().equals(principal))
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_DELETING_POST);

        answerRepository.deleteById(answerId);
    }

    public Answer findVerifiedAnswer(long answerId) {

        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer =
                optionalAnswer.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        return findAnswer;
    }
}
