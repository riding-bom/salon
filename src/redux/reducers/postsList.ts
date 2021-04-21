import { Dispatch } from "react";
import { postsList } from "constant/type";
import { getAllPost } from "fb/API";

type action = {
  type: string;
  payload: any;
};

const initialState: postsList = [];

const READ_LIST = "read-list";
const GET_POST = "get-post";

const getAllPostAsync = () => async (dispatch: Dispatch<action>) => {
  const allPost = await getAllPost();
  dispatch({ type: READ_LIST, payload: allPost });
};

const setAllPost = (allPost: postsList) => {
  return { type: GET_POST, payload: allPost };
};

const postsReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case READ_LIST:
      return [...action.payload];
    case GET_POST:
      return [...action.payload];
    default:
      return state;
  }
};

export { getAllPostAsync, setAllPost, postsReducer };
