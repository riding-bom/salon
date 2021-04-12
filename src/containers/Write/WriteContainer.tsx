import { FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { idAction } from 'redux/reducers/newPost';
import StyledSelect from 'components/Select/Select.styled'
import StyledTitleInput from 'components/TitleInput/TitleInput.styled';
import StyledSubInput from 'components/TitleInput/SubInput.styled';
import StyledTextEditor from "components/Editor/TextEditor.styled"
import StyledButton from 'components/Button/Button.styled';
import { StyledModal } from 'components/Modal/Modal.styled';

type writeProps = {
  className: string;
};

const WriteContainer = ({ className }: writeProps) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const onOpen = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    dispatch(idAction());
  }, []);

  const uploadPost = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className={className} onSubmit={uploadPost}>
    <StyledSelect className='' />
    <StyledTitleInput className='' label="title" placeHolder='제목을 입력하세요' />
    <StyledSubInput className='' label="SubTitle" placeHolder='소제목을 입력하세요'/>
    <StyledTextEditor className='' />
    <StyledButton
        onOpen={onOpen}
        width='960'
        className='write-submit'
        children='UPLOAD'
        type='submit'
      />
      {visible && <StyledModal onClose={onClose} className='' />}
    </form>
  )
};

export default WriteContainer