import React from 'react'
import logo from "../img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHourglassHalf,faTrophy} from "@fortawesome/free-solid-svg-icons";
import "./Page2.css";
const Header2 = ({countdown,addPopup}) => {
    var {hours,minutes,seconds}=countdown;
    
    const liStyle={
        margin:" 0 25px 0 12.27px",
    }
    return (
        <nav >
            <div className="nav-container flex ai-center">
                <div className="nav-logo nav-logo-about">
                    <img src={logo} alt="webiste-logo" className="logo-img" />
                </div>
                <div className="vertical-line"></div>
                <div className="fl-1 ai-center">
                
                    <ul className="flex ai-center jc-sb ">
                        
                        <li className="title">
                        Thi kiểm tra chất lượng đầu vào 2021...
                        </li>
                        <div className="flex ai-center">
                            <li>
                                <FontAwesomeIcon icon={faHourglassHalf} className="hour-icon"/>
                            </li>
                            <li id="countdown-timer">
                                {Object.keys(countdown).length!==0 ? `${hours}:${minutes}:${seconds}` : ""}
                            </li>
                            <div className="vertical-line"></div>
                            <li className="trophy flex jc-center ai-center">
                                <FontAwesomeIcon icon={faTrophy}/>
                            </li>
                            <li style={liStyle}>
                                20/40
                            </li>
                            <li>
                            <button className="btn bg-btn " id="submit-exam" onClick={addPopup}>Nộp bài</button>
                        </li>
                        </div>                      
                    </ul>       
                </div>
            </div>
        </nav>
    )
}

export default Header2
