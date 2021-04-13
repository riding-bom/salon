/* Redux-------------------------------------------------------------------------- */
import { useDispatch } from "react-redux";
import { contentAction } from "../../redux/reducers/newPost";
import { storage } from "fb/firebase";

/* Draft.js-------------------------------------------------------------------------- */
// 에디터의 현재 콘텐츠 정보를 추출하는 함수 import
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// draftjs 콘텐츠를 html로 변환하는 함수 import
import draftToHtml from "draftjs-to-html";

type TextEditorProps = {
  className: string;
  width?: string;
  height?: string;
};

const TextEditor = ({ className }: TextEditorProps) => {
  // Redux dispatch
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
      console.log(file);

      firebaseUpload(file)
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
    });
  };

  const firebaseUpload = (file: any) => {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject("Invalid file.");
      }

      const uploadTask = storage.ref(`images/${file.name}`).put(file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log(snapshot);
        },
        (error) => {
          console.log(error);
        },
        () => {
          //Gets link back
          uploadTask.snapshot.ref.getDownloadURL().then((url) => resolve(url));
        }
      );
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
