import StyledButton from "components/Button/Button.styled";
import StyledInputText from "components/InputText/InputText.styled";
import StyledValidationText from "components/ValidationText/ValidationText.styled";
import { combinedState } from "constant/type";
import ModalDialog from "containers/ModalDialog/ModalDialog";
import { setUser } from "fb/API";
import { signUpWithEmail } from "fb/firebase";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupCloseAction } from "redux/reducers/openModal";
import validateEmail from "utills/validateEmail";
import validatePassword from "utills/validatePassword";

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
      setUser({ uid, email, displayName, photoURL: "" });
    }
  };

  useEffect(() => {
    return () => {
      isOpenModal.isOpenSignUp && setInitialState();
    };
  }, [isOpenModal]);

  return isOpenModal.isOpenSignUp ? (
    <ModalDialog>
      <h1>salon</h1>
      <StyledInputText
        id="signUpEmail"
        name="Email"
        value={email}
        onChange={setEmail}
      />
      {validateEmail(email) || (
        <StyledValidationText>
          이메일 형식이 맞지 않습니다.
        </StyledValidationText>
      )}
      <StyledInputText
        type="password"
        id="signUpPassword"
        name="Password"
        value={password}
        onChange={setPassword}
      />
      {validatePassword(password) || (
        <StyledValidationText>
          문자, 숫자, 특수문자 포함 8자 이상이어야 합니다.
        </StyledValidationText>
      )}
      <StyledInputText
        type="password"
        id="signUpCheckPassword"
        name="Password Check"
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
          dispatch(signupCloseAction);
        }}
        disabled={validateEmail(email) && validatePassword(password)}
      >
        SIGNUP
      </StyledButton>
    </ModalDialog>
  ) : null;
};

export default SignUp;
