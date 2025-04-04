import React, { useState, useEffect } from "react";

const EducationalVideoForm = ({ onSave, currentVideo }) => {
  const [name, setName] = useState("");
  const [videoLink, setVideoLink] = useState("");

  useEffect(() => {
    if (currentVideo) {
      setName(currentVideo.name);
      setVideoLink(currentVideo.videoLink);
    }
  }, [currentVideo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, videoLink });
    setName("");
    setVideoLink("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded shadow-md bg-white"
    >
      <div className="mb-4">
        <label className="block text-primary text-sm font-bold mb-2">
          Video Name
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter video name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-primary text-sm font-bold mb-2">
          Video Link
        </label>
        <input
          type="url"
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter video link (YouTube or Drive)"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          required
        />
      </div>

      <button className="px-4 py-2 bg-primary text-white rounded" type="submit">
        {currentVideo ? "Update Video" : "Add Video"}
      </button>
    </form>
  );
};

export default EducationalVideoForm;
