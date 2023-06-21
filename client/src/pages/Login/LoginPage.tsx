import LoginForm from "../../components/Login/LoginForm";
import * as S from "../../components/Login/style";
import StackOverflowLogo from "../../assets/stacklogo.png"

const LoginPage = () => {
  return (
    <S.Main>
      <S.Login>
        {/* Logo */}
        <S.Div className="LogoContainer">
          <a href="http://localhost:5173/">
            <img className="login-logo" src={StackOverflowLogo} width="32" height="37" />
          </a>
        </S.Div>
        {/* Oauth Login Button */}
        <div className="OauthButtonContainer ">
          <S.OauthAouthButton id="google" bgcolor="white" paddings="10px" radius="5px"
          >
            Sign up with Google
          </S.OauthAouthButton>
          <S.OauthAouthButton id="github" bgcolor="var(--black-750)" paddings="10px" radius="5px" color="white">
            Sign up with GitHub
          </S.OauthAouthButton>
          <S.OauthAouthButton id="facebook" bgcolor="#385499" paddings="10px" radius="5px" color="white">
            Sign in with Facebook
          </S.OauthAouthButton>
        </div>
        {/* LoginForm */}
        <LoginForm />
        <S.Div className="Link" paddings="16px">
        {/* Sign up link */}
          <S.Div className="MakeAccount">
            Don’t have an account?
            <a href="http://localhost:5173/signup"> Sign up</a>
          </S.Div>
        {/* Link for Employer */}
          <S.Div className="Employer">
            Are you employer?{" "}
            <a href="https://talent.stackoverflow.com/users/login">
              Sign up on Talent
            </a>
          </S.Div>
        </S.Div>
      </S.Login>
    </S.Main>
  );
};

export default LoginPage;
