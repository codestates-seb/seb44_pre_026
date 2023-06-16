package preproject.answer.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ANSWER_ID")
    private long answerId;
    @Column(nullable = false)
    private String content;
    @Column(nullable = false, updatable = false, name = "CREATED_AT")
    @CreatedDate
    private LocalDateTime createdAt;
    @Column(nullable = false, name = "MODIFIED_AT")
    @LastModifiedDate
    private LocalDateTime modifiedAt;

}
