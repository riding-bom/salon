import firebaseUpload from "modules/firebaseUpload";
import { ChangeEventHandler, useRef } from "react";

import ImageUploader from "components/ImageUploader/ImageUploader";
import Button from "components/Button/Button";
import { useDispatch } from "react-redux";
import { backgroundImageAction } from "redux/reducers/newPost";
import ImageIcon from "essets/Icons/ImageIcon";

type backgroundImageUploaderProps = {
  className?: string;
  color: string;
};

const BackgroundImageUploader = ({
  className,
  color = "#000",
}: backgroundImageUploaderProps) => {
  const dispatch = useDispatch();
  const fileInput = useRef<HTMLInputElement>(null);

  const fileSelectedHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    return new Promise((resolve, reject) => {
      console.log("Uploading image...");
      e.target.files &&
        firebaseUpload("backgroundImages", e.target.files[0])
          .then((link) => {
            console.log(link);
            resolve(dispatch(backgroundImageAction(link)));
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
      <ImageUploader
        className="image-uploader"
        onChange={fileSelectedHandler}
        ref={fileInput}
      />
      <Button
        className="select-button"
        label="image-select"
        onClick={onSelectHandler}
        children={<ImageIcon color={color} />}
      />
    </div>
  );
};

export default BackgroundImageUploader;
