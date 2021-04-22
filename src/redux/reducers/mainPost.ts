import { postsList } from "constant/type";
import { getMainPost } from "fb/API";
import { Dispatch } from "react";

type action = {
  type: string;
  payload: postsList;
};

const SET_MAIN_POST = "set-main-post";

const initialState = [] as postsList;

const createSetMainPostAction = (payload: postsList) => {
  return { type: SET_MAIN_POST, payload: payload };
};

const createSetMainPostActionAsync = () => async (
  dispatch: Dispatch<action>
) => {
  const list = await getMainPost();
  dispatch(createSetMainPostAction(list as postsList));
};

const mainPostReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case SET_MAIN_POST:
      return [...action.payload];
    default:
      return state;
  }
};

export default mainPostReducer;
export { createSetMainPostActionAsync };
