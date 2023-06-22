import { styled } from "styled-components";

export const Top = styled.section`
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Title = styled.div`
  font-size: 2.1rem;
`;

export const AskButton = styled.button`
  font-size: 1.2rem;
  padding-top: 1.1rem;
  padding-bottom: 1.1rem;
  padding-left: 1.3rem;
  padding-right: 1.3rem;
  background-color: rgb(9, 149, 255);
  color: white;
  border-color: rgb(9, 149, 255);
  border-radius: 3px;
  cursor: pointer;
  border: none;
`;

export const ButtonWrapper = styled.section`
  .filter {
    margin-left: 2rem;
    background-color: #b3d3ea;
    color: #2c5877;
  }
`;

export const TagButton = styled.button`
  display: flex;
  align-items: center;
  float: right;
  padding: 1.3rem;
  height: 2.7rem;

  font-size: 1rem;
  background-color: white;
  color: grey;
  border-radius: 3px;
  cursor: pointer;
  border-color: grey;
  outline: 0;
  border: 1.5px solid #9ea6ac;

  &:hover {
    background-color: #f8f9f9;
  }

  &.active {
    background-color: #e4e5e7;
    color: #3b4044;
  }
`;

export const activeStyle = styled.button`
  background-color: #e4e5e7;
  color: #3b4044;
`;
