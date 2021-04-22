import { postsList } from "constant/type";

const SET_RENDERING_LIST = "set-rendering-list";
const SET_CURRENT_PAGE = "set-current-page";

const initialState = {
  renderingList: [] as postsList,
  currentPage: 1,
};

const setRenderingListAction = (payload: postsList) => {
  return { type: SET_RENDERING_LIST, payload: payload };
};
const setCurrentPageAction = (payload: number) => {
  return { type: SET_CURRENT_PAGE, payload: payload };
};

const renderListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_RENDERING_LIST:
      return {
        ...state,
        renderingList: [...action.payload],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default renderListReducer;
export { setRenderingListAction, setCurrentPageAction };
