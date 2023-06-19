package preproject.server.question.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import preproject.server.answer.entity.Answer;
import preproject.server.member.entity.Member;

import javax.persistence.Entity;
import javax.persistence.*;
import javax.persistence.Id;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;
    @Column(nullable = false)
    private String title;

    public void setContent(String content) {
        this.content = content;
    }

    @Column(nullable = false, columnDefinition="TEXT")
    private String content;
    @Column(nullable = false, name = "CREATED_AT")
    private LocalDateTime createdAt = LocalDateTime.now();
    @Column(nullable = false, name = "MODIFYED_AT")
    private LocalDateTime updatedAt = LocalDateTime.now();
    @OneToMany(mappedBy = "question", cascade = {CascadeType.ALL})
    private List<Answer> answerList = new ArrayList<>();
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    public void setMember(Member member) {
        this.member = member;
        }


    public void setAnswer(Answer answer) {
        this.getAnswerList().add(answer);
        }
    }

