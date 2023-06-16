import { styled } from "styled-components";
import backgroundImage from "../assets/background.svg";

export const Section = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hsl(210deg 10.63% 97.52%);
`;

export const Header = styled.div`
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
  justify-content: center;
  /* align-items: center; */
  align-items: flex-start;
  margin-left: 5%;

  @media screen and (max-width: 1000px) {
    align-items: center;
  }
`;

export const QuestionTitle = styled.div`
  font-size: 27px;
  font-weight: bold;
  /* width: 460.6px; */
  width: 100%;
  margin-bottom: 10px;
  text-align: start;
  line-height: 100px;
`;

export const TitleImage = styled.img.attrs({
  src: `${backgroundImage}`,
})`
  width: 50%;
`;

export const FormLayout = styled.div`
  display: flex;
`;

export const ButtonLayout = styled.div`
  display: flex;
  width: 50%;
  margin: 20px 0px;
`;
