import { postsList } from "constant/type";

const SET_RENDERING_LIST = "set-rendering-list";

const initialState: postsList = [];

const setRenderingListAction = (payload: any) => {
  return { type: SET_RENDERING_LIST, payload: payload };
};

const renderListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_RENDERING_LIST:
      return [...action.payload];
    default:
      return state;
  }
};

export default renderListReducer;
export { setRenderingListAction };
