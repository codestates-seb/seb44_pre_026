import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  height: auto;
  width: 15rem;
  position: fixed;
  background-color: white;
  margin-top: 70px;
  border-right: 2px solid rgb(214, 217, 220);
`;

export const NavBarContainer = styled.nav`
  display: flex;
  margin: 30px 0px;
  height: 100vh;
  width: 280px;
`;

export const Nav = styled.div`
  width: 250px;

  li {
    font-size: 18px;
    color: rgb(108, 117, 126);
    list-style: none;
    padding: 1rem 2rem;
    cursor: pointer;
    &:hover {
      color: black;
    }

    &.active {
      background-color: white;
      width: 15rem;
      color: black;
      background-color: rgb(241, 242, 243);
      border-right: solid rgb(244, 130, 36) 3px;
      font-weight: bold;
    }
  }

  .selected {
    padding-left: 65px;
  }

  .logout {
    margin-top: 2rem;
  }

  .logout,
  .delete {
    font-size: 18px;
    color: rgb(108, 117, 126);
    list-style: none;
    padding: 1rem 2rem;
    cursor: pointer;
    &:hover {
      color: black;
    }
    &:focus,
    &:active,
    &.active {
      background-color: white;
      width: 230px;
      color: black;
      font-weight: bold;
    }
  }

  .icon {
    margin-left: 30px;
    margin-right: 4px;
  }
`;
