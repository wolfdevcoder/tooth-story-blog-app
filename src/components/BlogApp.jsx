import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
import BlogForm from "./BlogForm";
import BlogDataService from "../services/BlogDataService";

const BlogApp = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(null);

  const getBlogs = async () => {
    try {
      const data = await BlogDataService.getAllBlogs();
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBlogs(filteredData);
    } catch (error) {
      console.log("Error fetching blogs: ", error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const handleSaveBlog = async (blog) => {
    try {
      if (currentBlog) {
        await BlogDataService.updateBlog(currentBlog.id, blog);
      } else {
        console.log("add method called");
        await BlogDataService.addBlog(blog);
      }
      getBlogs();
      setCurrentBlog(null);
    } catch (error) {
      console.log("Error saving blog: ", error);
    }
  };

  const handleEditBlog = (blog) => {
    setCurrentBlog(blog);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteBlog = async (id) => {
    try {
      await BlogDataService.deleteBlog(id);
      getBlogs();
    } catch (error) {
      console.log("Error deleting blog: ", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-primary mb-4">Tooth Story Blog</h1>
      <BlogForm onSave={handleSaveBlog} currentBlog={currentBlog} />
      <BlogList
        blogs={blogs}
        onEdit={handleEditBlog}
        onDelete={handleDeleteBlog}
      />
    </div>
  );
};

export default BlogApp;
