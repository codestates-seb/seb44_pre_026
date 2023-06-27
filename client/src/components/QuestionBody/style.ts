import { styled } from "styled-components";

export const Container = styled.article`
  display: flex;
  width: 100%;
  height: 350px;
`;

export const InputBodyLayout = styled.div`
  border: 1px solid var(--black-075);
  min-width: 65%;
  padding: 24px;
  background-color: #fff;
  color: var(--black-800);
  border-radius: 5px;
`;

export const SubHeading = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

export const SubContent = styled.div`
  margin: 10px 0px;
  font-size: 12px;
`;
