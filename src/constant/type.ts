import { CombinedState } from "redux";

type post = {
  id: string;
  title: string;
  subTitle: string;
  date: Date;
  content: string;
  category: string;
  backgroundImage: string | null;
  backgroundColor: string | null;
};

type postsList = post[];

type user = {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
};

type combinedState = CombinedState<{
  postsList: post[];
  isOpenModal: {
    isOpenSignIn: boolean;
    isOpenSignUp: boolean;
  };
  currentUser: {
    userInfo: user | null;
    isAuthed: boolean;
  };
}>;

export type { post, postsList, combinedState, user };
