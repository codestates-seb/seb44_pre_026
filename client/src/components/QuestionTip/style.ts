import { styled } from "styled-components";
import pencil from "../../assets/pencil.png";

export const Article = styled.article`
  width: 100%;
  display: flex;
  align-items: start;
  margin-left: 10px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const TipLayout = styled.div`
  width: 340px;
  border: 1px solid var(--black-100);
  border-radius: 5px;
  flex-shrink: 0;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  margin: 0 10px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const TipTitle = styled.div`
  font-size: 15px;
  font-weight: 300;
  height: 40px;
  padding: 10px;
  border-bottom: 1px solid var(--black-075);
  background-color: var(--black-050);
`;

export const TipTextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border: 1px solid var(--black-075);
`;

export const TipIcon = styled.div`
  width: 32px;
  height: 32px;
  background: url(${pencil}) center no-repeat;
  background-size: cover;
  padding: 0 10px;
  margin-bottom: 10px;
  margin-right: 20px;
`;

export const TipText = styled.div`
  width: 100px;
  font-size: 12px;
  flex-grow: 1;
  padding: 0 10px;
  white-space: pre-line;
`;
