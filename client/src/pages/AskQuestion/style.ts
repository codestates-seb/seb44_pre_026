import { styled } from "styled-components";
import backgroundImage from "../../assets/background.svg";

export const Section = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: hsl(210deg 10.63% 97.52%);
  padding: 24px;
  padding-bottom: 50px;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 130px;
`;

export const QuestionLayout = styled.article`
  width: 100%;
  max-width: 1264px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  /* margin-left: 5%; */
`;

export const QuestionTitle = styled.h1`
  font-size: 27px;
  font-weight: 500;
  width: 100%;
  margin-bottom: 10px;
  text-align: start;
  line-height: 100px;
`;

export const TitleImage = styled.img.attrs({
  src: `${backgroundImage}`,
})`
  width: 60%;
`;

export const FormLayout = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonLayout = styled.div`
  display: flex;
  width: 50%;
  margin: 20px 0px;

  & > button {
    margin-left: calc(4px * 1);
    display: inline-block;
    background-color: var(--blue-500);
    color: var(--white);
    font-size: 13px;
    padding: 10px 9px;
    border-radius: 4px;
    box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
    border: 1px solid hsl(205, 41%, 63%);

    &:hover {
      background-color: var(--blue-button-hover);
    }
  }

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;

    & > button {
      background: none;
      border: none;
      margin-left: 15px;
      color: var(--red-500);

      &:hover {
        color: var(--red-900);
      }
    }
  }
`;
