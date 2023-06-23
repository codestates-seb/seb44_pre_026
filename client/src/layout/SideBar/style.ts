import { styled } from "styled-components";


export const Container = styled.div`
display: flex;
height: 100vh;
width: 250px;
position: fixed;
background-color: white;
border-right: 2px solid rgb(214,217,220);
`

export const NavBarContainer = styled.nav`
display: flex;
margin: 30px 0px;
height: 80vh;
width: 280px;
position: sticky;
`

export const Nav = styled.div`
width: 250px;

li {
    font-size: 20px;
    color: rgb(108,117,126);
    list-style: none;
    padding: 1rem 2rem;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: black;
    }
    &:active {
        background-color: rgb(241,242,243);
        border-right: solid rgb(244,130,36) 3px;
    }
}

.home {
    margin: 10px 0px;
}

.selected {
    padding-left: 65px;
}

`