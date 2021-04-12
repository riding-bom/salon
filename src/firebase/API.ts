import { post } from '../constant/type';
import { firestore } from './firebase';

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

export {addPost, getAllPost}