package preproject.server.member.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import preproject.server.member.entity.Member;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member,Long> {
    Optional<Member> findByEmail(String email);
    Optional<Member> findByEmailAndMemberStatus(String email, Member.MemberStatus memberStatus);
    Optional<Member> findByMemberIdAndMemberStatus(long memberId, Member.MemberStatus memberStatus);
    Page<Member> findAllByMemberStatus(Pageable pageable, Member.MemberStatus memberStatus);
}
