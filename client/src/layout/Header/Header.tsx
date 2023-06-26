import * as S from "./style";
import LogoImg from "../../assets/Stack_Overflow_logo.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { handleLogout } from "../../components/Logout/Logout";

//로그인 전 헤더

interface Props {
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
}

const Header = ({ handleSearch, setSearch, search }: Props) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch;
    }
  };

  const token = localStorage.getItem("accessToken");

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
        <form onSubmit={handleSearch}>
          <input
            className="searchbar_input"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            value={search}
          ></input>
        </form>
      </S.Searchbar>

      <S.Button>
        {token ? (
          <div className="logout" onClick={handleLogout}>
            <S.LogoutBtn>Log Out </S.LogoutBtn>
          </div>
        ) : (
          <>
            <S.LoginBtn>
              <Link to="/login"> Log in</Link>{" "}
            </S.LoginBtn>
            <S.SignUpBtn>
              <Link to="/signup">Sign up</Link>
            </S.SignUpBtn>{" "}
          </>
        )}
      </S.Button>
    </S.HeaderContainer>
  );
};

//로그인 후 헤더

export default Header;
