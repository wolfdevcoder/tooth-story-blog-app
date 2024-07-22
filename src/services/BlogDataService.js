// src/services/BlogDataService.js
import { db } from "../components/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  doc,
} from "firebase/firestore";

const blogsCollectionRef = collection(db, "blogs");

class BlogDataService {
  addBlog = (newBlog) => {
    return addDoc(blogsCollectionRef, newBlog);
  };

  updateBlog = (id, updatedBlog) => {
    const blogDoc = doc(db, "blogs", id);
    return updateDoc(blogDoc, updatedBlog);
  };

  deleteBlog = (id) => {
    const blogDoc = doc(db, "blogs", id);
    return deleteDoc(blogDoc);
  };

  getAllBlogs = () => {
    return getDocs(blogsCollectionRef);
  };

  getBlogById = (id) => {
    const blogDoc = doc(db, "blogs", id);
    return getDoc(blogDoc);
  };
}

export default new BlogDataService();
