import { storage } from "fb/firebase";

// 1. Storage directory name, 2. upload file, return <Promise>
const firebaseUpload = async (dir: string, file: any) => {
  console.log(file);

  try {
    const uploadTask = await storage.ref(`${dir}/${new Date() + ' ' + file.name}`).put(file);

    console.log(uploadTask);

    const url = await uploadTask.ref.getDownloadURL();

    return url;
  } catch (error) {
    console.log(error)
  }
};

export default firebaseUpload;