import SignUpForm from "../../components/SignUp/SignUpForm";
import * as S from "../../components/SignUp/style";

const preparingService = (e: any) => {
  e.preventDefault();
  alert("서비스 준비중인 기능입니다.")
};

const SignUpPage = () => {
  return (
    <S.Main>
      <S.SignUp>
        {/* Left Contents */}
        <div className="left">
          <h1 className="lefthead">Join the Stack Overflow community</h1>
          <div className="LeftItemsOutContainer">
            <div className="LeftItemContainer">
              <div className="SVGContainer">
                <svg />
              </div>
              <S.LeftContents>Get unstuck — ask a question</S.LeftContents>
            </div>
            <div className="LeftItemContainer">
              <div className="SVGContainer">
                <svg />
              </div>
              <S.LeftContents>
                Unlock new privileges like voting and commenting
              </S.LeftContents>
            </div>
            <div className="LeftItemContainer">
              <div className="SVGContainer">
                <svg />
              </div>
              <S.LeftContents>
                Save your favorite questions, answers, watch tags, and more
              </S.LeftContents>
            </div>
            <div className="LeftItemContainer">
              <div className="SVGContainer">
                <svg />
              </div>
              <S.LeftContents>Earn reputation and badges</S.LeftContents>
            </div>
            <div className="LeftItembottom">
              Collaborate and share knowledge with a private group for FREE.
              <br />
              <a href="https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up">
                Get Stack Overflow for Teams free for up to 50 users.
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="buttonContainer">
            <S.OAuthButton
              id="google"
              bgcolor="white"
              paddings="10px"
              radius="5px"
              onClick={preparingService}
            >
              Sign up with Google
            </S.OAuthButton>
            <S.OAuthButton
              id="github"
              bgcolor="var(--black-750)"
              paddings="10px"
              radius="5px"
              color="white"
              onClick={preparingService}
            >
              Sign up with GitHub
            </S.OAuthButton>
            <S.OAuthButton
              id="facebook"
              bgcolor="#385499"
              paddings="10px"
              radius="5px"
              color="white"
              onClick={preparingService}
            >
              Sign up with Facebook
            </S.OAuthButton>
          </div>
          <SignUpForm />
          <S.Div className="transportcontainer">
            <S.Div className="gosignin">
              Already have an account?
              <a href="/signin" className="movetosignin">
                Log in
              </a>
            </S.Div>
            <S.Div className="talentedsignin">
              Are you an employer?
              <a
                href="https://talent.stackoverflow.com/users/login"
                className="movetoTsignin"
              >
                Sign up on Talent
              </a>
            </S.Div>
          </S.Div>
        </div>
      </S.SignUp>
    </S.Main>
  );
};

export default SignUpPage;
