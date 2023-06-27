import axios from "axios";

export function MemberDelete() {
  const accessToken = localStorage.getItem("accessToken");
  // 나중에 탈퇴 의사 한번 더 묻는 alert 만들면 좋을듯 합니다.
  axios
    // 1은 임시
    .delete(`/api/members/`, {
      headers: {
        Authorization: accessToken,
      },
    })
    .then((response) => {
      console.log("탈퇴 성공", response.data);

      localStorage.removeItem("accessToken");
      window.location.href="/"
    })
    .catch((error) => {
      console.error("탈퇴 실패", error);
    });
}
