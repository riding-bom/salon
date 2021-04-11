const CHANGE_NAME = 'CHANGE_NAME';
const SALON_INTRO = 'SALON_INTRO';
const THUMBNAIL = 'THUMBNAIL';

type salonAction = {
  type: string;
  payload: string;
};

const initialState = {
  hostName: '한방국',
  salonIntro:
    '한방국 작가입니다. 저는 원래 글쓰는 사람인데 유투브도 하고 별거 다 하다가 여기까지 왔네요 그럼 수고...',
  thumbnail: ''
};

const changeNameAction = (newName: salonAction) => ({
  type: CHANGE_NAME,
  payload: newName
});
const changeSalonIntroAction = (newSalonIntro: salonAction) => ({
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
