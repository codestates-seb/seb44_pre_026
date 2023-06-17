package preproject.server.member.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class MemberPostDto {
    private String email;
    private String name;
    private String password;
}
