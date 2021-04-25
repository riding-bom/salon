import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCloseAction } from "redux/reducers/openModal";
import { combinedState } from "constant/type";
import { signUpWithEmail } from "fb/firebase";
import { setUser } from "fb/API";
import ModalDialog from "containers/ModalDialog/ModalDialog";
import StyledButton from "components/Button/Button.styled";
import StyledInputText from "components/InputText/InputText.styled";
import Title from "components/Title/Title";
import StyledValidationText from "components/ValidationText/ValidationText.styled";
import validateEmail from "utills/validateEmail";
import validatePassword from "utills/validatePassword";
import StyledPasswordInput from "containers/PasswordInput/PasswordInput.styled";

const SignUp = () => {
  const isOpenModal = useSelector((state: combinedState) => state.isOpenModal);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    displayName: "",
  });
  const { email, password, displayName, passwordCheck } = state;

  const setEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setState(() => {
      return {
        ...state,
        email: e.target.value,
      };
    });
  };

  const setPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setState(() => {
      return {
        ...state,
        password: e.target.value,
      };
    });
  };

  const setPasswordCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setState(() => {
      return {
        ...state,
        passwordCheck: e.target.value,
      };
    });
  };

  const setNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setState(() => {
      return {
        ...state,
        displayName: e.target.value,
      };
    });
  };

  const setInitialState = () => {
    setState(() => {
      return {
        email: "",
        password: "",
        passwordCheck: "",
        displayName: "",
      };
    });
  };

  const updateUserWithEmail = async () => {
    const res = await signUpWithEmail(email, password);
    if (res.user !== null) {
      const { uid, email } = res.user;
      email && setUser({ uid, email, displayName, photoURL: "" });
    }
  };

  useEffect(() => {
    return () => {
      isOpenModal.isOpenSignUp && setInitialState();
    };
  }, [isOpenModal]);

  return isOpenModal.isOpenSignUp ? (
    <ModalDialog>
      <Title level={1}>salon</Title>
      <StyledInputText
        id="signUpEmail"
        name="Email"
        value={email}
        onChange={setEmail}
      />
      {validateEmail(email) || email === "" || (
        <StyledValidationText>
          이메일 형식이 맞지 않습니다.
        </StyledValidationText>
      )}
      <StyledPasswordInput
        id="signUpPassword"
        value={password}
        onChange={setPassword}
      />
      {validatePassword(password) || password === "" || (
        <StyledValidationText>
          문자, 숫자, 특수문자 포함 8자 이상이어야 합니다.
        </StyledValidationText>
      )}
      <StyledPasswordInput
        id="signUpCheckPassword"
        value={passwordCheck}
        onChange={setPasswordCheck}
      />
      {password !== passwordCheck && passwordCheck !== "" && (
        <StyledValidationText>비밀번호가 다릅니다.</StyledValidationText>
      )}
      <StyledInputText
        id="signUpDisplayName"
        name="Nickname"
        value={displayName}
        onChange={setNickname}
      />
      <StyledButton
        onClick={async () => {
          updateUserWithEmail();
          dispatch(createCloseAction("isOpenSignUp"));
        }}
        disabled={
          !(
            validateEmail(email) &&
            validatePassword(password) &&
            displayName !== ""
          )
        }
      >
        SIGNUP
      </StyledButton>
    </ModalDialog>
  ) : null;
};

export default SignUp;
