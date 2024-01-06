import React, { useState } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import SONGS from './Songs';
import { ArrowBackIos } from '@mui/icons-material';
import './styles/SONGPLAY.css';
import AUDIOPLAYER from './AUDIOPLAYER';

const SONGPLAY = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [songs, setSongs] = useState(SONGS);

  const songData = songs.find(song => song.title === title);

  // Check if songData is undefined before accessing its properties
  if (!songData) {
    return <div>Error: Song not found</div>;
  }

  const handlePlayPause = () => {
    setSongs(prevSongs =>
      prevSongs.map(song =>
        song.title === title ? { ...song, isPlaying: !song.isPlaying } : song
      )
    );
  };
  
  return (
    <div className='song-main'>
      <ArrowBackIos className='back-btn' onClick={() => navigate(-1)}/>
      <div className="song-image-container">
        <img src={songData.imgSrc} className='song-image' alt={songData.title} />
      </div>
      <div className="song-title">{songData.title}</div>
      <AUDIOPLAYER
        src={songData.songSrc}
        title={songData.title}
        isPlaying={songData.isPlaying}
        onPlayPause={handlePlayPause}
      />
    </div>
  );
}

export default SONGPLAY;
