import React, { useState } from "react";
import { Home, FolderSpecial, FileDownloadDone, PlaylistAdd, Settings, Info, Menu } from '@mui/icons-material';
import './styles/MENU.css';

const MENU = () => {
  const options = ['Home', 'My Music', 'Downloads', 'Playlists', 'Settings', 'About'];
  const [isMenuActive, setMenuActive] = useState(false);

  const handleMenuButtonClick = () => {
    setMenuActive(!isMenuActive);
  }

  const handleBackDropClick = () => {
    setMenuActive(false);
  }

  return (
    <div className={`menu ${isMenuActive ? 'active' : ''}`}>
      <Menu className='menu-btn' onClick={handleMenuButtonClick} />
      <div className="menu-screen">
        <div className="menu-backdrop" onClick={handleBackDropClick}></div>
        <div className="menu-main">
          <div className="blackhole-logo">BlackHole</div>
          <div className="options">
            {options.map((label, index) => (
              <div key={index} className={`option ${index === 0 ? 'active' : ''}`}>
                {React.createElement([Home, FolderSpecial, FileDownloadDone, PlaylistAdd, Settings, Info][index])}
                <div className="name">{label}</div>
              </div>
            ))}
          </div>
          <div className="creator-name">Made with ❤️ by Abhin</div>
        </div>
      </div>
    </div>
  );
}

export default MENU;
