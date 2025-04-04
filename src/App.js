import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import BlogApp from "./components/Blogs/BlogApp";
import EducationalVideoApp from "./components/Educational/EducationalVideoApp";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center p-8">
        <Routes>
          <Route
            path="/"
            element={
              <div className="text-center">
                <h1 className="text-5xl font-extrabold text-gray-800">
                  Welcome to{" "}
                  <span className="text-primary">The Tooth Story</span>
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                  Explore and add amazing blogs and educational videos!
                </p>
                <div className="mt-6">
                  <Link
                    to="/blog"
                    className="px-6 py-3 bg-primary text-white rounded-md text-lg font-semibold hover:bg-blue-700 transition-all mr-4"
                  >
                    Read Blogs
                  </Link>
                  <Link
                    to="/videos"
                    className="px-6 py-3 bg-purple-600 text-white rounded-md text-lg font-semibold hover:bg-purple-700 transition-all"
                  >
                    Watch Videos
                  </Link>
                </div>
              </div>
            }
          />
          <Route path="/blog" element={<BlogApp />} />
          <Route path="/videos" element={<EducationalVideoApp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
