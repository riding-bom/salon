const SIGNIN_OPEN = "signin-open";
const SIGNIN_CLOSE = "signin-close";
const SIGNUP_OPEN = "singnup-open";
const SIGNUP_CLOSE = "singnup-close";
const ALERT_DELETE_POST_OPEN = "alert-delete-post-open";
const ALERT_DELETE_POST_CLOSE = "alert-delete-post-close";
const ALERT_WRITE_POST_OPEN = "alert-write-post-open";
const ALERT_WRITE_POST_CLOSE = "alert-write-post-close";


const initialState = {
  isOpenSignIn: false,
  isOpenSignUp: false,
  isOpenAlertDeletePost: false,
  isOpenAlertWritePost: false,
};

type action = {
  type: string;
};

const signinOpenAction = { type: SIGNIN_OPEN };
const signinCloseAction = { type: SIGNIN_CLOSE };
const signupOpenAction = { type: SIGNUP_OPEN };
const signupCloseAction = { type: SIGNUP_CLOSE };
const alertDeletePostOpenAction = { type: ALERT_DELETE_POST_OPEN };
const alertDeletePostCloseAction = { type: ALERT_DELETE_POST_CLOSE };
const alertWritePostOpenAction = { type: ALERT_WRITE_POST_OPEN };
const alertWritePostCloseAction = { type: ALERT_WRITE_POST_CLOSE };

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
    case ALERT_DELETE_POST_OPEN:
      return {
        ...state,
        isOpenAlertDeletePost: true,
      };
    case ALERT_DELETE_POST_CLOSE:
      return {
        ...state,
        isOpenAlertDeletePost: false,
      };
    case ALERT_WRITE_POST_OPEN:
      return {
        ...state,
        isOpenAlertWritePost: true,
      };
    case ALERT_WRITE_POST_CLOSE:
      return {
        ...state,
        isOpenAlertWritePost: false,
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
  alertDeletePostOpenAction,
  alertDeletePostCloseAction,
  alertWritePostOpenAction,
  alertWritePostCloseAction,
};
