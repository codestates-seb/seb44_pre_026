import { styled } from "styled-components";

export const FooterContainer = styled.footer`
width: 100vw;
` 

export const Footer = styled.ul`
background-color: rgba(35,38,41);
color: grey;
width: 100%;
height: 370px;
bottom: 3px;
position: absolute;
display: flex;
justify-content: space-between;
`;

export const ListWrapper = styled.div`
display: flex;
justify-content: space-between;
margin: 20px;
width: 80vw;
`

export const FooterList = styled.div`
margin: 0 40px;
ul {
    display: flex;
    flex-direction: column;
}

li {
    margin: 7px;
}

h5 {
    font-size: 17px;
    letter-spacing: 0.1px;
    margin: 5px;
}
`

export const Social = styled.span`
font-size: 16px;`


export const LogoWrapper = styled.div`
width: 20vw;
display: flex;
justify-content: right;`


export const LogoIcon = styled.div`
img {
    width: 80px;
    margin: 10px;
}
`
