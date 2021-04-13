import { usersCollectionRef, salonInfoCollectionRef } from './firebase';
import { post } from '../constant/type';
import { firestore } from './firebase';

const setUser = async (user: any) => {
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

const setSalonInfo = async (salonInfo: any) => {
  await salonInfoCollectionRef.doc().set({
    hostName: salonInfo.hostName,
    salonIntro: salonInfo.salonIntro,
    thumbnail: salonInfo.thumbnail
  });
};

const postsCollectionRef = firestore.collection('posts');
const postsDocRef = (id: string) => postsCollectionRef.doc(id);

const addPost = async (newPost: post) => {
  await postsDocRef(newPost.id + '').set(newPost);
  console.log('addPost', newPost);
};

const getAllPost = async () => {
  const snapshot = await postsCollectionRef.get();
  const list = snapshot.docs.map(post => post.data()).sort((a, b) => (a.id > b.id ? -1 : 1));
  return list;
};

export { setUser, getUser, setSalonInfo, addPost, getAllPost };
