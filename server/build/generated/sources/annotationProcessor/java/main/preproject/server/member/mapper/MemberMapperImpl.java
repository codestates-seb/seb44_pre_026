package preproject.server.member.mapper;

import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import preproject.server.member.dto.MemberPatchDto;
import preproject.server.member.dto.MemberPostDto;
import preproject.server.member.dto.MemberResponseDto;
import preproject.server.member.entity.Member;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-06-25T15:31:24+0900",
    comments = "version: 1.5.3.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.6.1.jar, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberPostDtoToMember(MemberPostDto memberPostDto) {
        if ( memberPostDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setEmail( memberPostDto.getEmail() );
        member.setName( memberPostDto.getName() );
        member.setPassword( memberPostDto.getPassword() );
        member.setNickName( memberPostDto.getNickName() );

        return member;
    }

    @Override
    public Member memberPatchDtoToMember(MemberPatchDto memberPatchDto) {
        if ( memberPatchDto == null ) {
            return null;
        }

        Member member = new Member();

        if ( memberPatchDto.getMemberId() != null ) {
            member.setMemberId( memberPatchDto.getMemberId() );
        }
        member.setName( memberPatchDto.getName() );
        member.setPassword( memberPatchDto.getPassword() );
        member.setNickName( memberPatchDto.getNickName() );
        if ( memberPatchDto.getMemberStatus() != null ) {
            member.setMemberStatus( Enum.valueOf( Member.MemberStatus.class, memberPatchDto.getMemberStatus() ) );
        }

        return member;
    }

    @Override
    public MemberResponseDto memberToMemberResponseDto(Member member) {
        if ( member == null ) {
            return null;
        }

        MemberResponseDto memberResponseDto = new MemberResponseDto();

        memberResponseDto.setMemberId( member.getMemberId() );
        memberResponseDto.setEmail( member.getEmail() );
        memberResponseDto.setName( member.getName() );
        memberResponseDto.setNickName( member.getNickName() );
        if ( member.getCreatedAt() != null ) {
            memberResponseDto.setCreatedAt( DateTimeFormatter.ISO_LOCAL_DATE_TIME.format( member.getCreatedAt() ) );
        }
        if ( member.getModifiedAt() != null ) {
            memberResponseDto.setModifiedAt( DateTimeFormatter.ISO_LOCAL_DATE_TIME.format( member.getModifiedAt() ) );
        }

        return memberResponseDto;
    }

    @Override
    public List<MemberResponseDto> membersToMemberResponseDtos(List<Member> members) {
        if ( members == null ) {
            return null;
        }

        List<MemberResponseDto> list = new ArrayList<MemberResponseDto>( members.size() );
        for ( Member member : members ) {
            list.add( memberToMemberResponseDto( member ) );
        }

        return list;
    }
}
