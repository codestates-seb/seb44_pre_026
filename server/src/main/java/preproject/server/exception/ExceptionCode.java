package preproject.server.exception;

import lombok.Getter;

@Getter
public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member Not Found"),
    MEMBER_EXISTS(409, "Member Already Exists"),
    MEMBER_UNACTIVE(403,"탈퇴된 회원입니다."),
    NO_PERMISSION_CREATING_POST(403, "회원만 작성 할 수 있습니다."),
    NO_PERMISSION_EDITING_POST(403,"작성자만 수정할 수 있습니다."),
    NO_PERMISSION_DELETING_POST(403,"작성자만 삭제할 수 있습니다."),
    QUESTION_NOT_FOUND(404,"질문을 찾을 수 없습니다."),
    ANSWER_NOT_FOUND(404,"답변을 찾을 수 없습니다");

    @Getter
    private int status;

    @Getter
    private String statusDescription;

    ExceptionCode(int status, String statusDescription) {
        this.status = status;
        this.statusDescription = statusDescription;
    }
}
