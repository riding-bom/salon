/* Redux-------------------------------------------------------------------------- */
import { useDispatch } from "react-redux";
import { contentAction } from "../../redux/reducers/newPost";
import firebaseUpload from "modules/firebaseUpload";

/* Draft.js-------------------------------------------------------------------------- */
// 에디터의 현재 콘텐츠 정보를 추출하는 함수 import
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// draftjs 콘텐츠를 html로 변환하는 함수 import
import draftToHtml from "draftjs-to-html";
import { useState } from "react";

type TextEditorProps = {
  className: string;
  width?: string;
  height?: string;
  postId: string;
};

const TextEditor = ({ className, postId }: TextEditorProps) => {
  const [imgNum, setImgNum] = useState(1);

  // Redux
  const dispatch = useDispatch();

  /* Draft.js-------------------------------------------------------------------------- */
  const TextToHtml = (editorState: EditorState) =>
    draftToHtml(convertToRaw(editorState.getCurrentContent()));

  const onEditorStateChange = (editorState: EditorState) => {
    dispatch(contentAction(TextToHtml(editorState)));
  };

  const uploadImageCallBack = (file: any) => {
    return new Promise((resolve, reject) => {
      console.log("Uploading image...");

      firebaseUpload("images", `${postId}_${imgNum}`, file)
        .then((link) => {
          resolve({
            data: {
              link,
            },
          });
        })
        .catch((error) => {
          reject(error);
        });
      setImgNum(imgNum + 1);
    });
  };

  return (
    <div className={className}>
      <Editor
        editorClassName="editor"
        localization={{
          locale: "ko",
        }}
        placeholder=" 내용을 입력하세요."
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: false },
          image: {
            uploadCallback: uploadImageCallBack,
            alt: { present: true, mandatory: false },
            previewImage: true,
          },
        }}
      />
    </div>
  );
};

TextEditor.defaultProps = {
  width: "100%",
};

export default TextEditor;
