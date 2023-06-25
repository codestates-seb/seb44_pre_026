import * as S from "./style"
import LogoIcon from "../../assets/stack_overflow_footer_icon.png"

const Footer = () => {
    return(
    <S.FooterContainer>
        <S.Footer>
            <S.LogoWrapper> 
            <S.LogoIcon>
                <img className='logoIcon'
                src = {LogoIcon} alt = "logo-img">
                </img>
            </S.LogoIcon>
            </S.LogoWrapper>

            <S.ListWrapper>
            <S.FooterList>
                <h5>STACK OVERFLOW</h5>
                <ul>
                    <li>Questions</li>
                    <li>Help</li>
                </ul>
            </S.FooterList>
            <S.FooterList>
                <h5>PRODUCTS</h5>
                <ul>
                    <li>Teams</li>
                    <li>Advertising</li>
                    <li>Collectives</li>
                    <li>Talent</li>
                </ul>
            </S.FooterList>
            <S.FooterList>
                <h5>COMPANY</h5>
                <ul>
                    <li>About</li>
                    <li>Press</li>
                    <li>Work Here</li>
                    <li>Legal</li>
                    <li>Privacy Policy</li>
                    <li>Teams of Service</li>
                    <li>Contact us</li>
                    <li>Cookie Settings</li>
                    <li>Cookie Policy</li>
                </ul>
            </S.FooterList>
            <S.FooterList> 
                <h5>STACK EXCHANGE NETWORK</h5>
                <ul>
                    <li>Technology</li>
                    <li>Culture & recreation</li>
                    <li>Life & arts</li>
                    <li>Science</li>
                    <li>Professional</li>
                    <li>Business</li>
                    <li>API</li>
                    <li>Data</li>
                </ul>
            </S.FooterList>

            <S.Social>
                <ul>
                    <li>
                    <span>Blog</span>
                    <span>Facebook</span>
                    <span>Twitter</span>
                    <span>Linkedin</span>
                    <span>Instagram</span>
                    </li>
                </ul>
                
                <div className="text">Site design / logo © 2023 Stack Exchange Inc; user</div>
                <div>contributions licensed under CC BY-SA. </div>
                <div>rev 2023.6.16.43501</div>
            </S.Social>

            </S.ListWrapper>
        </S.Footer>
    </S.FooterContainer>
    )
}

export default Footer;