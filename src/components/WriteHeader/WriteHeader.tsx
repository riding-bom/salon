import StyledCategorySelector from "components/CategorySelector/CategorySelector.styled";
import StyledAccessSelector from "components/AccessSelector/AccessSelector.styled";
import StyledColorPicker from "components/ColorPicker/ColorPicker.styled";
import StyledMainTitleInput from "../TitleInput/MainTitleInput.styled"
import StyledSubTitleInput from "../TitleInput/SubTitleInput.styled";
import StyledBackgroundImageUploader from "components/BackgroundImageUploader/BackgroundImageUploader.styled";

import { useDispatch, useSelector } from "react-redux";
import { combinedState } from "../../constant/type";
import { titleAction, subTitleAction } from "../../redux/reducers/newPost";
import invertColor from "modules/calOppositeColor";

type writeHeaderProps = {
  className: string;
  backgroundColor: string;
  backgroundImage: string;
}

const WriteHeader = ({ className }: writeHeaderProps) => {
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
  
  const oppositeColor = invertColor(newPost.backgroundColor)

  return (
    <div className={className}>
      <div className="selector-group">
        <StyledCategorySelector className="category-select" color={oppositeColor} />
        <StyledAccessSelector className="access-select" color={oppositeColor} />
      </div>
      <div className="background-group">
        <StyledBackgroundImageUploader className="background-image-uploader" color={oppositeColor} />
        <StyledColorPicker className="color-picker" presentColor={newPost.backgroundColor} />
      </div>
      <div className="title-group">
        <StyledMainTitleInput
          className="main-title"
          id="title"
          value={newPost.title}
          placeHolder="제목을 입력하세요"
          onChange={onChangeTitle}
          color={oppositeColor}
        />
        <StyledSubTitleInput
          className="sub-title"
          id="SubTitle"
          value={newPost.subTitle}
          placeHolder="소제목을 입력하세요"
          onChange={onChangeSubTitle}
          color={oppositeColor}
        />
      </div>
    </div>
  )
}

export default WriteHeader;