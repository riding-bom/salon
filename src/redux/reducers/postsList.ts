import { Dispatch } from "react";
import { postsList } from "constant/type";

type action = {
  type: string;
  payload: postsList;
};

const initialState: postsList = [];

const READ_LIST = "read-list";


const getAllPost = () => (dispatch:Dispatch<action>) => {
  dispatch({
    type: READ_LIST,
    // dummu data
    //TODO: fireStore를 사용하여 postsList 데이터 통신
    payload: [
      {
        id: "1",
        title: "게시물1",
        date: new Date(),
        content: "내용1",
        category: "전체",
        backgroundImage: null,
        backgroundColor: null,
      },
      {
        id: "2",
        title: "게시물2",
        date: new Date(),
        content: "내용2",
        category: "전체",
        backgroundImage: null,
        backgroundColor: null,
      }
    ] 
  })
}

const postsReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case READ_LIST:
      return [...action.payload];
    default:
      return state;
  }
};

export default postsReducer;
export { getAllPost };
