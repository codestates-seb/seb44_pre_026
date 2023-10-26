import { styled } from "styled-components";

interface Formprops {
  paddings?: string;
  radius?: string;
}

const Form = styled.form<Formprops>`
  padding: ${(props) => props.paddings};
  border-radius: ${(props) => props.radius};
`;

interface Buttonprops {
  paddings?: string;
  radius?: string;
  bgcolor?: string;
  color?: string;
}

const Button = styled.button<Buttonprops>`
  border-style: none;
  border-radius: ${(props) => props.radius || "3px"};
  padding: ${(props) => props.paddings};
  background-color: ${(props) => props.bgcolor || "transparent"};
  color: ${(props) => props.color || "black"};
`;

export const Div = styled.div<{ paddings?: string }>`
  display: flex;
  padding: ${(props) => props.paddings};
  justify-content: center;
  align-items: center;
  font: unset;
`;

export const Main = styled(Div)`
  position: relative;
  padding: 300px 0;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  max-width: 100%;
  box-sizing: border-box;
  height: calc(100vh);
  min-height: 55rem;
  background-color: var(--black-050);
`;

export const SignUp = styled(Div)`
  width: 100%;
  max-width: 1264px;
  margin: 0;

  // left Contents
  .left {
    display: flex;
    flex-direction: column;
    width: 421px;
    height: 300px;
    margin: 0 48px 128px 0;
  }

  .lefthead {
    margin: 0 0 32px 0;
    font-size: 27px;
  }
  .SVGContainer {
    margin: 0;
    width: 26px;
  }

  .SVGContainer svg {
    width: 26px;
    height: 26px;
  }

  .LeftItemContainer {
    display: flex;
    margin: 0;
  }
  .LeftItembottom {
    font-size: 13px;
  }

  // right Form
  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .buttonContainer {
    display: flex;
    flex-direction: column;
    max-width: 316px;
    margin: -4px 0 16px;
  }

  .SignUpFormContainer {
    margin: 0 0 24px;
    padding: 24px;
    width: 316px;
    max-height: 600px;
    background-color: white;
    box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
      0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
    border-radius: 7px;
  }

  // 입력창들 정렬 및 마진,패딩조절
  .SUDisplayname,
  .SUEmail,
  .SUPassword {
    display: flex;
    flex-direction: column;
    margin: 6px 0;
  }
  #SULabelDisplayname,
  #SULabelEmail,
  #SULabelPW {
    margin: 0 2px;
    padding: 2px 0;
  }
  #SUInputD,
  #SUInputE,
  #SUInputP {
    padding: 8px 8px;
    max-height: 32px;
    border: 1px solid var(--black-200);
    border-radius: 3px;
    &:focus {
      box-shadow: 0 0 0 4px hsla(206, 100%, 40%, 0.15);
      outline: none;
    }
  }
  #passwordTerm {
    font-size: 12px;
  }

  // rechapcha
  .reCAPTCHA {
    width: 268px;
    height: 150px;
    background-color: var(--black-050);
    margin: 6px 0;
    padding: 8px 0 2px;
  }
  // opt-in
  .Opt-inContainer {
    font-size: 13px;
  }
  // termsofservice
  .termsofservice {
    margin: 23px 0 0;
    font-size: 12px;
    color: hsl(210, 8%, 45%);
  }
  // transport
  .transportcontainer {
    padding: 16px;
    margin-bottom: 24px;
    font-size: 13px;
    flex-direction: column;
    .gosignin {
    }
    .movetosignin,
    .movetoTsignin {
      margin-left: 13px;
      &:link {
        color: blue;
      }
    }
  }
`;

export const LeftContents = styled(Div)`
  margin: 0 0 24px 0;
  font-size: 15px;
  white-space: nowrap;
`;

// Aouth Buttons
export const OAuthButton = styled(Button)`
  margin: 4px 0;
  width: 316px;
`;

export const SignUpButton = styled(Button)`
  margin: 2px 0;
  font-size: 13px;

  &:hover {
    background-color: var(--blue-700);
  }
`;

export const SignUpForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 0 0 24px;
  max-height: 400px;

  // nickName validation
  .nicknameinvalid {
    font-size: 13px;
    padding-top: 5px;
    color: red;
  }
  // email validation
  .emailinvalid {
    font-size: 13px;
    padding-top: 5px;
    color: red;
  }
  // password validation
  .pwinvalid {
    font-size: 13px;
    color: red;
    padding-top: 5px;
  }
`;
