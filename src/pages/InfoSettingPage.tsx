import { ChangeEventHandler, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { combinedState } from "constant/type";
import { setSalonInfo, getSalonInfo } from "../fb/API";
import {
  sethostNameAction,
  setSalonIntroAction,
} from "redux/reducers/salonInfo";
import StyledThumbnailUploader from "containers/ThumbnailUploader/ThumbnailUploader";
import Title from "components/Title/Title";
import InputText from "components/InputText/InputText";
import TextArea from "components/TextArea/TextArea";
import StyledButton from "components/Button/Button.styled";
import { createOpenAction } from "redux/reducers/openModal";
import { useHistory } from "react-router";

type infoSettingPageProps = {
  className?: string;
};

const InfoSettingPage = ({ className }: infoSettingPageProps) => {
  const salonInfo = useSelector((state: combinedState) => state.salonInfo);
  const history = useHistory();
  const dispatch = useDispatch();

  const onChangeHostName: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(sethostNameAction(e.target.value));
  };
  const onChangeSalonIntro: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    dispatch(setSalonIntroAction(e.target.value));
  };

  const onClickInfoSubmit = () => {
    if (!salonInfo.hostName) {
      dispatch(createOpenAction("isOpenAlertInfoPost"));
    } else {
      setSalonInfo(salonInfo);
      history.replace("/");
    }
  };

  useEffect(() => {
    getSalonInfo();
  }, []);

  return (
    <main className={className}>
      <Title level={3} className="title" children="Salon Info Setting" />

      <StyledThumbnailUploader thumbnail={salonInfo.thumbnail} />

      <InputText
        id="salonInfoHostName"
        value={salonInfo.hostName}
        name="작가의 이름"
        onChange={onChangeHostName}
      />

      <TextArea
        id="salonInfoIntro"
        cols={60}
        rows={8}
        value={salonInfo.salonIntro}
        onChange={onChangeSalonIntro}
      />

      <StyledButton
        onClick={onClickInfoSubmit}
        width="200"
        label="info-submit"
        children="UPLOAD"
      />
    </main>
  );
};

const StyledInfoSettingPage = styled(InfoSettingPage)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #ccc;
  width: 50%;
  margin: 1rem auto 0 auto;

  & > * {
    margin: 2rem auto;
  }

  .title {
    font-size: 3rem;
  }

  form {
    position: relative;
    width: 400px;

    & > input {
      box-sizing: border-box;
      width: 100%;
      height: 25px;
      margin: 0;
      border: none;
      border-bottom: 1px solid black;
      font-size: 2rem;
      text-align: center;
    }

    & > label {
      position: absolute;
      top: 2px;
      left: 35%;
      color: lightgray;
      padding: 0;
      margin: 0;
      font-size: 2rem;
    }
  }

  .textAreaContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > textarea {
      border: 1px solid lightgray;
      resize: none;
      margin-top: 22px;
    }
    & > label {
      position: absolute;
      top: 2.7rem;
      left: 0.5rem;
      color: lightgray;
      font-size: 1.4rem;
    }
  }
`;

export default StyledInfoSettingPage;
