import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCa1LZW0o-mjNVo0J2AOKo-M2BZxaoxlLU",
  authDomain: "salon-riding-bom.firebaseapp.com",
  projectId: "salon-riding-bom",
  storageBucket: "salon-riding-bom.appspot.com",
  messagingSenderId: "52085397565",
  appId: "1:52085397565:web:dcd2a0a121541d7739b254",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const usersCollectionRef = firestore.collection("users");

const auth = firebase.auth();
auth.useDeviceLanguage();
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: "select_account" });

const signInWithGoogle = async () => {
  const res = await auth.signInWithPopup(googleAuthProvider);
  return res;
};

const signUpWithEmail = async (email: string, password: string) => {
  const res = await auth.createUserWithEmailAndPassword(email, password);
  return res;
};

const signInWithEmail = async (email: string, password: string) => {
  const res = await auth.signInWithEmailAndPassword(email, password);
  return res;
};

const signOut = async () => {
  const res = await auth.signOut();
  return res;
};

const isAuthed = () => !!auth.currentUser;

export {
  firestore,
  usersCollectionRef,
  auth,
  signInWithGoogle,
  signUpWithEmail,
  signInWithEmail,
  signOut,
  isAuthed,
};
