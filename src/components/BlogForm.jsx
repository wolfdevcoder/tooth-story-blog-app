import React, { useState, useEffect } from "react";

const BlogForm = ({ onSave, currentBlog }) => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (currentBlog) {
      setAuthor(currentBlog.author);
      setTitle(currentBlog.title);
      setDescription(currentBlog.description);
      setImage(currentBlog.image);
    }
  }, [currentBlog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ author, title, description, image });
    setAuthor("");
    setTitle("");
    setDescription("");
    setImage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded shadow-md bg-secondary"
    >
      <div className="mb-4">
        <label className="block text-primary text-sm font-bold mb-2">
          Author
        </label>
        <input
          className="w-full px-3 py-2 border rounded"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-primary text-sm font-bold mb-2">
          Title
        </label>
        <input
          className="w-full px-3 py-2 border rounded"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-primary text-sm font-bold mb-2">
          Description
        </label>
        <textarea
          className="w-full px-3 py-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-primary text-sm font-bold mb-2">
          Image URL
        </label>
        <input
          className="w-full px-3 py-2 border rounded"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button className="px-4 py-2 bg-primary text-white rounded" type="submit">
        {currentBlog ? "Update" : "Add"} Blog
      </button>
    </form>
  );
};

export default BlogForm;
