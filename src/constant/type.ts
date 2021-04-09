import { CombinedState } from "redux";

type post = {
  id: string;
  title: string;
  date: Date;
  content: string;
  category: string;
  backgroundImage: string | null;
  backgroundColor: string | null;
};

type postsList = post[];

type combinedState = CombinedState<{
  postsList: post[];
  openModal: Boolean;
}>;

export type { post, postsList, combinedState };
