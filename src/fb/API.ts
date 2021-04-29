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
const getSalonInfo = async () => {
  const snapshot = await salonInfoCollectionRef.doc("salonInfoSample").get();
  return snapshot;
};

const setSalonInfo = async (salonInfo: salonInfo) => {
  await salonInfoCollectionRef.doc("salonInfoSample").set({
    hostName: salonInfo.hostName,
    salonIntro: salonInfo.salonIntro,
    thumbnail: salonInfo.thumbnail
  });
};

/* comment API-------------------------------------------------------------------------- */

const commentCollectionRef = firestore.collection("comment");
const commentDocRef = (id: string) => commentCollectionRef.doc(id);

const addComment = async (newComment: comment) => {
  await commentCollectionRef.doc(newComment.id + "").set(newComment);
};

// const getComment = async () => {
//   const snapshot = await commentCollectionRef.doc().get();
//   return snapshot;
// };

const getAllComment = async (postId: string) => {
  const snapshot = await commentCollectionRef.where("postId", "==", postId).get();
  const commentList = snapshot.docs.map(comment => comment.data()).sort((a, b) => a.id - b.id);
  // post별로 댓글 가져오기 where를 사용하여 렌더 where("postId", "==", postId).get();
  return commentList;
};

const deleteComment = async (commentId: number) => {
  await commentCollectionRef.doc(commentId + "").delete();
};

const getMaxId = async () => {
  const snapshot = await commentCollectionRef.orderBy("id", "desc").limit(1).get();
  // maxId를 확인할 경우 orderBy("id", "desc").limit(1).get() -> 콜렉션에서 id를 기준으로 작은 것부터 큰 순으로
  // 정렬 후 그 중 1개만 get를 한다.
  return snapshot;
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

const setLikeUserInPostDB = async (uid: string, postId: string) => {
  await postsCollectionRef
    .doc(postId)
    .update({ likeUser: firebase.firestore.FieldValue.arrayUnion(uid) });
};

const removeUserInPostDB = async (uid: string, postId: string) => {
  await postsCollectionRef
    .doc(postId)
    .update({ likeUser: firebase.firestore.FieldValue.arrayRemove(uid) });
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
  // getComment,
  getMaxId,
  setLikeUserInPostDB,
  removeUserInPostDB,
  deleteComment
};
