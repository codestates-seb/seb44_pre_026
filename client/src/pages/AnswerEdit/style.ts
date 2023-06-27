import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 24px;
  padding-bottom: 50px;
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
  width: 70%;
  flex-direction: column;

  & > div:first-child {
    width: 835px;
  }

  & h2 {
    font-size: 17px;
    font-weight: 400;
    margin: 20px 0;
  }

  & div:nth-child(2) {
    font-size: 15px;
    color: var(--black-700);
  }
`;

export const Grippie = styled.div`
  background-position: calc(50% + 34px) -364px;
  border: 1px solid var(--bc-darker);
  border-width: 0 1px 1px;
  cursor: s-resize;
  height: 11px;
  overflow: hidden;
  background-color: var(--black-050);
`;

export const SubHeading = styled.div`
  font-size: 19px;
  font-weight: 400;
  margin: 16px 0 19px 0;
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
