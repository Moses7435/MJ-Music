import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MusicLibrary from './components/MusicLibrary';
import Playlist from './components/Playlist';
import AudioPlayer from './components/AudioPlayer';
import AddMusicPage from './components/AddMusicPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex align-items-center bg-dark text-white py-2">
            <button className="btn btn-dark" onClick={toggleSidebar}>
              <div style={{ width: '20px', height: '2px', backgroundColor: 'white', margin: '4px 0' }}></div>
              <div style={{ width: '20px', height: '2px', backgroundColor: 'white', margin: '4px 0' }}></div>
              <div style={{ width: '20px', height: '2px', backgroundColor: 'white', margin: '4px 0' }}></div>
            </button>
            <h1 className="ms-3 mb-0">ViMusic</h1>
          </div>
        </div>
        <div className="row">
          <div
            className={`col-md-3 col-lg-2 bg-light p-3 sidebar ${isSidebarOpen ? '' : 'd-none'}`}
            style={{ minHeight: '50vh', overflowY: 'auto' }}
          >
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          </div>
          <main className={`col-md-${isSidebarOpen ? '9' : '12'} col-lg-${isSidebarOpen ? '10' : '12'} p-4`}>
            <div className="text-center">
              <h1 className="display-4">Welcome to ViMusic</h1>
              <p className="lead">Your ultimate music streaming experience.</p>
            </div>
            <Routes>
              <Route path="/music-library" element={<MusicLibrary />} />
              <Route path="/playlist" element={<Playlist />} />
              <Route path="/audio-player" element={<AudioPlayer />} />
              <Route path="/add-music" element={<AddMusicPage />} />
            </Routes>
          </main>
        </div>
        <footer className="bg-dark text-white text-center py-3">
          <div className="container">
            <p className="mb-0">© 2024 ViMusic, All Rights Reserved.</p>
            <button className="btn btn-info mt-2" onClick={toggleModal}>
              About ViMusic
            </button>
          </div>
        </footer>
        {showModal && (
          <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">About ViMusic</h5>
                  <button type="button" className="close" onClick={toggleModal}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>ViMusic is your go-to app for streaming your favorite music. Enjoy endless playlists, seamless streaming, and much more.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={toggleModal}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
