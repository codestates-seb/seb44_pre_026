import * as S from "./style";
import { Link } from "react-router-dom";
import { IoEarthSharp } from "react-icons/io5";
import React, { useState } from "react";
import { handleLogout } from "../../components/Logout/Logout";


const SideBar = () => {
  const [tab, setTab] = useState(false);
  function handleClick() {
    setTab(!tab);
  }

  return (
    <S.Container>
      <S.NavBarContainer>
        <S.Nav>
          <li className={tab ? "active" : ""} onClick={handleClick}>
            <Link to="/">HOME</Link>
          </li>

          <div>
            <li className="title">
              <IoEarthSharp className="icon" />
              PUBLIC
            </li>
          </div>
          <li className="selected">Questions</li>
          <li className="selected">Tags</li>
          <li className="selected">Users</li>
          <li className="selected">Companies</li>
          <div className="logout" onClick={handleLogout}>
            Log Out
          </div>
          <div className="delete">Delete Account</div>
        </S.Nav>
      </S.NavBarContainer>
    </S.Container>
  );
};

export default SideBar;
