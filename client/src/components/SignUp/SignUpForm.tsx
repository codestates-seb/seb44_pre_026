import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

function SignUpForm() {
  const navigation = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickName] = useState("");

  const [validation, setValidation] = useState({
    email: "",
    nickName: "",
    password: "",
  });

  const isValidEmail = (email: any) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const isValidPassword = (password: any) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/.test(password);
  }

  const isValidNickname = (nickname: any) => {
    return /^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/.test(nickname);
  }

  const handleEmailValidation = (e: any) =>  {
    const email = e.target.value;
    let emailValidationMSG = "";

    if (!email) {
      emailValidationMSG = "Please input email";
    } else if(!isValidEmail(email)) {
      emailValidationMSG = "Invalid email adress";
    }

    setValidation({...validation, email: emailValidationMSG});
    setEmail(email);
  }

  const handlePasswordValidation = (e:any) => {
    const password = e.target.value;
    let passwordValidationMSG = "";

    if (!password) {
      passwordValidationMSG = "Please input password";
    } else if(!isValidPassword(password)) {
      passwordValidationMSG = "Passwords must contain at least eight characters, including at least 1 letter and 1 number."
    }

    setValidation({...validation, password: passwordValidationMSG});
    setPassword(password);
  }

  const handleNicknameValidation = (e:any) => {
    const nickName = e.target.value
    let nicknameValidationMSG = "";

    if (!nickName) {
      nicknameValidationMSG = "Please input nickname"
    } else if(!isValidNickname(nickName)) {
      nicknameValidationMSG = "Only Korean and English upper and lower case letters and numbers can be entered."
    }

    setValidation({...validation, nickName: nicknameValidationMSG});
    setNickName(nickName);
  }

  const handleSignUp: React.MouseEventHandler = async (
    event: React.MouseEvent
  ) => {
    event.preventDefault();

    if (!isValidEmail(email) ||
        !isValidPassword(password) ||
        !isValidNickname(nickName)
    ) {
      alert("Please make sure your email, password, and nickname are valid.")
    }
    try {
      await axios
        .post("/api/members", {
          email: email,
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
              onChange={handleNicknameValidation}
            />
              <p className="nicknameinvalid">
                {validation.nickName}
              </p>
            <div className="SUEmail">
              <label id="SULabelEmail" htmlFor="SUEmail">
                Email
              </label>
              <input
                id="SUInputE"
                name="SUEmail"
                type="text"
                onChange={handleEmailValidation}
              />
            </div>
            {/* Email 유효성 검사 Msg */}
              <p className="emailinvalid">
                {validation.email}
              </p>
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
              onChange={handlePasswordValidation}
            />
            {/* Password 유효성 검사 Msg */}
              <p className="pwinvalid">
                {validation.password}
              </p>
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
