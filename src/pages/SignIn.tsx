import { useDispatch, useSelector } from "react-redux";
import StyledButton from "components/Button/Button.styled";
import StyledInputText from "components/InputText/InputText.styled";
import { combinedState } from "constant/type";
import ModalDialog from "containers/ModalDialog/ModalDialog";
import { signinCloseAction, signupOpenAction } from "redux/reducers/openModal";
import { useState } from "react";
import { signInWithEmail, signInWithGoogle } from "fb/firebase";
import { setUser } from "fb/API";

const SignIn = () => {
  const isOpenModal = useSelector((state: combinedState) => state.isOpenModal);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;

  const dispatch = useDispatch();

  return isOpenModal.isOpenSignIn ? (
    <ModalDialog>
      <h1>salon</h1>
      <StyledInputText
        id="signInEmail"
        name="signInEmail"
        value={email}
        onChange={(e: any) => {
          setState(() => {
            return {
              ...state,
              email: e.target.value,
            };
          });
        }}
      />
      <StyledInputText
        type="password"
        id="signInPassword"
        name="signInPassword"
        value={password}
        onChange={(e: any) => {
          setState(() => {
            return {
              ...state,
              password: e.target.value,
            };
          });
        }}
      />
      <StyledButton
        onClick={async () => {
          await signInWithEmail(email, password);
          dispatch(signinCloseAction);
        }}
      >
        SIGNIN
      </StyledButton>
      <StyledButton
        onClick={async () => {
          const res = await signInWithGoogle();
          if (res.user !== null) {
            setUser(res.user);
          }
          dispatch(signinCloseAction);
        }}
      >
        GOOGLE
      </StyledButton>
      <StyledButton
        onClick={() => {
          dispatch(signinCloseAction);
          dispatch(signupOpenAction);
        }}
      >
        SIGNUP
      </StyledButton>
    </ModalDialog>
  ) : null;
};

export default SignIn;
