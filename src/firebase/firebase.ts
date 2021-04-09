import firebase from "firebase/app";

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

export { firestore };
