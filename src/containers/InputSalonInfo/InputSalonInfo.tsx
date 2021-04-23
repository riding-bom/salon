import Button from "components/Button/Button.styled";
import { useSelector, useDispatch } from "react-redux";
import { changeNameAction, changeSalonIntroAction } from "redux/reducers/salonInfo";
import { setSalonInfo, getSalonInfo } from "../../fb/API";
import { ChangeEventHandler } from "react";
import { combinedState } from "constant/type";
import InputText from "components/InputText/InputText";

const InputSalonInfo = () => {
  const salonInfo = useSelector((state: combinedState) => state.salonInfo);

  const dispatch = useDispatch();

  const onChangeHostName: ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(changeNameAction(e.target.value));
  };
  const onChangeSalonIntro: ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(changeSalonIntroAction(e.target.value));
  };

  getSalonInfo();
  return (
    <>
      <InputText id="salonInfoHostName" name="작가의 이름" onChange={onChangeHostName} />
      <InputText id="salonInfoIntro" name="작가의 소개글" onChange={onChangeSalonIntro} />
      <Button
        onClick={() => {
          setSalonInfo(salonInfo);
        }}
        type="submit"
        width="50"
      >
        등록
      </Button>
    </>
  );
};

export default InputSalonInfo;
