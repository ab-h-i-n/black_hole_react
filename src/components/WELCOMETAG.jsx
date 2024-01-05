import React,{Component} from "react";
import './styles/WELCOMETAG.css'

class WELCOMETAG extends Component{

    render(){
        const {usrName} = this.props;
        return(
            <div>
                <div className="welcome-tag">
                    <div className="hi">Hi There,</div>
                    <div className="user-name">{usrName}</div>
                </div>
            </div>
        );
    }
}

export default WELCOMETAG;