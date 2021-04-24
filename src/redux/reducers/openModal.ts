const SIGNIN_OPEN = "signin-open";
const SIGNIN_CLOSE = "signin-close";
const SIGNUP_OPEN = "singnup-open";
const SIGNUP_CLOSE = "singnup-close";
const ALERT_DELETE_POST_OPEN = "alert-delete-post-open";
const ALERT_DELETE_POST_CLOSE = "alert-delete-post-close";
const ALERT_WRITE_POST_OPEN = "alert-write-post-open";
const ALERT_WRITE_POST_CLOSE = "alert-write-post-close";
const ALERT_CANCEL_WRITER_OPEN = "alert-cancel-writer-open";
const ALERT_CANCEL_WRITER_CLOSE = "alert-cancel-writer-close";
const NEED_SIGNIN_OPEN = "need-signin-open";
const NEED_SIGNIN_CLOSE = "need-signin-close";
const ALERT_CANCEL_LIKE_OPEN = "alert-cancel-like-open";
const ALERT_CANCEL_LIKE_CLOSE = "alert-cancel-like-close";
const EVERY_MODAL_CLOSE = "every-modal-close";

const initialState = {
  isOpenSignIn: false,
  isOpenSignUp: false,
  isOpenAlertDeletePost: false,
  isOpenAlertWritePost: false,
  isOpenAlertCancelWriter: false,
  isOpenNeedSignIn: false,
  isOpenAlertCancelLike: false,
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
const alertCancelWriterOpenAction = { type: ALERT_CANCEL_WRITER_OPEN };
const alertCancelWriterCloseAction = { type: ALERT_CANCEL_WRITER_CLOSE };
const needSignInOpenAction = { type: NEED_SIGNIN_OPEN };
const needSignInCloseAction = { type: NEED_SIGNIN_CLOSE };
const alertCancelLikeOpenAction = { type: ALERT_CANCEL_LIKE_OPEN };
const alertCancelLikeCloseAction = { type: ALERT_CANCEL_LIKE_CLOSE };
const everyModalCloseAction = { type: EVERY_MODAL_CLOSE };

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
    case ALERT_CANCEL_WRITER_OPEN:
      return {
        ...state,
        isOpenAlertCancelWriter: true,
      };
    case ALERT_CANCEL_WRITER_CLOSE:
      return {
        ...state,
        isOpenAlertCancelWriter: false,
      };
    case NEED_SIGNIN_OPEN:
      return {
        ...state,
        isOpenNeedSignIn: true,
      };
    case NEED_SIGNIN_CLOSE:
      return {
        ...state,
        isOpenNeedSignIn: false,
      };
    case ALERT_CANCEL_LIKE_OPEN:
      return {
        ...state,
        isOpenAlertCancelLike: true,
      };
    case ALERT_CANCEL_LIKE_CLOSE:
      return {
        ...state,
        isOpenAlertCancelLike: false,
      };
    case EVERY_MODAL_CLOSE:
      return {
        ...initialState,
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
  alertCancelWriterOpenAction,
  alertCancelWriterCloseAction,
  needSignInOpenAction,
  needSignInCloseAction,
  alertCancelLikeOpenAction,
  alertCancelLikeCloseAction,
  everyModalCloseAction,
};
