const OPEN = "open";
const CLOSE = "close";

const initialState = false;

type action = {
  type: string;
};

const openModal = (state = initialState, action: action) => {
  switch (action.type) {
    case OPEN:
      return true;
    case CLOSE:
      return false;
    default:
      return state;
  }
};

export default openModal;
