import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInWithEmail, signInWithGoogle } from "fb/firebase";
import { signinCloseAction, signupOpenAction } from "redux/reducers/openModal";
import { setUser } from "fb/API";
import { combinedState, user } from "constant/type";
import StyledPasswordInput from "containers/PasswordInput/PasswordInput.styled";
import StyledButton from "components/Button/Button.styled";
import StyledInputText from "components/InputText/InputText.styled";
import StyledValidationText from "components/ValidationText/ValidationText.styled";
import ModalDialog from "containers/ModalDialog/ModalDialog";
import Title from "components/Title/Title";
import validateEmail from "utills/validateEmail";

const SignIn = () => {
  const isOpenModal = useSelector((state: combinedState) => state.isOpenModal);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;

  const dispatch = useDispatch();

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

  const setInitialState = () => {
    setState(() => {
      return {
        email: "",
        password: "",
      };
    });
  };

  const updateUserWithGoogle = async () => {
    const res = await signInWithGoogle();
    if (res.user !== null) {
      setUser(res.user as user);
    }
  };

  useEffect(() => {
    return () => {
      isOpenModal.isOpenSignIn && setInitialState();
    };
  }, [isOpenModal]);

  return isOpenModal.isOpenSignIn ? (
    <ModalDialog>
      <Title level={1}>salon</Title>
      <StyledInputText
        id="signInEmail"
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
        id="signInPassword"
        value={password}
        onChange={setPassword}
      />
      <StyledButton
        onClick={async () => {
          await signInWithEmail(email, password);
          dispatch(signinCloseAction);
          setInitialState();
        }}
        disabled={!(validateEmail(email) && password !== "")}
      >
        SIGNIN
      </StyledButton>
      <StyledButton
        onClick={async () => {
          await updateUserWithGoogle();
          dispatch(signinCloseAction);
          setInitialState();
        }}
      >
        GOOGLE
      </StyledButton>
      <StyledButton
        onClick={() => {
          dispatch(signinCloseAction);
          dispatch(signupOpenAction);
          setInitialState();
        }}
      >
        SIGNUP
      </StyledButton>
    </ModalDialog>
  ) : null;
};

export default SignIn;
