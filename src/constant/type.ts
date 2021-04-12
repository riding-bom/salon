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

type combinedState = CombinedState<{
  postsList: post[];
  isOpenModal: {
    isOpenSignIn: Boolean;
    isOpenSignUp: Boolean;
  };
}>;

export type { post, postsList, combinedState };
