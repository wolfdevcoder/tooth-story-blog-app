import React from "react";

const convertToEmbeddable = (url) => {
  if (url.includes("youtube.com")) {
    const id = new URL(url).searchParams.get("v");
    return `https://www.youtube.com/embed/${id}`;
  } else if (url.includes("youtu.be")) {
    const id = url.split("/").pop();
    return `https://www.youtube.com/embed/${id}`;
  } else if (url.includes("drive.google.com")) {
    const match = url.match(/\/d\/(.+?)\//);
    const id = match ? match[1] : "";
    return `https://drive.google.com/file/d/${id}/preview`;
  }
  return url;
};

const EducationalVideoList = ({ videos, onEdit, onDelete }) => {
  return (
    <div className="mt-8 space-y-6">
      {videos.map((video) => (
        <div
          key={video.id}
          className="p-6 border rounded-lg shadow-lg bg-white"
        >
          <h2 className="text-xl font-bold text-primary">{video.name}</h2>

          <div className="mt-4 rounded-lg overflow-hidden">
            <iframe
              src={convertToEmbeddable(video.videoLink)}
              title={video.name}
              className="w-full aspect-video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex space-x-3">
            <button
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
              onClick={() => onEdit(video)}
            >
              Edit
            </button>
            <button
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              onClick={() => onDelete(video.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationalVideoList;
