// src/components/AddMusicPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddMusicPage() {
  const [musicTitle, setMusicTitle] = useState('');
  const [musicFile, setMusicFile] = useState(null);
  const navigate = useNavigate();

  const handleTitleChange = (e) => setMusicTitle(e.target.value);
  const handleFileChange = (e) => setMusicFile(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Music Title:', musicTitle);
    console.log('Music File:', musicFile);
    navigate('/music-library');
  };

  return (
    <div className="container">
      <h2 className="my-4">Add New Music</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="musicTitle" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="musicTitle"
            value={musicTitle}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="musicFile" className="form-label">Upload File</label>
          <input
            type="file"
            className="form-control"
            id="musicFile"
            accept="audio/*"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Music</button>
      </form>
    </div>
  );
}

export default AddMusicPage;
