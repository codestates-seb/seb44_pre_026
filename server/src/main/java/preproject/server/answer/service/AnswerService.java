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


@Transactional
@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final MemberRepository memberRepository;
    private final QuestionRepository questionRepository;

    public AnswerService(AnswerRepository answerRepository, MemberRepository memberRepository, QuestionRepository questionRepository) {
        this.answerRepository = answerRepository;
        this.memberRepository = memberRepository;
        this.questionRepository = questionRepository;
    }

    public Answer createAnswer(Answer answer) {
        String email = SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        Optional<Member> optionalMember = memberRepository.findByEmail(email);
        Member member = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        answer.setMember(member);
        member.addAnswer(answer);
        answer.setMemberId(answer.getMember().getMemberId());
        answer.setNickName(answer.getMember().getNickName());

        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer) {
        String email = SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        Optional<Member> optionalMember = memberRepository.findByEmail(email);
        Member member = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        answer.setMember(member);

        if (!answer.getMember().getEmail().equals(email))
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_EDITING_POST);

        Optional<Answer> optionalAnswer = answerRepository.findById(answer.getAnswerId());
        Answer findAnswer = optionalAnswer.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        Optional.ofNullable(answer.getContent())
                .ifPresent(content -> findAnswer.setContent(content));
        findAnswer.setNickName(member.getNickName());
        findAnswer.setMemberId(member.getMemberId());

        findAnswer.setModifiedAt(LocalDateTime.now());

        return answerRepository.save(findAnswer);
    }

    public Answer findAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer answer = optionalAnswer.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        String email = SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        if (!answer.getMember().getEmail().equals(email))
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_EDITING_POST);

        Member member = answer.getMember();
        answer.setMemberId(member.getMemberId());
        answer.setNickName(member.getNickName());

        return answer;
    }

    public Page<Answer> findAnswers(Pageable pageable) {
        Pageable pageRequest = PageRequest.of(pageable.getPageNumber() - 1,
                pageable.getPageSize(), Sort.by("createdAt").descending());
        return answerRepository
                .findAll(pageRequest);
    }

    public void deleteAnswer(long answerId) {
        Answer findAnswer = findAnswer(answerId);
        String email = SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        if (!findAnswer.getMember().getEmail().equals(email))
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_DELETING_POST);

        answerRepository.delete(findAnswer);
    }
}
