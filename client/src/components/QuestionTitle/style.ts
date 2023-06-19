import { styled } from "styled-components";

export const Container = styled.article`
  display: flex;
  width: 100%;
  height: 170px;
  margin-bottom: 16px;
`;

export const InputTitleLayout = styled.div`
  border: 1px solid var(--black-075);
  min-width: 65%;
  padding: 24px;
  background-color: #fff;
  color: var(--black-800);
  border-radius: 5px;
`;

export const InputTitle = styled.input`
  width: 100%;
  padding: 7px;
  border: 1px solid var(--black-075);
  border-radius: 5px;

  &:focus {
    outline: 1px solid rgba(0, 195, 255, 0.2);
    box-shadow: 0 0 6px 2px rgba(4, 137, 247, 0.555);
  }
`;

export const SubHeading = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

export const SubContent = styled.div`
  margin: 10px 0px;
  font-size: 12px;
`;
