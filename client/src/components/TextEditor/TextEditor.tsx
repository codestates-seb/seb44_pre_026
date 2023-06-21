import { useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React from "react";

interface EditorProps {
  bodyValue: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextEditor({ bodyValue, changeHandler }: EditorProps) {
  const onChangeHandler = (e: any) => {
    changeHandler(e);
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
      value={bodyValue}
      style={{
        height: "210px",
      }}
    />
  );
}

export default TextEditor;
