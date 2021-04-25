const initialState = {
  id: "",
  user: "",
  comment: ""
};

type action = {
  type: string;
  payload: string;
};

const UPDATE_ID = "update-id";
const UPDATE_USER = "update-user";
const UPDATE_COMMENT = "update-comment";
const UPDATE_POSTID = "update-postId";

export const idAction = (id: string) => {
  return { type: UPDATE_ID, payload: id };
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

export const newCommentReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case UPDATE_ID:
      return { ...state, id: action.payload };
    case UPDATE_USER:
      return { ...state, user: action.payload };
    case UPDATE_COMMENT:
      return { ...state, comment: action.payload };
    case UPDATE_POSTID:
      return { ...state, postId: action.payload };
    default:
      return state;
  }
};
