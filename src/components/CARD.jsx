// CARD.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import './styles/CARD.css';

class CARD extends Component {
  render() {
    const { srcUrl, title } = this.props;

    return (
      <div>
        <Link to={`/${title}`} className="card-link">
          <div className="card" id={title}>
            <div className="card-image">
              <img src={srcUrl} alt={title} />
            </div>
            <div className="card-title">{title}</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default CARD;
