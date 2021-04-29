import { getAllComment, getMaxId } from "fb/API";
import { Dispatch } from "react";

const initialState = {
  id: "",
  user: "",
  comment: "",
  userUid: "",
  date: new Date()
};

type action = {
  type: string;
  payload: string;
};

// const dispatch = useDispatch;

const UPDATE_ID = "update-id";
const UPDATE_UID = "update-uId";
const UPDATE_USER = "update-user";
const UPDATE_COMMENT = "update-comment";
const UPDATE_POSTID = "update-postId";
const UPDATE_DATE = "update-date";
const RESET = "reset-comment";
const DELETE_ID = "delete-id";

export const idAction = () => async (dispatch: Dispatch<{ type: string; payload: number }>) => {
  const snapshot = await getMaxId();
  const maxId = snapshot.size ? snapshot.docs.map(post => post.data())[0].id : 0;
  // const maxId = comments.length ? Math.max(...comments.map(comment => +comment.id)) : 0;
  dispatch({ type: UPDATE_ID, payload: maxId + 1 });
};

export const userUidAction = (userUid: string) => {
  return { type: UPDATE_UID, payload: userUid };
};

export const userAction = (user: string) => {
  return { type: UPDATE_USER, payload: user };
};

export const commentAction = (comment: string) => {
  return { type: UPDATE_COMMENT, payload: comment };
};

export const postIdAction = (postId: string) => {
  return { type: UPDATE_POSTID, payload: postId };
};

export const dateAction = (date: Date) => {
  return { type: UPDATE_DATE, payload: date };
};

export const resetCommentAction = () => {
  return { type: RESET };
};

export const deleteIdAction = (commentId: number) => {
  return { type: DELETE_ID, payload: commentId };
};

export const newCommentReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case UPDATE_ID:
      return { ...state, id: action.payload };
    case UPDATE_UID:
      return { ...state, userUid: action.payload };
    case UPDATE_USER:
      return { ...state, user: action.payload };
    case UPDATE_COMMENT:
      return { ...state, comment: action.payload };
    case UPDATE_POSTID:
      return { ...state, postId: action.payload };
    case UPDATE_DATE:
      return { ...state, date: action.payload };
    case RESET:
      return { ...state, comment: "" };
    case DELETE_ID:
      return { ...state, id: action.payload };
    default:
      return state;
  }
};
