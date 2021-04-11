const SIGNIN_OPEN = "signin-open";
const SIGNIN_CLOSE = "signin-close";
const SIGNUP_OPEN = "singnup-open";
const SIGNUP_CLOSE = "singnup-close";

const initialState = {
  isOpenSignIn: true,
  isOpenSignUp: false,
};

type action = {
  type: string;
};

const signinOpenAction = { type: SIGNIN_OPEN };
const signinCloswAction = { type: SIGNIN_CLOSE };
const signupOpenAction = { type: SIGNUP_OPEN };
const signupCloseAction = { type: SIGNUP_CLOSE };

const openModal = (state = initialState, action: action) => {
  switch (action.type) {
    case SIGNIN_OPEN:
      return {
        ...state,
        isOpenSignin: true,
      };
    case SIGNIN_CLOSE:
      return {
        ...state,
        isOpenSignin: false,
      };
    case SIGNUP_OPEN:
      return {
        ...state,
        isOpenSignup: true,
      };
    case SIGNUP_CLOSE:
      return {
        ...state,
        isOpenSignup: false,
      };
    default:
      return state;
  }
};

export default openModal;
export {
  signinOpenAction,
  signinCloswAction,
  signupOpenAction,
  signupCloseAction,
};
