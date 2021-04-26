import firebase from "firebase/app";
import {
  usersCollectionRef,
  salonInfoCollectionRef,
  mainPostCollectionRef,
  firestore
} from "./firebase";
import { post, user, salonInfo, comment } from "../constant/type";

/* posts API-------------------------------------------------------------------------- */
const postsCollectionRef = firestore.collection("posts");
const postsDocRef = (id: string) => postsCollectionRef.doc(id);

const addPost = async (newPost: post) => {
  await postsDocRef(newPost.id + "").set(newPost);
};

const getPost = async (postId: string) => {
  const post = await postsDocRef(postId).get();
  return post.data();
};

const deletePost = async (postId: number) => {
  await postsDocRef(postId + "").delete();
};

const getAllPost = async () => {
  const snapshot = await postsCollectionRef.get();
  const list = snapshot.docs.map(post => post.data()).sort((a, b) => b.id - a.id);
  return list;
};

const getMainPost = async () => {
  const snapshot = await mainPostCollectionRef.get();
  const list = snapshot.docs.map(post => post.data());
  return list;
};

/* users API-------------------------------------------------------------------------- */
const setUser = async (user: user) => {
  await usersCollectionRef.doc(user.uid).set({
    uid: user.uid,
    displayName: user.displayName,
    photoURL: user.photoURL,
    email: user.email
  });
};

const getUser = async (uid: string) => {
  const res = await usersCollectionRef.doc(uid).get();
  return res.data();
};

/* SalonInfo API-------------------------------------------------------------------------- */
const setSalonInfo = async (salonInfo: salonInfo) => {
  await salonInfoCollectionRef.doc("salonInfoSample").set({
    hostName: salonInfo.hostName,
    salonIntro: salonInfo.salonIntro,
    thumbnail: salonInfo.thumbnail
  });
};

const getSalonInfo = async () => {
  const snapshot = await salonInfoCollectionRef.doc("salonInfoSample").get();
  return snapshot;
};

/* comment API-------------------------------------------------------------------------- */

const commentCollectionRef = firestore.collection("comment");
const commentDocRef = (id: string) => commentCollectionRef.doc(id);

const addComment = async (newComment: comment) => {
  commentCollectionRef.doc().set(newComment);
};

const getComment = async () => {
  const snapshot = await commentCollectionRef.doc().get();
  return snapshot;
};

const getAllComment = async () => {
  const snapshot = await commentCollectionRef.get();
  const commentList = snapshot.docs.map(comment => comment.data()).sort((a, b) => b.id - a.id);
  return commentList;
};

/* like API-------------------------------------------------------------------------- */
const setLikePost = async (uid: string, postId: string) => {
  await usersCollectionRef
    .doc(uid)
    .update({ likePost: firebase.firestore.FieldValue.arrayUnion(postId) });
};

const removeLikePost = async (uid: string, postId: string) => {
  await usersCollectionRef
    .doc(uid)
    .update({ likePost: firebase.firestore.FieldValue.arrayRemove(postId) });
};

export {
  setUser,
  getUser,
  setSalonInfo,
  getSalonInfo,
  addPost,
  getPost,
  deletePost,
  getAllPost,
  getMainPost,
  addComment,
  getAllComment,
  setLikePost,
  removeLikePost,
  getComment
};
