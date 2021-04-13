import InputText from 'components/InputText/InputText';
import Button from 'components/Button/Button.styled';
import { useSelector, useDispatch } from 'react-redux';
import { changeNameAction, changeSalonIntroAction } from 'redux/reducers/salonInfo';

const HeaderInputPage = () => {
  const salonInfo = useSelector((state: any) => state.salonInfo);
  const dispatch = useDispatch();

  const onChangeHostName = ({ target }: { target: HTMLInputElement }) => {
    dispatch(changeNameAction(target.value));
  };
  const onChangeSalonIntro = ({ target }: { target: HTMLInputElement }) => {
    dispatch(changeSalonIntroAction(target.value));
  };

  return (
    <>
      <InputText id='salonInfoHostName' name='작가의 이름' onChange={onChangeHostName} />
      <InputText id='salonInfoIntro' name='작가의 소개글' onChange={onChangeSalonIntro} />
      <Button type='submit' width='50'>
        등록
      </Button>
    </>
  );
};

export default HeaderInputPage;
