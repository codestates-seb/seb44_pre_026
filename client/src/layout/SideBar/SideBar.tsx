import * as S from "./style";
import { Link } from "react-router-dom";
import { IoEarthSharp } from "react-icons/io5";
import { useState } from "react";
import { MemberDelete } from "../../components/MemberDelete/MemberDelete";

const SideBar = () => {
  const [tab, setTab] = useState<string>("");

  return (
    <S.Container>
      <S.NavBarContainer>
        <S.Nav>
          <div className="home">
            <li
              className={tab === "curr" ? "active" : ""}
              onClick={() => setTab("curr")}
            >
              <Link to="/">HOME</Link>
            </li>
          </div>

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
          <div className="delete" onClick={MemberDelete}>Delete Account</div>
        </S.Nav>
      </S.NavBarContainer>
    </S.Container>
  );
};

export default SideBar;
