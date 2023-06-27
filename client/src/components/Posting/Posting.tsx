import * as S from "./style";
import arrowUp from "../../assets/arrowup.png";
import arrowDown from "../../assets/arrowdown.png";
import { AnswerProps, DetailProps } from "../../pages/Detail/Detail";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ACCESS_TOKEN, BASE_URL } from "../../constants/constants";

interface PostingProps {
  content: DetailProps | AnswerProps;
  isAsk: boolean;
  answerId?: string;
  setComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

function Posting({ content, isAsk, answerId, setComplete }: PostingProps) {
  const { id } = useParams();
  const token = localStorage.getItem(ACCESS_TOKEN);

  const navigate = useNavigate();

  const deleteHandler = () => {
    const url = isAsk
      ? BASE_URL + `/questions/${id}`
      : BASE_URL + `/answers/${answerId}`;
    if (window.confirm("삭제하시겠습니까?")) {
      axios.delete(url, {
        headers: {
          Authorization: token,
          withCredentials: true,
        },
      });
      {
        isAsk ? navigate("/") : navigate(`/questions/${id}`);
      }
      setComplete(true);
    }
  };

  return (
    <S.PostLayout
      style={{
        borderBottom: isAsk ? 0 : "1px solid var(--black-075)",
      }}
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
            __html: content.content,
          }}
        />
        <S.ContentFooter>
          <S.FooterMenu>
            <Link
              to={
                isAsk ? `/questions/${id}/edit` : `/questions/${id}/${answerId}`
              }
            >
              <span>Edit</span>
            </Link>
            <span onClick={deleteHandler}>Delete</span>
          </S.FooterMenu>
          <S.UserInfo>
            <div
              style={{
                backgroundColor: isAsk ? "var(--powder-100)" : "#fff",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg"
                style={{ width: "36px", height: "36px" }}
              />
              <span>
                <a href="#">{content.nickName}</a>
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
