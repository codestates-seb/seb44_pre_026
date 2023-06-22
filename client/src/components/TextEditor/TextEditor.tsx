import { useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

interface EditorProps {
  bodyValue: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextEditor({ bodyValue, changeHandler }: EditorProps) {
  const modules = useMemo(
    () => ({
      syntax: {
        highlight: (text: string) => hljs.highlightAuto(text).value,
      },
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
      onChange={(e: any) => changeHandler(e)}
      value={bodyValue}
      style={{
        height: "210px",
      }}
    />
  );
}

export default TextEditor;
