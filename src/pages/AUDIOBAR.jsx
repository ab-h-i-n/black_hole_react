import React, { useState } from 'react';
import SONGS from '../components/Songs';
import '../components/styles/AUDIOBAR.css'
import { Link } from 'react-router-dom';
import { PlayCircle, PauseCircle } from '@mui/icons-material';

function AUDIOBAR() {
  const song = SONGS.find(SONG => SONG.isPlaying === true);
    const [isPlaying,setIsPlaying] = useState(false);
  const handlePlayPause = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      song.isPlaying = true;
    } else {
      setIsPlaying(false);
      song.isPlaying = false;
    }
  };

  return (
    <div>
        {isPlaying ? 
            <div className="audiobar-container">
            <Link to={`/${song.title}`} className="card-link">
            <div className="audio-details">
              <img src={song.imgSrc} className='audio-img'/>
            <div className="audio-title">
              {song ? song.title : "No Song Playing"}
            </div>
              </div>
            </Link>
            <div className="play-container">
                <div className={`toggle-play ${isPlaying ? 'pause' : 'play'}`} onClick={handlePlayPause} >
                  {isPlaying ? <PauseCircle className='icon' /> : <PlayCircle className='icon' />}
                </div>
              </div>
          </div>
          :
          <div></div>
        }
    </div>
  );
}

export default AUDIOBAR;
