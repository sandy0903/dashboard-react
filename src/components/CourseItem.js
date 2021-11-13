import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClipboardList, faQuestionCircle, faClock,faHourglassHalf} from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import {Link } from "react-router-dom";
import Page from "./Page2"
const CourseItem = ({countdown, isCountDown}) => {
    var {hours,minutes,seconds}=countdown;
   
    return (
        <div className="exam-item ">
            <div className={isCountDown ? `item-link active-time` : "item-link"}>
                {isCountDown ? 
                Object.keys(countdown).length!==0 ?
                    <>
                        <FontAwesomeIcon icon={faHourglassHalf}/>
                                        
                        <p className="countdown-title" id="show-countdown">Sẽ diễn ra trong:</p>
                        <p className="countdown-timer" id="countdown-timer">{hours}:{minutes}:{seconds}</p>
                    </> :
                    <>
                        <FontAwesomeIcon icon={faClipboardList}/>
                        <button className="btn primary-bg">
                        <Link to="/page2" component={Page}>Tham gia thi</Link>
                        </button>
                    </>
                    : " "
                    }
                
                             
            </div>
            <div className="item-info">
                <h4 className="title">
                Giáo trình xây dựng thương hiệu bản thân trong năm
                </h4>
                <div className="time flex jc-sb ai-center">
                    <p>Bắt đầu thi lúc <span className="dark-text">10h30</span></p>
                    <div className="vertical-line"></div>
                    <p className="dark-text">Ngày 21/12/2021</p>
                </div>
                <div className="line"></div>   
                <div className="questions flex jc-sb">
                    <p><FontAwesomeIcon icon={faQuestionCircle} />100 câu hỏi</p>
                    <p><FontAwesomeIcon icon={faClock}/>60 phút</p>
                </div>
            </div>
        </div>
    )
}

export default CourseItem
