import React, { useState, useEffect } from "react";
import EducationalVideoForm from "./EducationalVideoForm";
import EducationalVideoList from "./EducationalVideoList";
import EducationalVideoDataService from "../../services/EducationalVideoDataService";

const EducationalVideoApp = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  const getVideos = async () => {
    try {
      const data = await EducationalVideoDataService.getAllVideos();
      const videoList = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setVideos(videoList);
    } catch (error) {
      console.log("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  const handleSaveVideo = async (video) => {
    try {
      if (currentVideo) {
        await EducationalVideoDataService.updateVideo(currentVideo.id, video);
      } else {
        await EducationalVideoDataService.addVideo(video);
      }
      getVideos();
      setCurrentVideo(null);
    } catch (error) {
      console.log("Error saving video:", error);
    }
  };

  const handleEditVideo = (video) => {
    setCurrentVideo(video);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteVideo = async (id) => {
    try {
      await EducationalVideoDataService.deleteVideo(id);
      getVideos();
    } catch (error) {
      console.log("Error deleting video:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-primary mb-4">
        Educational Video
      </h1>
      <EducationalVideoForm
        onSave={handleSaveVideo}
        currentVideo={currentVideo}
      />
      <EducationalVideoList
        videos={videos}
        onEdit={handleEditVideo}
        onDelete={handleDeleteVideo}
      />
    </div>
  );
};

export default EducationalVideoApp;
