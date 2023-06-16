import { styled } from "styled-components";

export const QuestionNotice = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--blue-050);
  border: 1px solid var(--blue-200);
  border-radius: 5px;
  /* width: 460.6px; */
  padding: 24px;
  width: 70%;
  margin: 16px 0;

  & li {
    font-size: 14px;
  }
`;

export const SubHeading = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const SubStep = styled.span`
  font-size: 15px;
  font-weight: 600;
`;

export const SubContent = styled.div`
  margin: 10px 0px;
  font-size: 15px;
`;
