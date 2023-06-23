import * as S from "./style"

const SideBar = () => {
    return (
        <S.Container>
            <S.NavBarContainer>
                <S.Nav>
                    <li className= "home">HOME</li>
                    <li className = "title">PUBLIC</li>
                    <li className = "selected">Questions</li>
                    <li className = "selected">Tags</li>
                    <li className="selected">Users</li>
                    <li className="selected">Companies</li>
                </S.Nav>
            </S.NavBarContainer>
        </S.Container>
    )
}

export default SideBar;
