package preproject.server.member.mapper;

import org.mapstruct.Mapper;
import preproject.server.member.dto.MemberPatchDto;
import preproject.server.member.dto.MemberPostDto;
import preproject.server.member.dto.MemberResponseDto;
import preproject.server.member.entity.Member;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostDtoToMember(MemberPostDto memberPostDto);
    Member memberPatchDtoToMember(MemberPatchDto memberPatchDto);
    MemberResponseDto memberToMemberResponseDto(Member member);
    List<MemberResponseDto> membersToMemberResponseDtos(List<Member> members);
}
