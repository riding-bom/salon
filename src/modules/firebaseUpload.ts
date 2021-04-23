import { storage } from "fb/firebase";

// 1. Storage directory name, 2. file id 3. upload file, return <Promise>
const firebaseUpload = async (dir: string, fileId: string, file: any) => {
  console.log(file);

  try {
    const uploadTask = await storage.ref(`${dir}/${fileId}_${file.name}`).put(file);

    console.log(uploadTask);

    const url = await uploadTask.ref.getDownloadURL();

    return url;
  } catch (error) {
    console.log(error)
  }
};

export default firebaseUpload;