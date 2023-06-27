import { styled } from "styled-components";

export const QuestionNotice = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--blue-050);
  border: 1px solid var(--blue-200);
  border-radius: 5px;
  padding: 24px;
  width: 65%;
  margin: 16px 0;
  color: var(--black-800);

  & ul {
    padding-left: 30px;
  }

  & li {
    font-size: 14px;
  }
`;

export const SubHeading = styled.div`
  font-size: 20px;
`;

export const SubStep = styled.span`
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const SubContent = styled.div`
  margin: 15px 0px;
  font-size: 15px;
`;
