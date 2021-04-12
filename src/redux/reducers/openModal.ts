const SIGNIN_OPEN = "signin-open";
const SIGNIN_CLOSE = "signin-close";
const SIGNUP_OPEN = "singnup-open";
const SIGNUP_CLOSE = "singnup-close";

const initialState = {
  isOpenSignIn: false,
  isOpenSignUp: false,
};

type action = {
  type: string;
};

const signinOpenAction = { type: SIGNIN_OPEN };
const signinCloseAction = { type: SIGNIN_CLOSE };
const signupOpenAction = { type: SIGNUP_OPEN };
const signupCloseAction = { type: SIGNUP_CLOSE };

const openModal = (state = initialState, action: action) => {
  switch (action.type) {
    case SIGNIN_OPEN:
      return {
        ...state,
        isOpenSignIn: true,
      };
    case SIGNIN_CLOSE:
      return {
        ...state,
        isOpenSignIn: false,
      };
    case SIGNUP_OPEN:
      return {
        ...state,
        isOpenSignUp: true,
      };
    case SIGNUP_CLOSE:
      return {
        ...state,
        isOpenSignUp: false,
      };
    default:
      return state;
  }
};

export default openModal;
export {
  signinOpenAction,
  signinCloseAction,
  signupOpenAction,
  signupCloseAction,
};
