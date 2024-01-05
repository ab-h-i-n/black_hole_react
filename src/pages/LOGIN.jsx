import '../components/styles/LOGIN_PAGE.css';
import React, { useState } from 'react';
import { Person } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const LOGIN = () => {
    const [userName, setUserName] = useState('');

    const handleGetStarted = () => {
        const newUserName = document.getElementById('usrName').value;
        
        // Set the user's name in the state
        setUserName(newUserName);
    
        // Store the user's name in local storage
        localStorage.setItem('userName', newUserName);
    
        // Perform any other logic you need before navigating
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
                    {/* Use the userName state to set the input's value */}
                    <input type="text" id="usrName" name="usrName" placeholder="Enter Your Name" value={userName} />
                </div>
                {/* Handle logic before navigating */}
                <Link to={`/black_hole_react/home`} onClick={handleGetStarted}>
                    <div className="get-started">Get Started</div>
                </Link>
                <p className="disclaimer">
                    Disclaimer: We respect your privacy more than anything else. All of your data is stored locally on your device only.
                </p>
            </div>
        </div>
    );
}

export default LOGIN;
