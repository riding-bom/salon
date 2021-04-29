type salonAction = {
  type: string;
  payload: string;
};

const initialState = {
  hostName: "",
  salonIntro: "",
  thumbnail:
    "https://firebasestorage.googleapis.com/v0/b/salon-riding-bom.appspot.com/o/images%2FAvata.png?alt=media&token=54367a89-e83c-4adc-bada-ac0994c55f0e"
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
