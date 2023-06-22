import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

function LoginForm() {
  /** usenavigate */
  const navigation = useNavigate();

  /** 로그인 정보 객체 및 인풋창 상태관리 */
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [loginFailedMsg, setLoginFailedMsg] = useState(false);

  /** 유효성 검사 정규식 */
  // const idValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // const pwValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/;

  // 임시 테스트 정규식
  const idValidation = /@/;
  const pwValidation = /1/;

  /** email 값 설정 */
  const handleIdValue = (e: any) => {
    setLoginInfo({ ...loginInfo, email: e.target.value });
    if (idValidation.test(e.target.value) && e.target.value !== "") {
      setEmail(true);
    } else {
      setEmail(false);
    }
  };

  /** password 값 설정 */
  const handlePasswordValue = (e: any) => {
    setLoginInfo({ ...loginInfo, password: e.target.value });
    if (pwValidation.test(e.target.value) && e.target.value !== "") {
      setPassword(true);
    } else {
      setPassword(false);
    }
  };

  /** 로그인 버튼 누를 시 작동하는 함수 */
  const handleSubmit: React.MouseEventHandler = async (
    event: React.MouseEvent
  ) => {
    event.preventDefault();

    try {
      await axios
        .post("http://localhost:5173/src/moks/user.json", loginInfo)
        .then((response) => {
          setLoginInfo(response.data);
          // console.log(response.data);
          // const accessToken = response.data.authorization;
          if (!email || !password) {
            localStorage.setItem(
              "invalidMsg",
              "invalid email address or password"
            );
            setLoginFailedMsg(true);
          } else {
            console.log("Login Success");
            navigation("/");
          }
          // window.location.reload();
        });
    } catch (err: unknown | any) {
      console.log(err.response.data);
      navigation("/error");
    }
  };

  return (
    <div className="OauthFormContainer">
      <S.LoginForm>
        {/* Email Input */}
        <div className="LoginEmail">
          <label id="LoginLabelEmail" htmlFor="SIEmail">
            Email
          </label>
          <input
            id="LoginInputEmail"
            name="LoginEmail"
            type="text"
            onChange={handleIdValue}
          />
        </div>
        {/* 유효성 검사 Msg */}
        {loginFailedMsg && (
          <div className="invalid">{localStorage.getItem("invalidMsg")}</div>
        )}
        {/* Password Input */}
        <div className="LoginPassword">
          <label id="LoginLabelPassword" htmlFor="LoginPassword">
            Password
          </label>
          <input
            id="LoginInputPassword"
            name="LoginPassword"
            type="password"
            onChange={handlePasswordValue}
          />
        </div>
        {/* Login button */}
        <S.LoginButton
          paddings="10px"
          radius="5px"
          color="white"
          bgcolor="var(--blue-500)"
          onClick={handleSubmit}
        >
          Sign in
        </S.LoginButton>
      </S.LoginForm>
    </div>
  );
}

export default LoginForm;
