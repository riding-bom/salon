import firebaseUpload from 'modules/firebaseUpload'
import { ChangeEvent, useRef, useState } from 'react';

import ImageUploader from 'components/ImageUploader/ImageUploader'
import Button from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { backgroundImageAction } from 'redux/reducers/newPost';

type backgroundImageUploaderProps = {
  className?: string;
}

const BackgroundImageUploader = ({ className }:backgroundImageUploaderProps) => {
  const dispatch = useDispatch();

  const [file, setFile] = useState(null)
  
  const fileInput = useRef<HTMLInputElement>(null);
  
  const fileSelectedHandler = (e: ChangeEvent<any>) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0])
  }
  
  const onSelectHandler = () => {
    if (!fileInput.current) {
      return;
    }
    fileInput.current.click();
  };

  const fileUploadHandler = () => {
    return new Promise((resolve, reject) => {
      console.log("Uploading image...");
      console.log(file);

      firebaseUpload('backgroundImages', file)
        .then((link) => {
          resolve(
            dispatch(backgroundImageAction(link))
          );
        })
        .catch((error) => {
          reject(error);
        });

      setFile(null)
    })
  };

  return (
    <div className={className}>
      <ImageUploader className="image-uploader" onChange={fileSelectedHandler} ref={fileInput} />
      {file ?
        <Button className='upload-button' onClick={fileUploadHandler} children='upload' />
        :
        <Button className='select-button' onClick={onSelectHandler} children='select' />}
    </div>
  )
};

export default BackgroundImageUploader;