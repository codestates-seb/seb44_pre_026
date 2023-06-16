package preproject.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import preproject.answer.entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
