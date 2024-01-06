import '../components/styles/LOGIN_PAGE.css';
import React, { useState } from 'react';
import { Person } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const LOGIN = () => {
    const [userName, setUserName] = useState('');

    const handleGetStarted = () => {
        // Store the user's name in local storage
        localStorage.setItem('userName', userName);
    
        // Perform any other logic you need before navigating
    };

    const handleInputChange = (event) => {
        const newUserName = event.target.value;
        setUserName(newUserName);
    };

    return (
        <div className="main-login">
            <div className="login-header">
                Black <br />
                Hole <br />
                <div className="white">Music</div>
            </div>
            <div className="others">
                <div className="usrName">
                    <Person className="person-icon" />
                    <input type="text" name="usrName" id="usrName" placeholder='Enter Your Name' onChange={handleInputChange}/>
                </div>
                {/* Handle logic before navigating */}
                <Link to={`/black_hole_react/home`} onClick={handleGetStarted}>
                    <div className="get-started">{userName ? 'Get Started' : 'Skip'}</div>
                </Link>
                <p className="disclaimer">
                    Disclaimer: We respect your privacy more than anything else. All of your data is stored locally on your device only.
                </p>
            </div>
        </div>
    );
}

export default LOGIN;
