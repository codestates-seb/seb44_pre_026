import { styled } from "styled-components";

export const Footer = styled.footer`
  width: 100vw;
`;

export const FooterContainer = styled.ul`
  background-color: rgba(35, 38, 41);
  color: grey;
  width: 100%;
  height: max-content;
  bottom: 3px;
  position: relative;
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  padding-bottom: 20px;
  position: relative;
  transform: translateY(0);
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  width: 100%;
`;

export const FooterList = styled.div`
  margin: 0 40px;
  float: left;

  ul {
    display: flex;
    flex-direction: column;
  }

  li {
    margin: 7px;
    list-style: none;
  }

  h5 {
    font-size: 20px;
    color: #babfc3;
    letter-spacing: 0.1px;
    margin-bottom: 10px;
  }
`;

export const Social = styled.span`
  font-size: 16px;
  display: flex;
  flex-direction: column;

  .social {
    display: flex;
    justify-content: space-around;
    height: 70%;
  }

  .text {
    display: flex;
  }
`;

export const LogoWrapper = styled.div`
  width: 90px;
  display: flex;
  justify-content: center;
  margin-left: 20px;
`;

export const LogoIcon = styled.div`
  img {
    width: 80px;
    margin-top: 10px;
  }
`;
