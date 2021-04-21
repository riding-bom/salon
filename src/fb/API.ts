import {
  usersCollectionRef,
  salonInfoCollectionRef,
  firestore,
} from "./firebase";
import { post, user } from "../constant/type";

/* posts API-------------------------------------------------------------------------- */
const postsCollectionRef = firestore.collection("posts");
const postsDocRef = (id: string) => postsCollectionRef.doc(id);

const addPost = async (newPost: post) => {
  await postsDocRef(newPost.id + "").set(newPost);
  console.log("addPost", newPost);
};

const getAllPost = async () => {
  const snapshot = await postsCollectionRef.get();
  const list = snapshot.docs
    .map((post) => post.data())
    .sort((a, b) => b.id - a.id);
  return list;
};

/* users API-------------------------------------------------------------------------- */
const setUser = async (user: user) => {
  await usersCollectionRef.doc(user.uid).set({
    uid: user.uid,
    displayName: user.displayName,
    photoURL: user.photoURL,
    email: user.email,
  });
};

const getUser = async (uid: string) => {
  const res = await usersCollectionRef.doc(uid).get();
  return res.data();
};

const setSalonInfo = async (salonInfo: any) => {
  await salonInfoCollectionRef.doc("salonInfoSample").set({
    hostName: salonInfo.hostName,
    salonIntro: salonInfo.salonIntro,
    thumbnail: salonInfo.thumbnail,
  });
};

const getSalonInfo = async () => {
  const res = await salonInfoCollectionRef.doc("salonInfoSample").get();
  return res;
};

export { setUser, getUser, setSalonInfo, getSalonInfo, addPost, getAllPost };
