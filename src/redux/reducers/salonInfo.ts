const CHANGE_NAME = "CHANGE_NAME";
const SALON_INTRO = "SALON_INTRO";
const THUMBNAIL = "THUMBNAIL";

type salonAction = {
  type: string;
  payload: string;
};

const initialState = {
  hostName: "",
  salonIntro: "",
  thumbnail:
    "https://console.firebase.google.com/project/salon-riding-bom/storage/salon-riding-bom.appspot.com/files~2Fimages"
};

const changeNameAction = (newName: string) => ({
  type: CHANGE_NAME,
  payload: newName
});
const changeSalonIntroAction = (newSalonIntro: string) => ({
  type: SALON_INTRO,
  payload: newSalonIntro
});
const changeThumbnailAction = (newThumbnail: salonAction) => ({
  type: THUMBNAIL,
  payload: newThumbnail
});

const salonInfoReducer = (state = initialState, action: salonAction) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        hostName: action.payload
      };
    case SALON_INTRO:
      return {
        ...state,
        salonIntro: action.payload
      };
    case THUMBNAIL:
      return {
        ...state,
        thumbnail: action.payload
      };
    default:
      return state;
  }
};

export { changeNameAction, changeSalonIntroAction, changeThumbnailAction, salonInfoReducer };
