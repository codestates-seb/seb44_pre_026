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
    private String nickName;
    private String createdAt;
    private String modifiedAt;
}
