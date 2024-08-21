import React, { useState, useEffect } from 'react';

const MusicLibrary = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch('/data/tracks.json')
      .then(response => response.json())
      .then(data => setTracks(data));
  }, []);

  return (
    <div>
      <h2>Music Library</h2>
      <ul>
        {tracks.map(track => (
          <li key={track.id}>
            {track.title} - {track.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicLibrary;
