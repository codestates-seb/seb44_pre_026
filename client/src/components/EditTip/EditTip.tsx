import * as S from "./style";

function EditTip() {
  return (
    <S.EditTip>
      <div>
        <S.TipHeader>How to Edit</S.TipHeader>
        <ul>
          <li>Correct minor typos or mistakes</li>
          <li>Clarify meaning without changing it</li>
          <li>Add related resources or links</li>
          <li>Always respect the author's intent</li>
          <li>Don't use edits to reply the author</li>
        </ul>
      </div>
    </S.EditTip>
  );
}

export default EditTip;
