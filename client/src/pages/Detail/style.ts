import { styled } from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 24px;
  padding-bottom: 50px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1264px;
  margin-top: 24px;
  line-height: 1.35;
`;

export const DetailLayout = styled.article`
  width: 100%;
  max-width: 1264px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const DetailTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  color: var(--black-700);
  margin-bottom: 8px;
`;

export const DetailInfoBox = styled.div`
  display: flex;
  border-bottom: 1px solid var(--black-075);
`;

export const DetailInfo = styled.div`
  display: flex;
  padding-bottom: 8px;
  margin: 0 16px 8px 0;

  & > span {
    font-size: 13px;
    color: var(--fc-light);
    margin-right: 4px;
  }

  & > span:nth-child(2) {
    color: #232629;
  }
`;

export const PostLayout = styled.div`
  display: flex;
  margin-top: 24px;
  padding-right: 16px;
  width: 70%;
  min-width: 0;
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
  color: var(--fc-light);

  & > span {
    margin-right: 10px;
    cursor: pointer;
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
    background-color: var(--powder-100);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;

    & > span {
      width: 127px;
    }

    & > span > a {
      color: var(--blue-600);
    }
  }

  & > div:nth-child(2) {
    font-size: 14px;
    padding: 7px;
    background-color: var(--powder-200);
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    width: 178px;
    color: var(--fc-medium);
  }
`;
