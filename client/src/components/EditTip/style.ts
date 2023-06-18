import { styled } from "styled-components";

export const EditTip = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 365px;
  margin-left: 24px;
  position: sticky;

  & > div {
    width: 100%;
  }

  & ul {
    background-color: var(--yellow-050);
    padding: 4px 15px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border: 1px solid var(--yellow-200);

    & > li {
      font-size: 13px;
      margin: 12px;
    }
  }
`;

export const TipHeader = styled.div`
  padding: 12px 15px;
  background-color: var(--yellow-100);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid var(--yellow-200);
  font-weight: normal;
`;
