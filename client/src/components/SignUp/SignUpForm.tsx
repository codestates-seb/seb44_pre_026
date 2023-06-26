import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

function SignUpForm() {
  const navigation = useNavigate();

  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    nickName: "",
    name: "",
    password: "",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickName] = useState("");
  const [name, setName] = useState("");

  const [emailFailedMsg, setEmailFailedMsg] = useState(false);
  const [nickNameFailedMsg, setNickNameFailedMsg] = useState(false);
  const [passwordFailedMsg, setPasswordFailedMsg] = useState(false);

  const idValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const pwValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/;
  const nickNameValidation = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/;

  const handleNameValue = (e: any) => {
    setSignUpInfo({ ...signUpInfo, nickName: e.target.value });
    setName(e.target.value);
  };

  const handleNickNameValue = (e: any) => {
    const nickNameVal = e.target.value;
    setSignUpInfo({ ...signUpInfo, nickName: e.target.value });
    if (nickNameValidation.test(nickNameVal) && nickNameVal !== null) {
      setNickName(e.target.value);
      setNickNameFailedMsg(false);
    } else {
      setNickNameFailedMsg(true);
      localStorage.setItem("nickNameFailedMsg", "Invalid Nick Name");
    }
  };

  const handleEmailValue = (e: any) => {
    const emailVal = e.target.value;
    setSignUpInfo({ ...signUpInfo, email: emailVal });
    if (idValidation.test(emailVal) && emailVal !== null) {
      setEmail(emailVal);
      setEmailFailedMsg(false);
    } else {
      setEmailFailedMsg(true);
      localStorage.setItem("emailFailedMsg", "Invalid email adress");
    }
  };

  const handlePasswordValue = (e: any) => {
    const PWVal = e.target.value;
    setSignUpInfo({ ...signUpInfo, password: PWVal });
    if (pwValidation.test(PWVal) && PWVal !== null && PWVal.length >= 8) {
      setPassword(PWVal);
      setPasswordFailedMsg(false);
    } else {
      setPasswordFailedMsg(true);
      localStorage.setItem(
        "passwordFailedMsg",
        "Passwords must contain at least eight characters, including at least 1 letter and 1 number."
      );
    }
  };

  const handleSignUp: React.MouseEventHandler = async (
    event: React.MouseEvent
  ) => {
    event.preventDefault();

    try {
      await axios
        .post("/api/members", {
          email: email,
          name: name,
          nickName: nickName,
          password: password,
        })
        .then(response => {
          console.log(response.data);
          navigation("/");
        });
    } catch (err: unknown | any) {
      console.log(err.response.data);
      alert("Please check your Email and Password are correct.");
    }
    window.location.reload();
  };

  return (
    <>
      <div className="SignUpFormContainer">
        <S.SignUpForm>
          {/* SECTION #1 DisplayName  */}
          <div className="SUDisplayname">
            <label id="SULabelDisplayname" htmlFor="SUDisplayname">
              Display name
            </label>
            <input
              id="SUInputD"
              name="SUDisplayname"
              type="text"
              onChange={handleNickNameValue}
            />
            {nickNameFailedMsg && (
              <p className="invalid">
                {localStorage.getItem("nickNameFailedMsg")}
              </p>
            )}
            {/* SECTION #2 E-mail */}
            <div className="SUEmail">
              <label id="SULabelEmail" htmlFor="SUEmail">
                Name
              </label>
              <input
                id="SUInputE"
                name="SUEmail"
                type="text"
                onChange={handleNameValue}
              />
            </div>
            <div className="SUEmail">
              <label id="SULabelEmail" htmlFor="SUEmail">
                Email
              </label>
              <input
                id="SUInputE"
                name="SUEmail"
                type="text"
                onChange={handleEmailValue}
              />
            </div>
            {/* Email 유효성 검사 Msg */}
            {emailFailedMsg && (
              <p className="emailinvalid">
                {localStorage.getItem("emailFailedMsg")}
              </p>
            )}
          </div>
          {/* SECTION #3 PW */}
          <div className="SUPassword">
            <label id="SULabelPW" htmlFor="SUPassword">
              Password
            </label>
            <input
              id="SUInputP"
              name="SUPassword"
              type="password"
              onChange={handlePasswordValue}
            />
            {/* Password 유효성 검사 Msg */}
            {passwordFailedMsg && (
              <p className="pwinvalid">
                {localStorage.getItem("passwordFailedMsg")}
              </p>
            )}
          </div>
          <div className="reCAPTCHA" />
          <div className="Opt-inContainer">
            <input id="SUcheckbox" name="SUcheckbox" type="checkbox" />
            <label id="SUOptlabel" htmlFor="SUcheckbox">
              Opt-in to receive occasional product updates, user research
              invitations, company announcements, and digests.
            </label>
          </div>
          {/* SECTION #6 Sign up button */}
          <S.SignUpButton
            bgcolor="var(--blue-600)"
            paddings="10px"
            radius="5px"
            color="white"
            onClick={handleSignUp}
          >
            Sign up
          </S.SignUpButton>
        </S.SignUpForm>
        <S.Div className="termsofservice">
          By clicking “Sign up”, you agree to our terms of service, privacy
          policy and cookie policy
        </S.Div>
      </div>
    </>
  );
}

export default SignUpForm;
