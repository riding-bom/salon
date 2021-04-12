import { usersCollectionRef } from "./firebase";

const setUser = async (user: any) => {
  await usersCollectionRef.doc(user.uid).set({
    uid: user.uid,
    displayName: user.displayName,
    photoURL: user.photoURL,
    email: user.email,
  });
};

const getUser = async (uid: string) => {
  const res = await usersCollectionRef.doc(uid).get();
  console.log(res.data());
  return res.data();
};

export { setUser, getUser };
