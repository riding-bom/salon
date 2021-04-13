import StyledButton from "components/Button/Button.styled";
import StyledInputText from "components/InputText/InputText.styled";
import { combinedState } from "constant/type";
import ModalDialog from "containers/ModalDialog/ModalDialog";
import { setUser } from "fb/API";
import { signUpWithEmail } from "fb/firebase";
import { useState } from "react";
import { useSelector } from "react-redux";

const SignUp = () => {
  const isOpenModal = useSelector((state: combinedState) => state.isOpenModal);

  const [state, setState] = useState({
    email: "",
    password: "",
    displayName: "",
  });
  const { email, password, displayName } = state;

  return isOpenModal.isOpenSignUp ? (
    <ModalDialog>
      <h1>salon</h1>
      <StyledInputText
        id="signUpEmail"
        name="email"
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
        id="signUpPassword"
        name="password"
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
      <StyledInputText
        id="signUpDisplayName"
        name="displayName"
        value={displayName}
        onChange={(e: any) => {
          setState(() => {
            return {
              ...state,
              displayName: e.target.value,
            };
          });
        }}
      />
      <StyledButton
        onClick={async () => {
          const res = await signUpWithEmail(email, password);
          if (res.user !== null) {
            const { uid, email } = res.user;
            setUser({ uid, email, displayName, photoURL: "" });
          }
        }}
      >
        SIGNUP
      </StyledButton>
    </ModalDialog>
  ) : null;
};

export default SignUp;
