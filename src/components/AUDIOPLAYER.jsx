import React, { useState, useEffect } from 'react';
import './styles/AUDIOPLAYER.css';
import { PlayCircle, PauseCircle } from '@mui/icons-material';

const AUDIOPLAYER = ({ src, title, isPlaying, onPlayPause }) => {
  const [audio] = useState(new Audio(require(`${src}`)));
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const progressBar = document.querySelector(".progress");

    const updateProgressBar = () => {
      progressBar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("loadeddata", () => {
      setDuration(audio.duration);
    });

    audio.addEventListener("timeupdate", updateProgressBar);

    return () => {
      audio.removeEventListener("timeupdate", updateProgressBar);
    };
  }, [audio]);

  const handlePlayPause = () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }

    onPlayPause(); // Call the onPlayPause callback
  };

  const handleTimelineClick = (e) => {
    const timelineWidth = window.getComputedStyle(document.querySelector(".timeline")).width;
    const timeToSeek = (e.nativeEvent.offsetX / parseInt(timelineWidth)) * duration;
    audio.currentTime = timeToSeek;
  };

  const getTimeCodeFromNum = (num) => {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  };

  return (
    <div className="audio-container">
      <div className="audio-player">
        <div className="timeline" onClick={handleTimelineClick}>
          <div className="progress">
            <div className="progress-cirlce"></div>
          </div>
        </div>

        <div className="time">
          <div className="current">{getTimeCodeFromNum(currentTime)}</div>
          <div className="length">{getTimeCodeFromNum(duration)}</div>
        </div>

        <div className="play-container">
          <div className={`toggle-play ${isPlaying ? 'pause' : 'play'}`} onClick={handlePlayPause}>
            {isPlaying ? <PauseCircle className='icon' /> : <PlayCircle className='icon' />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AUDIOPLAYER;
