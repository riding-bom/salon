import AlertDeleteComment from "containers/ModalDialogs/AlertDeleteComment";
import AlertInfoPost from "containers/ModalDialogs/AlertInfoPost";
import Spinner from "containers/ModalDialogs/Spinner";
import AlertCancelLike from "../containers/ModalDialogs/AlertCancelLike";
import AlertCancelWriter from "../containers/ModalDialogs/AlertCancelWriter";
import AlertDeletePost from "../containers/ModalDialogs/AlertDeletePost";
import AlertWritePost from "../containers/ModalDialogs/AlertWritePost";
import NeedSignIn from "../containers/ModalDialogs/NeedSignIn";
import SignIn from "../containers/ModalDialogs/SignIn";
import SignUp from "../containers/ModalDialogs/SignUp";

const ModalDialogs = () => {
  return (
    <>
      <AlertCancelLike />
      <AlertCancelWriter />
      <AlertDeletePost />
      <AlertWritePost />
      <AlertInfoPost />
      <NeedSignIn />
      <SignIn />
      <SignUp />
      <Spinner />
      <AlertDeleteComment />
    </>
  );
};

export default ModalDialogs;
