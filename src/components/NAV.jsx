import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Home, TrendingUp, YouTube, LibraryMusic } from '@mui/icons-material';
import './styles/NAV.css';

class Nav extends Component {

  render() {

    const {indexNumber} = this.props;

    const labels = ['Home', 'Top Charts', 'YouTube', 'Library'];

    return (
      <nav>
        {labels.map((label, index) => (
          <Link key={index} to={`/black_hole_react/${label.toLowerCase().replace(/\s/g, '')}`}>
            <div className={`nav-items ${index === indexNumber ? 'active' : ''}`}>
              {React.createElement([Home, TrendingUp, YouTube, LibraryMusic][index])}
              <div className="nav-item-name">{label}</div>
            </div>
          </Link>
        ))}
      </nav>
    );
  }
}

export default Nav;


