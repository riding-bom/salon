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
    "https://firebasestorage.googleapis.com/v0/b/salon-riding-bom.appspot.com/o/profile%2FAvata.png?alt=media&token=0081c4d6-e4b9-41a3-a68b-6d6498df6c3e"
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
