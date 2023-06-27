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

export const FormLayout = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1264px;
`;

export const FormBox = styled.form`
  width: 70%;

  & > div:first-child {
    width: 70%;
    font-size: 20px;
    font-weight: 400;
    color: var(--black-800);
    padding-top: 20px;
    margin-bottom: 20px;
  }
`;

export const ButtonLayout = styled.div`
  display: flex;
  width: 50%;
  margin: 20px 0px;

  & > button {
    margin-left: calc(4px * 1);
    margin-top: 40px;
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
`;
