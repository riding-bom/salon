import comment from "data";

type action = {
  type: string;
  payload?: any;
};

const initialState = comment;

const updateAction = (comment: string) => {
  return { type: "UPDATA", payload: comment };
};

const commentReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case "CREATE":
      return [...action.payload];
    case "UPDATA":
      return [...state, { comment: action.payload }];
    default:
      return state;
  }
};

export { commentReducer, updateAction };
