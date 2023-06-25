package preproject.server.question.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import preproject.server.exception.BusinessLogicException;
import preproject.server.exception.ExceptionCode;
import preproject.server.member.entity.Member;
import preproject.server.member.repository.MemberRepository;
import preproject.server.question.entity.Question;
import preproject.server.question.repository.QuestionRepository;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final MemberRepository memberRepository;

    public Question createQuestion(Question question) { //질문 생성
        String principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        Optional<Member> verifiedMember = memberRepository.findByEmail(principal);

        Member member = verifiedMember.
                orElseThrow(() -> new BusinessLogicException(ExceptionCode.NO_PERMISSION_CREATING_POST));

        question.setMember(member);
        member.addQuestion(question);
        return questionRepository.save(question);
    }

    public Question updateQuestion(Question question) { //질문 수정
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        String principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        if (!findQuestion.getMember().getEmail().equals(principal))
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_EDITING_POST);

        Optional.ofNullable(question.getTitle())
                .ifPresent(title -> findQuestion.setTitle(title));
        Optional.ofNullable(question.getContent())
                .ifPresent(content -> findQuestion.setContent(content));
        findQuestion.setModifiedAt(LocalDateTime.now());

        return questionRepository.save(findQuestion);
    }

    public Question getQuestion(long questionId) { //질문 조회
        Question findQuestion = findVerifiedQuestion(questionId);

        return findQuestion;
    }

    public Page<Question> getQuestions(Pageable pageable) { //질문 전체 조회
        Pageable pageRequest = PageRequest.of(pageable.getPageNumber() - 1,
                pageable.getPageSize(), Sort.by("createdAt").descending());
        return questionRepository.findAll(pageRequest);
    }

    public void deleteQuestion(long questionId) { //질문 삭제
        Question findQuestion = findVerifiedQuestion(questionId);
        String principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();

        if (!findQuestion.getMember().getEmail().equals(principal))
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_DELETING_POST);

        questionRepository.deleteById(questionId);
    }
    public Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(()
                -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }
}
