import { ChangeEvent, FormEventHandler, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  signInWithEmail,
  signInWithGoogle,
  usersCollectionRef,
} from "fb/firebase";
import { createCloseAction, createOpenAction } from "redux/reducers/openModal";
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
  const [wrongIdOrPassword, setWrongIdOrPassword] = useState(false);
  const { email, password } = state;

  const dispatch = useDispatch();

  const onSubmit: FormEventHandler = async (e) => {
    console.log(e);
    e.preventDefault();

    try {
      await signInWithEmail(email, password);
      dispatch(createCloseAction("isOpenNeedSignIn"));
      setInitialState();
    } catch (e) {
      setWrongIdOrPassword(() => true);
    }
  };

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
    setWrongIdOrPassword(() => false);
  };

  const updateUserWithGoogle = async () => {
    const res = await signInWithGoogle();
    const email = res.user && res.user.email;
    const snapshot = await usersCollectionRef.where("email", "==", email).get();
    if (snapshot.empty) setUser(res.user as user);
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
        onSubmit={onSubmit}
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
        onSubmit={onSubmit}
      />
      <StyledButton
        onClick={async () => {
          try {
            await signInWithEmail(email, password);
            dispatch(createCloseAction("isOpenNeedSignIn"));
            setInitialState();
          } catch (e) {
            setWrongIdOrPassword(() => true);
          }
        }}
        disabled={!(validateEmail(email) && password !== "")}
      >
        SIGNIN
      </StyledButton>
      {wrongIdOrPassword && (
        <StyledValidationText>
          <span style={{ display: "block", margin: "10px" }}>
            아이디 혹은 비밀번호가 틀렸습니다.
          </span>
        </StyledValidationText>
      )}
      <StyledButton
        onClick={async () => {
          await updateUserWithGoogle();
          dispatch(createCloseAction("isOpenSignIn"));
          setInitialState();
        }}
      >
        GOOGLE
      </StyledButton>
      <StyledButton
        onClick={() => {
          dispatch(createCloseAction("isOpenNeedSignIn"));
          dispatch(createOpenAction("isOpenSignUp"));
          setInitialState();
        }}
      >
        SIGNUP
      </StyledButton>
    </ModalDialog>
  ) : null;
};

export default SignIn;
