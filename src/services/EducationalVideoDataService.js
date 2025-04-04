import { db } from "../components/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const videoCollectionRef = collection(db, "educationalVideos");

const EducationalVideoDataService = {
  addVideo: async (newVideo) => await addDoc(videoCollectionRef, newVideo),
  updateVideo: async (id, updatedVideo) => {
    const videoDoc = doc(db, "educationalVideos", id);
    return await updateDoc(videoDoc, updatedVideo);
  },
  deleteVideo: async (id) => {
    const videoDoc = doc(db, "educationalVideos", id);
    return await deleteDoc(videoDoc);
  },
  getAllVideos: async () => await getDocs(videoCollectionRef),
};

export default EducationalVideoDataService;
