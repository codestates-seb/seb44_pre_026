import { styled } from "styled-components";

export const Section = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 24px;
`;

export const EditLayout = styled.article`
  width: 100%;
  max-width: 1264px;
  padding-top: 20px;
  display: flex;
  align-items: start;
`;

export const FormLayout = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;

  & > div:first-child {
    padding-bottom: 15px;
  }
`;

export const SubHeading = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const InputTitle = styled.input`
  width: 100%;
  padding: 8px 9px;
  border: 1px solid var(--black-200);
  border-radius: 5px;

  &:focus {
    outline: 1px solid rgba(0, 195, 255, 0.2);
    box-shadow: 0 0 6px 2px rgba(4, 137, 247, 0.555);
  }
`;

export const Viewer = styled.div`
  margin-top: 50px;
`;

export const ButtonLayout = styled.div`
  display: flex;
  width: 50%;
  margin-top: 20px;

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
      border-radius: 3px;
      padding: 10px 9px;
      margin-left: 15px;
      color: var(--blue-600);

      &:hover {
        background-color: var(--powder-050);
      }
    }
  }
`;
