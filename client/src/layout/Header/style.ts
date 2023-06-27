import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 70px;
  background-color: white;
  border-top: solid rgb(244, 130, 36) 3px;
  border-bottom: 2px solid rgb(214, 217, 220);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 4rem;
  padding-right: 4rem;
  position: fixed;
  top: 0;
  z-index: 1;
`;

export const LogoContainer = styled.div``;

export const LogoImg = styled.div`
  img {
    width: 200px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: column;
  font-size: 16px;
  left: 20;
  color: #51595f;

  .text,
  .hide {
    font-size: 16px;
    color: solid rgb(81, 89, 95);
    margin: 8px;
  }
`;

export const Button = styled.div`
  display: flex;
`;

export const LoginBtn = styled.button`
  width: 90px;
  height: 43px;
  font-size: 17px;
  background-color: rgb(225, 236, 244);
  color: rgb(9, 149, 255);
  border: none;
  outline: rgb(121, 167, 199);
  margin-inline-end: 10px;
  border-radius: 5px;
`;

export const SignUpBtn = styled.button`
  width: 100px;
  height: 43px;
  font-size: 17px;
  background-color: rgb(9, 149, 255);
  color: white;
  border: none;
  outline: rgb(9, 149, 255);
  border-radius: 5px;
`;

export const LogoutBtn = styled.button`
  width: 90px;
  height: 43px;
  font-size: 17px;
  background-color: rgb(225, 236, 244);
  color: rgb(9, 149, 255);
  border: none;
  outline: rgb(121, 167, 199);
  margin-inline-end: 10px;
  border-radius: 5px;
`;

export const Searchbar = styled.div`
  width: 45rem;
  height: 40px;
  border-radius: 5px;
  border: solid 1px black;
  display: flex;
  margin-right: 10px;
  flex-direction: row;
  align-items: center;

  .icon {
    width: 30px;
  }

  .searchbar_input {
    border: none;
    height: 37px;
    width: 40rem;
    font-size: 15px;
    position: relative;
  }
`;
