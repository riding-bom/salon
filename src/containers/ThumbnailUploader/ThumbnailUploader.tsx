import { ChangeEventHandler, useRef } from "react";
import { useDispatch } from "react-redux";
import firebaseUpload from "modules/firebaseUpload";
import { setThumbnailAction } from "redux/reducers/salonInfo";
import StyledThumbnail from "components/SalonInfo/Thumbnail/Thumbnail.styled";
import ImageUploader from "components/ImageUploader/ImageUploader";
import styled from "styled-components";
import StyledButton from "components/Button/Button.styled";

type thumbnailUploaderProps = {
  className?: string;
  thumbnail: string;
};

const ThumbnailUploader = ({
  className,
  thumbnail = "http://file2.nocutnews.co.kr/newsroom/image/2013/08/24/20130824110338109792.jpg",
}: thumbnailUploaderProps) => {
  const dispatch = useDispatch();
  const fileInput = useRef<HTMLInputElement>(null);

  const fileSelectedHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    return new Promise((resolve, reject) => {
      console.log("Uploading image...");
      e.target.files &&
        firebaseUpload("thumbnail", "thumbnail", e.target.files[0])
          .then((link) => {
            console.log(link);
            resolve(dispatch(setThumbnailAction(link)));
          })
          .catch((error) => {
            reject(error);
          });
    });
  };

  const onSelectHandler = () => {
    if (!fileInput.current) {
      return;
    }
    fileInput.current.click();
  };

  return (
    <div className={className} title="배경 이미지 선택">
      <StyledThumbnail thumbnail={thumbnail} alt="Salon Thumbnail" />
      <ImageUploader
        className="thumbnail-uploader"
        onChange={fileSelectedHandler}
      />
      <StyledButton
        className="thumbnail-select-button"
        label="thumbnail-select"
        onClick={onSelectHandler}
        children="Select ThumbNail"
        width="200"
      />
    </div>
  );
};

const StyledThumbnailUploader = styled(ThumbnailUploader)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  & > * {
    margin-top: 1rem;
  }

  .thumbnail-uploader {
    display: none;
  }
`;

export default StyledThumbnailUploader;
