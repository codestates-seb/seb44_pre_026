import { styled } from "styled-components";

export const HeaderContainer = styled.div`
width: 100vw;
height: 80px;
background-color: white;
border-top: solid rgb(244,130,36) 3px;
border-bottom: 2px solid rgb(214,217,220);
display: flex;
justify-content: space-between;
align-items: center;
`

export const LogoContainer = styled.div`
margin-inline-start: 150px;
`

export const LogoImg = styled.div`
img {
    width: 230px;
}
`

export const TextWrapper = styled.div`
    display:flex;
    justify-content: column;
    font-size: 20px;
    margin: 4px;

.text{
    font-size: 18px;
    color: solid rgb(81,89,95);
    margin: 8px;
}
`


export const LoginBtn = styled.button`
width: 95px;
height: 48px;
font-size: 20px;
background-color: rgb(225,236,244);
color: rgb(9,149,255);
border-color: rgb(121,167,199);
margin-inline-end: 10px;
border-radius: 5px;
`

export const SignUpBtn = styled.button`
width: 105px;
height: 48px;
font-size: 20px;
background-color: rgb(9,149,255);
color: white;
border-color: rgb(9,149,255);
margin-inline-end: 150px;
border-radius: 5px;
`

export const Searchbar = styled.div`
    width: 800px;
    height: 48px;
    border-radius: 5px;
    border: solid 1px black;
    display: flex;
    align-items: center;

.icon{
    width: 35px;
}

.searchbar_input {
    border: none;
    height: 43px;
    width: 700px;
    font-size: 18px;
}
`