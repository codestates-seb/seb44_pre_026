package preproject.server.member.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;
import preproject.server.member.dto.MemberPatchDto;
import preproject.server.member.dto.MemberPostDto;
import preproject.server.member.dto.MemberResponseDto;
import preproject.server.member.entity.Member;
import preproject.server.member.mapper.MemberMapper;
import preproject.server.member.response.PageInfo;
import preproject.server.member.response.PageResponseDto;
import preproject.server.member.service.MemberService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/members")
@Validated
public class MemberController {
    private final String MEMBER_DEFAULT_URL = "/members";
    private final MemberService memberService;
    private final MemberMapper mapper;

    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberPostDto memberPostDto) {
        Member member = mapper.memberPostDtoToMember(memberPostDto);
        Member createdMember = memberService.createMember(member);

        URI location = UriComponentsBuilder.newInstance()
                .path(MEMBER_DEFAULT_URL + "{member-id}")
                .buildAndExpand(createdMember.getMemberId())
                .toUri();

        return ResponseEntity.created(location).body(mapper.memberToMemberResponseDto(createdMember));
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") @Positive long memberId,
                                      @RequestBody MemberPatchDto memberPatchDto) {
        memberPatchDto.setMemberId(memberId);

        Member member = mapper.memberPatchDtoToMember(memberPatchDto);
        Member updatedMember = memberService.updateMember(member);

        return new ResponseEntity(mapper.memberToMemberResponseDto(updatedMember), HttpStatus.OK);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId) {
        Member findMember = memberService.findMember(memberId);

        return new ResponseEntity(mapper.memberToMemberResponseDto(findMember), HttpStatus.OK);
    }

//    @GetMapping
//    public ResponseEntity getMembers(@Positive @RequestParam int page,
//                                     @Positive @RequestParam int size) {
//        Page<Member> pageMembers = memberService.findMembers(page - 1, size);
//        List<Member> members = pageMembers.getContent();
//        PageInfo pageInfo = new PageInfo(pageMembers.getNumber() + 1, pageMembers.getSize(), (int) pageMembers.getTotalElements(), pageMembers.getTotalPages());
//
//        return new ResponseEntity(new PageResponseDto(members,pageInfo), HttpStatus.OK);
//    } 회원의 질문과 답변 리스트까지 리턴

    @GetMapping
    public ResponseEntity getMembers(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        Page<Member> pageMembers = memberService.findMembers(page - 1, size);
        List<Member> members = pageMembers.getContent();
        List<MemberResponseDto> response = mapper.membersToMemberResponseDtos(members);
        PageInfo pageInfo = new PageInfo(pageMembers.getNumber() + 1, pageMembers.getSize(), (int) pageMembers.getTotalElements(), pageMembers.getTotalPages());

        return new ResponseEntity(new PageResponseDto(response,pageInfo), HttpStatus.OK);
    } // 순수 회원 정보만 리턴

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId) {
        memberService.deleteMember(memberId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }//^
}