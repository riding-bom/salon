import { CombinedState } from "redux";
import firebase from "firebase/app";

type post = {
  access: string;
  id: string;
  title: string;
  subTitle: string;
  date: Date;
  content: string;
  category: string;
  backgroundImage: string;
  backgroundColor: string;
};

type postsList = post[];

type user = {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  likePost?: string[];
};

type salonInfo = {
  hostName: string;
  salonIntro: string;
  thumbnail: string;
};

type postFromFirestore = {
  access: string;
  id: number;
  title: string;
  subTitle: string;
  date: firebase.firestore.Timestamp;
  content: string;
  category: string;
  backgroundImage: string;
  backgroundColor: string;
};

type combinedState = CombinedState<{
  postsList: postsList;
  newPost: post;
  isOpenModal: {
    isOpenSignIn: boolean;
    isOpenSignUp: boolean;
    isOpenAlertDeletePost: boolean;
    isOpenAlertWritePost: boolean;
    isOpenAlertCancelWriter: boolean;
    isOpenNeedSignIn: boolean;
    isOpenAlertCancelLike: boolean;
  };
  currentUser: {
    userInfo: user | null;
    isAuthed: boolean;
  };
  renderingList: {
    renderingList: postsList;
    currentPage: number;
  };
  salonInfo: salonInfo;
  mainPost: postsList;
  newComment: comment;
  comment: comment[];
}>;

type comment = {
  id: string;
  user: string;
  comment: string;
  postId: string;
  date: Date;
};

export type { post, postsList, combinedState, user, salonInfo, postFromFirestore, comment };
