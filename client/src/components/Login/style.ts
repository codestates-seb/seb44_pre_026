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
  background-color: var(--black-050);
`;

export const Login = styled(Div)`
  display: flex;
  width: 100%;
  min-width: 1200px;
  max-width: 1264px;
  flex-direction: column;
  margin: 0;
  padding: 24px;
  background-color: transparent;
  vertical-align: baseline;
  border-left: 0;
  border-right: 0;
  box-sizing: inherit;

  // Oauth button container
  .OauthButtonContainer {
    max-width: 278px;
    flex-direction: column;
    display: flex;
    margin: -4px 0 16px;
  }

  .OauthFormContainer {
    margin: 0 0 24px;
    padding: 24px;
    border-radius: 7px;
    background-color: white;
    width: 278px;
    height: 234px;
    box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
      0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  }

  .LogoContainer {
    margin: 0 0 24px;
  }

  .Link {
    display: flex;
    flex-direction: column;
    margin: 0 0 24px;
    font-size: 13px;
  }
`;

// Oauth button
export const OauthAouthButton = styled(Button)`
  margin: 4px 0;
  width: 278px;
`;


export const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 0 0 24px;
  height: 198px;

  .LoginEmail,
  .LoginPassword {
    display: flex;
    margin: 6px 0;
    flex-direction: column;
  }

  #LoginLabelEmail,
  #LoginLabelPassword {
    padding: 2px 2px;
    margin: 0 2px;
  }

  #LoginInputEmail,
  #LoginInputPassword {
    padding: 8px 8px;
    border: 1px solid var(--black-200);
    max-height: 32px;
    border-radius: 3px;

    &:focus {
      box-shadow: 0 0 0 4px hsla(206, 100%, 40%, 0.15);
      outline: none;
    }
  }
  /* 유효성 검사 */
  .invalid {
    font-size: 13px;
    color: red;
  }
`;

// Sign in Button
export const LoginButton = styled(Button)`
  margin: 16px 0;
  font-size: 13px;

  &:hover {
    background-color: var(--blue-600);
  }
`;
