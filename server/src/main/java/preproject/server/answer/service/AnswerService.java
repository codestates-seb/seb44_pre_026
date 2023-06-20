package preproject.server.answer.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import preproject.server.answer.entity.Answer;
import preproject.server.answer.repository.AnswerRepository;
import preproject.server.member.entity.Member;

import java.time.LocalDateTime;
import java.util.List;


@Transactional
@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public Answer createAnswer(Answer answer) {
        Member member = answer.getMember();
        answer.setMember(member);

        LocalDateTime currentTime = LocalDateTime.now();
        answer.setCreatedAt(currentTime);
        answer.setModifiedAt(currentTime);
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer updatedAnswer) {
        Member member = updatedAnswer.getMember();

        Answer findAnswer = findAnswer(updatedAnswer.getAnswerId());
        findAnswer.setContent(updatedAnswer.getContent());
        findAnswer.setModifiedAt(LocalDateTime.now());
        return answerRepository.save(findAnswer);
    }

    public Answer findAnswer(long answerId) {
        return answerRepository
                .findById(answerId)
                .orElseThrow(() -> new RuntimeException("Answer not found"));
    }

    public List<Answer> findAnswers() {
        return answerRepository
                .findAll();
    }

    public void deleteAnswer(long answerId) {
        Answer answer = findAnswer(answerId);
        answerRepository.delete(answer);
    }
}
