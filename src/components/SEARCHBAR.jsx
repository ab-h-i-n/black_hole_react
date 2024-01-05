import React,{Component} from "react";
import {Search} from '@mui/icons-material';
import './styles/SEARCHBAR.css'
class SEARCHBAR extends Component{

    render(){

        return(
            <div className="search-bar-container">
            <div className="search-bar">
                <Search className="search"/>
                <input type="text" name="seach" id="seach" 
                className="input" placeholder=" Songs, albums or artists"/>
                </div>
            </div>
        );
    }
}

export default SEARCHBAR;