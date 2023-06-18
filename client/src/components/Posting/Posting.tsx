import * as S from "./style";
import arrowUp from "../../assets/arrowup.png";
import arrowDown from "../../assets/arrowdown.png";
import { DetailProps } from "../../pages/Detail/Detail";

interface PostingProps {
  content: DetailProps;
}

function Posting({ content }: PostingProps) {
  return (
    <S.PostLayout>
      <S.VoteBox>
        <button>
          <img src={arrowUp} />
        </button>
        <div>0</div>
        <button>
          <img src={arrowDown} />
        </button>
      </S.VoteBox>
      <div>
        <S.Content dangerouslySetInnerHTML={{ __html: content.content }} />
        <S.ContentFooter>
          <S.FooterMenu>
            <span>Edit</span>
            <span>Delete</span>
          </S.FooterMenu>
          <S.UserInfo>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg"
                style={{ width: "36px", height: "36px" }}
              />
              <span>
                <a href="#">{content.username}</a>
              </span>
            </div>
            <div>👋 New Contributor</div>
          </S.UserInfo>
        </S.ContentFooter>
      </div>
    </S.PostLayout>
  );
}

export default Posting;
