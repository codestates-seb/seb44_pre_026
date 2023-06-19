package preproject.server.member.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import preproject.server.exception.BusinessLogicException;
import preproject.server.exception.ExceptionCode;
import preproject.server.member.entity.Member;
import preproject.server.member.repository.MemberRepository;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Member createMember(Member member) {
        verifyExistsEmail(member.getEmail());

        return memberRepository.save(member);
    }

    public Member updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getName())
                .ifPresent(name -> findMember.setName(name));
        Optional.ofNullable(member.getPassword())
                .ifPresent(password -> findMember.setPassword(password));
        Optional.ofNullable(member.getNickName())
                        .ifPresent(nickName -> findMember.setNickName(nickName));
        Optional.ofNullable(member.getMemberStatus())
                .ifPresent(status -> findMember.setMemberStatus(status));
        findMember.setModifiedAt(LocalDateTime.now());

        return memberRepository.save(findMember);
    }

    public Member findMember(long memberId) {
        Member findMember = findVerifiedMember(memberId);

        return findMember;
    }

    public Page<Member> findMembers(int page, int size) {
        Page<Member> members = memberRepository.findAll(PageRequest.of(page, size, Sort.by("memberId").descending()));

        return members;
    }

    public void deleteMember(long memberId) {
        Member findMember = findVerifiedMember(memberId);

        memberRepository.delete(findMember);
    }

    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);

        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return findMember;
    }
    public void verifyExistsEmail(String email) {
        Optional<Member> optionalMember = memberRepository.findByEmail(email);

        if(optionalMember.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }
}