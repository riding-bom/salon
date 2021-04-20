import { user } from "constant/type";

const UPDATE_CURRENT_USER = "update-current-user";
const REMOVE_CURRENT_USER = "remove-current-user";

type state = {
  userInfo: user | null;
  isAuthed: boolean;
};

type action = {
  type: string;
  payload: user | null;
};

const initialState: state = {
  userInfo: null,
  isAuthed: false,
};

const updateUserAction = (user: any) => {
  return {
    type: UPDATE_CURRENT_USER,
    payload: {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    },
  };
};

const removeUserAction = () => ({
  type: REMOVE_CURRENT_USER,
});

const currentUserReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case UPDATE_CURRENT_USER:
      return {
        userInfo: { ...action.payload },
        isAuthed: true,
      };
    case REMOVE_CURRENT_USER:
      return {
        userInfo: null,
        isAuthed: false,
      };
    default:
      return state;
  }
};

export default currentUserReducer;
export {
  updateUserAction,
  removeUserAction,
  UPDATE_CURRENT_USER,
  REMOVE_CURRENT_USER,
};
