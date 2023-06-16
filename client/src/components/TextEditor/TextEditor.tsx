import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface EditorProps {
  setBodyValue: React.Dispatch<React.SetStateAction<string>>;
}

function TextEditor({ setBodyValue }: EditorProps) {
  const onChangeHandler = (e: any) => {
    setBodyValue(e);
  };

  return <ReactQuill onChange={onChangeHandler} />;
}

export default TextEditor;
