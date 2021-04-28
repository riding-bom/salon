type salonAction = {
  type: string;
  payload: string;
};

const initialState = {
  hostName: "",
  salonIntro: "",
  thumbnail:
    "https://firebasestorage.googleapis.com/v0/b/salon-riding-bom.appspot.com/o/profile%2FAvata.png?alt=media&token=0081c4d6-e4b9-41a3-a68b-6d6498df6c3e"
};

const SET_HOST_NAME = "SET_HOST_NAME";
const SET_SALON_INTRO = "SET_SALON_INTRO";
const SET_THUMBNAIL = "THUMBNAIL";

const sethostNameAction = (newName: string) => ({
  type: SET_HOST_NAME,
  payload: newName
});
const setSalonIntroAction = (newSalonIntro: string) => ({
  type: SET_SALON_INTRO,
  payload: newSalonIntro
});
const setThumbnailAction = (newThumbnail: salonAction) => ({
  type: SET_THUMBNAIL,
  payload: newThumbnail
});

const salonInfoReducer = (state = initialState, action: salonAction) => {
  switch (action.type) {
    case SET_HOST_NAME:
      return {
        ...state,
        hostName: action.payload
      };
    case SET_SALON_INTRO:
      return {
        ...state,
        salonIntro: action.payload
      };
    case SET_THUMBNAIL:
      return {
        ...state,
        thumbnail: action.payload
      };
    default:
      return state;
  }
};

export { sethostNameAction, setSalonIntroAction, setThumbnailAction, salonInfoReducer };
