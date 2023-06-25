package preproject.server.member.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
@Setter
public class MemberPatchDto {
    private Long memberId;
    @NotBlank
    @Pattern(regexp = "^([a-zA-Z_0-9]+){8,}$", message = "숫자와 영문(대,소문자)을 섞어서 입력해주세요.(8자이상)")
    private String password;

    @NotBlank(message = "이름을 입력해주세요")
    private String nickName;

    private String memberStatus;
}//^
