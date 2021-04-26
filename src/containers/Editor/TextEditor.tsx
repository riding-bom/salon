import { useCallback, useEffect, useRef, useState } from "react";
/* Redux-------------------------------------------------------------------------- */
import { useDispatch } from "react-redux";
import { contentAction } from "../../redux/reducers/newPost";
import firebaseUpload from "modules/firebaseUpload";

/* Draft.js-------------------------------------------------------------------------- */
// 에디터의 현재 콘텐츠 정보를 추출하는 함수 import
import { convertToRaw, EditorState, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// draftjs 콘텐츠를 html로 변환하는 함수 import
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

type TextEditorProps = {
  className: string;
  defaultContent?: string;
  width?: string;
  height?: string;
};

const TextEditor = ({ className, defaultContent }: TextEditorProps) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const rendered = useRef(false);

  // Redux
  const dispatch = useDispatch();

  /* Draft.js-------------------------------------------------------------------------- */

  useEffect(() => {
    if (defaultContent) {
      if (rendered.current) return;
      rendered.current = true;
      const blocksFromHTML = htmlToDraft(defaultContent);
      const { contentBlocks, entityMap } = blocksFromHTML;
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      );
      const convertedDraft = EditorState.createWithContent(contentState);

      setEditorState(convertedDraft);
    }
  }, [defaultContent]);

  const TextToHtml = useCallback(
    (editorState: EditorState) =>
      draftToHtml(convertToRaw(editorState.getCurrentContent())),
    []
  );

  const onEditorStateChange = useCallback((editorState: EditorState) => {
    setEditorState(editorState);
    dispatch(contentAction(TextToHtml(editorState)));
  }, []);

  const uploadImageCallBack = (file: object) => {
    return new Promise((resolve, reject) => {
      console.log("Uploading image...");

      firebaseUpload("images", `${Date.now()}`, file)
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

  return (
    <div className={className}>
      <Editor
        editorClassName="editor"
        localization={{
          locale: "ko",
        }}
        placeholder="내용을 입력해주세요!"
        editorState={editorState}
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

export default TextEditor;
