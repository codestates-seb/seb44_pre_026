import { styled } from "styled-components";

export const PostLayout = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  margin-top: 24px;
  padding-right: 16px;
  padding-bottom: 12px;
  width: 70%;

  & > div:nth-child(2) {
    min-width: 0;
  }
`;

export const VoteBox = styled.div`
  padding-right: 16px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  & > button {
    border: 1px solid var(--black-100);
    border-radius: 50%;
    /* padding: 10px; */
    background-color: #fff;
    margin: 4px;

    &:hover {
      background-color: var(--orange-100);
    }

    & > img {
      width: 36px;
      height: 36px;
    }
  }

  & > div {
    margin: 4px;
    font-size: 20px;
    font-weight: 400;
  }
`;

export const ContentBox = styled.div`
  padding-right: 16px;
  grid-column: 2;
  width: auto;
  min-width: 0;
`;

export const Content = styled.div`
  margin-bottom: 40px;
  color: var(--black-700);
`;

export const ContentFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterMenu = styled.div`
  font-size: 14px;

  & > span,
  a {
    margin-right: 10px;
    cursor: pointer;
    color: var(--fc-light);
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 11px 11px 11px 4px;
    border-radius: 3px;
    /* border-top-left-radius: 3px;
    border-top-right-radius: 3px; */

    & > span {
      width: 127px;
    }

    & > span > a {
      color: var(--blue-600);
    }
  }
`;
