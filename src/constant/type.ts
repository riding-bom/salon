import { CombinedState } from "redux";

type post = {
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
};

type combinedState = CombinedState<{
  postsList: postsList;
  newPost: post;
  isOpenModal: {
    isOpenSignIn: Boolean;
    isOpenSignUp: Boolean;
  };
  currentUser: {
    userInfo: user | null;
    isAuthed: Boolean;
  };
}>;

export type { post, postsList, combinedState, user };
