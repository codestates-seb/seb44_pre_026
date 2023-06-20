import LoginForm from '../../components/Login/LoginForm'
import * as S from './style';

const LoginPage = () => {
  return (
    <S.BackContainer>
      <S.SignInContainer>
        <LoginForm />
        <S.DivCom className="Links" paddings="16px">
          <S.DivCom className="MakeAccount">
            Don’t have an account?
            <a href="http://localhost:5173/signup"> Sign up</a>
          </S.DivCom>
          <S.DivCom className="Employer">
            Are you employer?{' '}
            <a href="https://talent.stackoverflow.com/users/login">
              Sign up on Talent
            </a>
          </S.DivCom>
        </S.DivCom>
      </S.SignInContainer>
    </S.BackContainer>
  );
};

export default LoginPage;