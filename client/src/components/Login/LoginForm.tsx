import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { BASE_URL } from "../../constants/constants";

function LoginForm() {
  const navigation = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [emailFailedMsg, setEmailFailedMsg] = useState(false);
  const [passwordFailedMsg, setPasswordFailedMsg] = useState(false);

  // 유효성 검사 정규식
  const idValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const pwValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/;

  // email 값 설정
  const handleIdValue = (e: any) => {
    setLoginInfo({ ...loginInfo, email: e.target.value });
    if (idValidation.test(e.target.value) && e.target.value !== null) {
      setEmailFailedMsg(false);
    } else {
      setEmailFailedMsg(true);
      localStorage.setItem("loginEmailFailedMsg", "invalid email");
    }
  };

  /** password 값 설정 */
  const handlePasswordValue = (e: any) => {
    setLoginInfo({ ...loginInfo, password: e.target.value });
    if (pwValidation.test(e.target.value) && e.target.value !== null) {
      setPasswordFailedMsg(false);
    } else {
      setPasswordFailedMsg(true);
      localStorage.setItem("loginPasswordFailedMsg", "invalid password");
    }
  };

  const handleSubmit: React.MouseEventHandler = async (
    event: React.MouseEvent
  ) => {
    event.preventDefault();

    try {
      await axios.post(BASE_URL + "/auth/login", loginInfo).then(response => {
        const accessToken = response.headers.authorization;

        localStorage.setItem("accessToken", accessToken);
        navigation("/");
      });
    } catch (err: unknown | any) {
      console.log(err.response.data);
      alert("please check your email or password");
    }
  };

  return (
    <div className="OauthFormContainer">
      <S.LoginForm>
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
        {emailFailedMsg && (
          <div className="invalid">
            {localStorage.getItem("loginEmailFailedMsg")}
          </div>
        )}
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
        {passwordFailedMsg && (
          <div className="invalid">
            {localStorage.getItem("loginPasswordFailedMsg")}
          </div>
        )}
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
