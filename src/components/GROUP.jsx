import React, { Component } from "react";
import CARD from "./CARD";
import './styles/GROUP.css';
import SONGS from "./Songs";

class GROUP extends Component {
  render() {

    const {heading} = this.props;

    return (
      <div className="main-content">
        <div className="group" id={heading}>
                <div className="group-heading">{heading}</div>
                <div className="musics">
                    {
                      SONGS.map((SONG)=>(

                        <CARD key={SONG.title} srcUrl={SONG.imgSrc} title={SONG.title} song={SONG.songSrc}/>
                        
                      ))
                    }
                </div>
      </div>
      </div>
    );
  }
}

export default GROUP;
