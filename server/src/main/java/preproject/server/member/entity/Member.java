package preproject.server.member.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long memberId;

    @Column(length = 100, nullable = false, unique = true)
    private String email;

    @Column(length = 50, nullable = false)
    private String name;

    @Column(length = 100, nullable = false)
    private String password;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false, name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @OneToMany(mappedBy = "member") //회원에서 등록한 질문 조회 가능
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "member") //회원에서 등록한 답변 조회 가능
    private List<Answer> answers = new ArrayList<>();

    public void addQuestion(Question question) {
        questions.add(question);
    }

    public void addAnswer(Answer answer) {
        answers.add(answer);
    }


    public enum MemberStatus {
        MEMBER_ACTIVE("활동중"),
        MEMBER_SLEEP("휴면 계정"),
        MEMBER_QUIT("탈퇴 회원");

        @Getter
        private String status;

        MemberStatus(String status) {
            this.status = status;
        }
    }
}

