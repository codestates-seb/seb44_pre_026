import { styled } from "styled-components";

export const AnswerLayout = styled.article`
  width: 100%;
  max-width: 1264px;
  padding-top: 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  width: 70%;
  justify-content: space-between;

  & > div:first-child {
    font-size: 19px;
    font-weight: 400;
  }
`;

export const SortMenu = styled.div`
  & > label {
    font-size: 12px;
  }

  & > select {
    padding: 7px 32px 7px 7px;
    border: 1px solid var(--bc-darker);
    border-radius: 3px;
  }
`;
