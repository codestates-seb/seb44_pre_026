package preproject.server.answer.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import preproject.server.audit.Auditable;
import preproject.server.member.entity.Member;
import preproject.server.question.entity.Question;

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

    @Column(nullable = false, updatable = false)
    @CreatedDate
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false, name = "LAST_MODIFIED_AT")
    @LastModifiedDate
    private LocalDateTime modifiedAt = LocalDateTime.now();
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    public void setUser(Member member) { //user와 answer 연관관계매핑 , List<Answer> 에 추가해준다
        this.member = member;
        if (!this.member.getAnswers().contains(this)){
            this.member.getAnswers().add(this);
        }
    }

    public void setQuestion(Question question) {
        this.question = question;
        if (!this.question.getAnswers().contains(this)){
            this.question.getAnswers().add(this);
        }
    }
}
