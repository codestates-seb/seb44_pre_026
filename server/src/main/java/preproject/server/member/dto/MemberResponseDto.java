package preproject.server.member.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class MemberResponseDto {
    private Long memberId;
    private String email;
    private String name;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
