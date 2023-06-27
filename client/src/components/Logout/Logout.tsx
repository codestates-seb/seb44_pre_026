export function handleLogout(event: { preventDefault: () => void }) {
  event.preventDefault();

  localStorage.removeItem("accessToken");
  // 임시 로그아웃 확인 alert
  alert("로그아웃 성공");

  window.location.reload();
}
