import StyledCategorySelector from "containers/CategorySelector/CategorySelector.styled";
import StyledAccessSelector from "containers/AccessSelector/AccessSelector.styled";
import StyledColorPicker from "containers/ColorPicker/ColorPicker.styled";
import StyledMainTitleInput from "../../components/TitleInput/MainTitleInput.styled";
import StyledSubTitleInput from "../../components/TitleInput/SubTitleInput.styled";
import StyledBackgroundImageUploader from "containers/BackgroundImageUploader/BackgroundImageUploader.styled";

import { useDispatch } from "react-redux";
import { post } from "../../constant/type";
import {
  titleAction,
  subTitleAction,
  resetBackgroundAction,
} from "../../redux/reducers/newPost";
import invertColor from "modules/calOppositeColor";
import CancelIcon from "essets/Icons/CancelIcon";
import Button from "components/Button/Button";

type writeHeaderProps = {
  className: string;
  Post: post;
};

const WriteHeader = ({ className, Post }: writeHeaderProps) => {
  const dispatch = useDispatch();
  const oppositeColor = invertColor(Post.backgroundColor);

  const onClickResetButton = () => {
    dispatch(resetBackgroundAction());
  };

  const onChangeTitle = ({ target }: { target: HTMLInputElement }) => {
    dispatch(titleAction(target.value));
  };

  const onChangeSubTitle = ({ target }: { target: HTMLInputElement }) => {
    dispatch(subTitleAction(target.value));
  };

  return (
    <div className={className}>
      <div className="selector-group">
        <StyledCategorySelector
          className="category-select"
          defaultValue={Post.category}
          color={oppositeColor}
        />
        <StyledAccessSelector
          className="access-select"
          defaultValue={Post.access}
          color={oppositeColor}
        />
      </div>
      <div className="background-group">
        {Post.backgroundImage === "" ? (
          <StyledBackgroundImageUploader
            className="background-image-uploader"
            color={oppositeColor}
            postId={Post.id}
          />
        ) : (
          <Button
            className="background-reset"
            type="button"
            children={<CancelIcon color={oppositeColor} />}
            label="background-reset-button"
            onClick={onClickResetButton}
          />
        )}
        <StyledColorPicker
          className="color-picker"
          presentColor={Post.backgroundColor}
        />
      </div>
      <div className="title-group">
        <StyledMainTitleInput
          className="main-title"
          id="title"
          value={Post.title}
          placeHolder="제목을 입력하세요"
          onChange={onChangeTitle}
          color={oppositeColor}
        />
        <StyledSubTitleInput
          className="sub-title"
          id="SubTitle"
          value={Post.subTitle}
          placeHolder="소제목을 입력하세요"
          onChange={onChangeSubTitle}
          color={oppositeColor}
        />
      </div>
    </div>
  );
};

export default WriteHeader;
