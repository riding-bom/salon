import { storage } from "fb/firebase";

// 1. Storage directory name, 2. upload file, return <Promise>
const firebaseUpload = (dir: string, file: any) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject("Invalid file.");
    }

    const uploadTask = storage.ref(`${dir}/${file.name}`).put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log(snapshot);
      },
      (error) => {
        console.log(error);
      },
      () => {
        //Gets link back
        uploadTask.snapshot.ref.getDownloadURL().then((url) => resolve(url));
      }
    );
  });
};

export default firebaseUpload;