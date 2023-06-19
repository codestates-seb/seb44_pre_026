package preproject.server.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import preproject.server.question.entity.Question;

import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    @Override
    Optional<Question> findById(Long question_id);
}
