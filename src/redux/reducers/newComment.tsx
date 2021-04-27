import { getAllComment } from "fb/API";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";

const initialState = {
  // id: "",
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

// const UPDATE_ID = "update-id";
const UPDATE_UID = "update-uId";
const UPDATE_USER = "update-user";
const UPDATE_COMMENT = "update-comment";
const UPDATE_POSTID = "update-postId";
const UPDATE_DATE = "update-date";

// export const idAction = () => async (dispatch: Dispatch<{ type: string; payload: number }>) => {
//   const comments = await getAllComment();
//   console.log(comments);
//   const maxId = comments.length ? Math.max(...comments.map(comment => comment.id)) : 0;
//   console.log(maxId);
//   dispatch({ type: UPDATE_ID, payload: maxId + 1 });
//   return maxId;
// };

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

export const newCommentReducer = (state = initialState, action: action) => {
  switch (action.type) {
    // case UPDATE_ID:
    //   return { ...state, id: action.payload };
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
    default:
      return state;
  }
};
