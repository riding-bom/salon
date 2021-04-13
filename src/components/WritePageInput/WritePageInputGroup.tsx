import StyledColorPicker from "components/ColorPicker/ColorPicker.styled";
import StyledTitleInput from "./TitleInput.styled"
import StyledSubInput from "./SubInput.styled";
import StyledBackgroundImageUploader from "components/BackgroundImageUploader/BackgroundImageUploader.styled";

import { useDispatch, useSelector } from "react-redux";
import { combinedState } from "../../constant/type";
import { titleAction, subTitleAction } from "../../redux/reducers/newPost";

type inputGroupProps = {
  className: string;
  backgroundColor: string;
  backgroundImage: string;
}

const WritePageInputGroup = ({ className }: inputGroupProps) => {
  const newPost = useSelector(
    (
      store: combinedState
    ) => store.newPost
  );

  const dispatch = useDispatch();

  const onChangeTitle = ({ target }: { target: HTMLInputElement }) => {
    dispatch(titleAction(target.value));
  };

  const onChangeSubTitle = ({ target }: { target: HTMLInputElement }) => {
    dispatch(subTitleAction(target.value));
  };

  return (
    <div className={className}>
      <StyledColorPicker className="color-picker" presentColor={newPost.backgroundColor} />
      <StyledBackgroundImageUploader className="background-image-uploader" />
      <StyledTitleInput
        className="main-title"
        id="title"
        value={newPost.title}
        placeHolder="제목을 입력하세요"
        onChange={onChangeTitle}
      />
      <StyledSubInput
        className="sub-title"
        id="SubTitle"
        value={newPost.subTitle}
        placeHolder="소제목을 입력하세요"
        onChange={onChangeSubTitle}
      />
    </div>
  )
}

export default WritePageInputGroup;