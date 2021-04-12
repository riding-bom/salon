import { user } from "constant/type";
import { signInWithGoogle } from "fb/firebase";
import { Dispatch } from "react";
import { getUser, setUser } from "fb/API";

const UPDATE_CURRENT_USER = "update-current-user";
const REMOVE_CURRENT_USER = "remove-current-user";

type state = {
  userInfo: user | null;
  isAuthed: Boolean;
};

const initialState: state = {
  userInfo: null,
  isAuthed: false,
};

type action = {
  type: string;
  payload: user | null;
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

const updateUserWithGoogle = () => async (dispatch: Dispatch<action>) => {
  try {
    const res = await signInWithGoogle();
    const user = res.user;
    if (user !== null) {
      await setUser(user);
      const user2 = await getUser(user.uid);
      dispatch(updateUserAction(user2));
    }
  } catch (e) {
    console.error(e);
  }
};

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
  updateUserWithGoogle,
  UPDATE_CURRENT_USER,
  REMOVE_CURRENT_USER,
};
