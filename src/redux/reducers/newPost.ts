import { post } from "constant/type";
import { Dispatch } from "react";
import { getAllPost } from "fb/API";

const UPDATE_ID = "update-id";
const UPDATE_TITLE = "update-title";
const UPDATE_SUB_TITLE = "update-sub-title";
const UPDATE_CONTENT = "update-content";
const UPDATE_DATE = "update-date";
const UPDATE_CATEGORY = "update-category";
const RESET_TITLE = "reset-Title";

const initialState: post = {
  id: "0",
  title: "",
  subTitle: "",
  date: new Date(),
  content: "",
  category: "All",
  backgroundImage: "",
  backgroundColor: "",
};

export const idAction = () => async (
  dispatch: Dispatch<{ type: string; payload: number }>
) => {
  const posts = await getAllPost();
  const maxId = posts.length ? Math.max(...posts.map((post) => post.id)) : 0;
  dispatch({ type: UPDATE_ID, payload: maxId + 1 });
  return maxId;
};

export const titleAction = (title: string) => ({
  type: UPDATE_TITLE,
  payload: title,
});

export const subTitleAction = (subTitle: string) => ({
  type: UPDATE_SUB_TITLE,
  payload: subTitle,
});

export const contentAction = (content: string) => ({
  type: UPDATE_CONTENT,
  payload: content,
});

export const dateAction = (date: Date) => ({
  type: UPDATE_DATE,
  payload: date,
});

export const categoryAction = (
  category: "All" | "Poem" | "Novel" | "Essay"
) => ({
  type: UPDATE_CATEGORY,
  payload: category,
});

export const resetTitleAction = () => ({
  type: RESET_TITLE,
});

type action = {
  type: string;
  payload: "" | Date | "All" | "Poem" | "Novel" | "Essay";
};

export const newPostReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case UPDATE_ID:
      return { ...state, id: action.payload };
    case UPDATE_TITLE:
      return { ...state, title: action.payload };
    case UPDATE_SUB_TITLE:
      return { ...state, subTitle: action.payload };
    case UPDATE_CONTENT:
      return { ...state, content: action.payload };
    case UPDATE_DATE:
      return { ...state, date: action.payload };
    case UPDATE_CATEGORY:
      return { ...state, category: action.payload };
    case RESET_TITLE:
      return { ...state, title: "" };
    default:
      return state;
  }
};
