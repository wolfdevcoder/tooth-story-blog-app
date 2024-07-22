import React from "react";

const BlogList = ({ blogs, onEdit, onDelete }) => {
  return (
    <div className="w-full mt-8">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="p-4 border rounded mb-4 shadow-md bg-secondary"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h2 className="text-xl font-bold text-primary">{blog.title}</h2>
          <h3 className="text-md font-semibold text-gray-700 mt-1">
            by {blog.author}
          </h3>
          <p className="mt-2">{blog.description}</p>
          <div className="mt-4">
            <button
              className="mr-2 px-4 py-2 bg-primary text-white rounded"
              onClick={() => onEdit(blog)}
            >
              Edit
            </button>
            <button
              className="px-4 py-2 bg-red-600 text-white rounded"
              onClick={() => onDelete(blog.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
