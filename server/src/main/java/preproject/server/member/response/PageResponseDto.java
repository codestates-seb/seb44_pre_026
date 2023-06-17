package preproject.server.member.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import preproject.server.member.dto.MemberResponseDto;
import preproject.server.member.entity.Member;

import java.util.List;

@Getter
@AllArgsConstructor
public class PageResponseDto {
    private List<MemberResponseDto> members;
    private PageInfo pageInfo;
}
