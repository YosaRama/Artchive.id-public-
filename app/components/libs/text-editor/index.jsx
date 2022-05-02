// Libs
import propTypes from "prop-types";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// Styles
import s from "./index.module.scss";

function AppTextEditor(props) {
  const { value, setValue, placeholder } = props;

  //? ============== Handle Module ============= ?//
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "code"],
      ["clean"],
    ],
  };
  // * ====================================== * //

  //? ============== Handle Format ============= ?//
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "code",
  ];
  // * ====================================== * //

  return (
    <ReactQuill
      theme="snow"
      onChange={setValue}
      value={value}
      formats={formats}
      modules={modules}
      placeholder={placeholder || ""}
      className={s.editor}
      {...props}
    />
  );
}

AppTextEditor.propTypes = {
  value: propTypes.any,
  setValue: propTypes.func,
  placeholder: propTypes.string,
};

export default AppTextEditor;
