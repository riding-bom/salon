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
      <NeedSignIn />
      <SignIn />
      <SignUp />
    </>
  );
};

export default ModalDialogs;
