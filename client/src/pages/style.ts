import { styled } from "styled-components";

export const Section = styled.section`
  display: flex;
`;

export const QuestionLayout = styled.article`
  width: 100vw;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 1000px) {
    align-items: center;
  }
`;

export const ButtonLayout = styled.button`
  display: flex;
  width: 50%;
  margin: 20px 0px;
`;
