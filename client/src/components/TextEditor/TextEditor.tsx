import { useMemo, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface EditorProps {
  setBodyValue: React.Dispatch<React.SetStateAction<string>>;
  setOnFocus?: React.Dispatch<React.SetStateAction<string>>;
}

function TextEditor({ setBodyValue }: EditorProps) {
  const onChangeHandler = (e: any) => {
    setBodyValue(e);
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ align: [] }],
          ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }, "link"],
          ["clean"],
        ],
      },
    }),
    []
  );

  return (
    <ReactQuill
      modules={modules}
      onChange={onChangeHandler}
      style={{ height: "210px" }}
    />
  );
}

export default TextEditor;
