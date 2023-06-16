import { styled } from "styled-components";
import pencil from "../../assets/pencil.png";

export const Article = styled.article`
  width: 20%;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-top: 450px; */
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
  margin: 10px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const TipTitle = styled.div`
  font-size: 18px;
  font-weight: 200;
  height: 40px;
  padding: 10px;
  border-bottom: 1px solid var(--black-075);
  background-color: var(--black-050);
`;

export const TipTextBox = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border: 1px solid var(--black-075);
`;

export const TipIcon = styled.div`
  width: 64px;
  height: 64px;
  background: url(${pencil}) center no-repeat;
  background-size: cover;
  margin-right: 10px;
`;

export const TipText = styled.div`
  width: 100px;
  font-size: 14px;
  flex-grow: 3;
  margin-left: 10px;
`;
