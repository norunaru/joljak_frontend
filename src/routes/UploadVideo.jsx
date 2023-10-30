import React, { useState } from "react";
import axios from "axios";

const UploadVideo = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Please choose a video to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    try {
      await axios.post("http://localhost:4000/api/videos/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Video uploaded successfully");
    } catch (error) {
      alert("Failed to upload the video");
    }
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="file">Choose a video:</label>
          <input
            type="file"
            id="file"
            accept="video/*"
            onChange={handleFileChange}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadVideo;
