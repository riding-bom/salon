const initialState = {
  isOpenSignIn: false,
  isOpenSignUp: false,
  isOpenAlertDeletePost: false,
  isOpenAlertWritePost: false,
  isOpenAlertCancelWriter: false,
  isOpenNeedSignIn: false,
  isOpenAlertCancelLike: false
};

type action = {
  type:
    | "isOpenSignIn"
    | "isOpenSignUp"
    | "isOpenAlertDeletePost"
    | "isOpenAlertWritePost"
    | "isOpenAlertCancelWriter"
    | "isOpenNeedSignIn"
    | "isOpenAlertCancelLike"
    | "every-modal-close";
  payload: boolean;
};

const createOpenAction = (dialogName: action["type"]) => ({
  type: dialogName,
  payload: true
});

const createCloseAction = (dialogName: action["type"]) => ({
  type: dialogName,
  payload: false
});

const createCloseAllAction = () => ({ type: "every-modal-close" });

const openModal = (state = initialState, action: action) => {
  if (action.type === "every-modal-close") {
    return { ...initialState };
  } else {
    return {
      ...state,
      [action.type]: action.payload
    };
  }
};

export default openModal;

export { createOpenAction, createCloseAction, createCloseAllAction };
