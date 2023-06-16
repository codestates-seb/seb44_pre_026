import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function TextEditor({ setBodyValue }: any) {
  return <ReactQuill onChange={setBodyValue} />;
}

export default TextEditor;
