import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as S from "./style";

function TextEditor() {
  return (
    <S.InputBodyLayout>
      <S.SubHeading>What are the details of your problem?</S.SubHeading>
      <S.SubContent>
        Introduce the problem and expand on what you put in the title. Minimum
        20 characters.
      </S.SubContent>
      <ReactQuill />
    </S.InputBodyLayout>
  );
}

export default TextEditor;
