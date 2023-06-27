import { styled } from "styled-components";

//검색창

export const Question = styled.div`
  display: flex;
  justify-content: column;
`;

export const ContentWrapper = styled.div`
  margin-top: 3rem;
  width: 100%;
  border-bottom: grey solid 1px;
`;

export const Answers = styled.div`
  padding-left: 2rem;
  display: flex;
  align-items: center;
  width: 100%;
  border-top: grey solid 1px;
  div {
    margin-top: 20px;
  }
`;

export const QuestionInfo = styled.div`
  margin: 2rem;
  .title {
    color: #0074cc;
    font-size: 1.3rem;
  }
  button {
    color: #0074cc;
    background-color: #e1ecf4;
    border: none;
    width: 4rem;
    height: 2rem;
    margin-bottom: 1rem;
  }
  span {
    display: flex;
    float: right;
  }
  .nickname {
    margin-right: 0.6rem;
  }
  .tag {
    margin-top: 1rem;
  }
`;
