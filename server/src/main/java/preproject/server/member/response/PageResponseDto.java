package preproject.server.member.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import preproject.server.member.entity.Member;

import java.util.List;

@Getter
@AllArgsConstructor
public class PageResponseDto {
    private List<Member> members;
    private PageInfo pageInfo;
}
