import * as S from "./style";
import arrowUp from "../../assets/arrowup.png";
import arrowDown from "../../assets/arrowdown.png";
import { AnswerProps, DetailProps } from "../../pages/Detail/Detail";

interface PostingProps {
  content?: DetailProps;
  answer: AnswerProps;
}

function Posting({ content, answer }: PostingProps | any) {
  return (
    <S.PostLayout
      style={{ borderBottom: answer && "1px solid var(--black-075)" }}
    >
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
        <S.Content
          dangerouslySetInnerHTML={{
            __html: content ? content.content : answer.content,
          }}
        />
        <S.ContentFooter>
          <S.FooterMenu>
            <span>Edit</span>
            <span>Delete</span>
          </S.FooterMenu>
          <S.UserInfo>
            <div style={{ backgroundColor: content && "var(--powder-100)" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg"
                style={{ width: "36px", height: "36px" }}
              />
              <span>
                <a href="#">{content ? content.username : answer.username}</a>
              </span>
            </div>
            {/* <div>👋 New Contributor</div> */}
          </S.UserInfo>
        </S.ContentFooter>
      </div>
    </S.PostLayout>
  );
}

export default Posting;
