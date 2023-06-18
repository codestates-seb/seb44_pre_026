package preproject.server.member.dto;

import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
public class MemberPostDto {
    @NotBlank(message = "이메일을 입력해주세요.")
    @Email(message = "올바른 형식의 이메일을 입력해주세요.")
    private String email;

    @NotBlank(message = "이름을 입력해주세요")
    @Pattern(regexp = "^\\S+(\\s?\\S+)*$")
    private String name;

    @NotBlank(message = "비밀번호를 입력해주세요.")
    @Pattern(regexp = "^([a-zA-Z_0-9]+){8,}$", message = "숫자와 영문(대,소문자)을 섞어서 입력해주세요.(8자이상)")
    private String password;
}
