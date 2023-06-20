import * as S from "./style"
import LogoImg from "../../assets/Stack_Overflow_logo.png"
import {FaSearch} from "react-icons/fa";

//로그인 전 헤더
const Header = () => {
    return (
        <S.HeaderContainer>
            <S.LogoContainer>
                <a href = "#">
                    <S.LogoImg>
                        <img className="logoimg" 
                        src={LogoImg} alt = "logo-img" />
                    </S.LogoImg>
                </a>
            </S.LogoContainer>

            <S.TextWrapper>
                <div className="text">About</div>
                <div className="text">Products</div>
                <div className="text">For Teams</div>
            </S.TextWrapper>

            <S.Searchbar>
            <form id="search">
                <FaSearch className = "icon"></FaSearch>
                <input className="searchbar_input"
                placeholder = "Search..."
                ></input>
            </form>
            </S.Searchbar>

            <div className="Button">
                <S.LoginBtn>Log in</S.LoginBtn>
                <S.SignUpBtn>Sign up</S.SignUpBtn>
            </div>

        </S.HeaderContainer>
    )
}

//로그인 후 헤더

export default Header;