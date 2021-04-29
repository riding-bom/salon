import { ChangeEventHandler, useRef } from "react";
import { useDispatch } from "react-redux";
import firebaseUpload from "modules/firebaseUpload";
import { setThumbnailAction } from "redux/reducers/salonInfo";
import Thumbnail from "components/Thumbnail/Thumbnail";
import ImageUploader from "components/ImageUploader/ImageUploader";
import styled from "styled-components";
import StyledButton from "components/Button/Button.styled";

type thumbnailUploaderProps = {
  className?: string;
  thumbnail: string;
};

const ThumbnailUploader = ({
  className,
  thumbnail,
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
      <Thumbnail
        className="info-setting__thumbnail"
        thumbnail={thumbnail}
        alt="Salon Thumbnail"
      />
      <ImageUploader
        className="info-setting__thumbnail-uploader"
        onChange={fileSelectedHandler}
        ref={fileInput}
      />
      <StyledButton
        className="info-setting__upload-button"
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

  .info-setting__thumbnail {
    width: 150px;
    height: 160px;
    border-radius: 50%;
  }

  .info-setting__thumbnail-uploader {
    display: none;
  }
`;

export default StyledThumbnailUploader;
