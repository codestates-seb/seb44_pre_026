import * as S from "./style";
import LogoImg from "../../assets/Stack_Overflow_logo.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useState } from "react";

//로그인 전 헤더
const Header = () => {
  // const navigate = useNavigate();
  // const [search, setSearch] = useState("");
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    // navigate(`/search/?q=${search}`);
  };

  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <Link to="/">
          <S.LogoImg>
            <img className="logoimg" src={LogoImg} alt="logo-img" />
          </S.LogoImg>
        </Link>
      </S.LogoContainer>

      <S.TextWrapper>
        <div className="hide">About</div>
        <div className="text">Products</div>
        <div className="hide">For Teams</div>
      </S.TextWrapper>

      <S.Searchbar>
        <FaSearch className="icon"></FaSearch>
        <input
          className="searchbar_input"
          placeholder="Search..."
          onKeyDown={handleKeyDown}
        ></input>
      </S.Searchbar>

      <S.Button>
        <S.LoginBtn>
          <Link to="/login"> Log in</Link>{" "}
        </S.LoginBtn>
        <S.SignUpBtn>
          <Link to="/sign up">Sign up</Link>
        </S.SignUpBtn>
      </S.Button>
    </S.HeaderContainer>
  );
};

//로그인 후 헤더

export default Header;
