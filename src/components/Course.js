import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, faQuestionCircle, faClock,faCalendarCheck} from "@fortawesome/free-solid-svg-icons";
import React from 'react';

import "./Course.css";
import CourseItem from "./CourseItem";
const Course = ({countdown}) => {
   
    return (
        <div className="right-content">
                <h1>Kỳ thi của tôi</h1>
                <div className="exam-schedual">
                    <div className="search-exam">
                        <span><FontAwesomeIcon icon={faSearch} className="search-icon" /></span>
                        <input type="text" placeholder="Tìm tên kỳ thi"/>
                    </div>
                    <div className="line"></div>
                    <div className="exam-list">
                        <div className="row flex">
                            <CourseItem countdown={countdown} isCountDown={true}/>
                            <CourseItem countdown={countdown} isCountDown={true}/>
                            <CourseItem countdown={countdown} isCountDown={false}/>
                            
                        </div>
                        <div className="row flex">
                            <div className="exam-item">
                                <div className="item-link active-time">
                                    <FontAwesomeIcon icon={faCalendarCheck}/>
                                    <p className="title-result" >Đã kết thúc vào:</p>
                                    <p className="countdown-result" id="countdownTimer-result">15h 30p 20s</p>
                                    <p className="countdown-result" id="countdownDay-result">27.12.2020</p>
                                    
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
                            <CourseItem countdown={countdown} isCountDown={false}/>
                            <CourseItem countdown={countdown} isCountDown={false}/>
                        </div>
                    </div>
                    <h2>Kết quả thi</h2>
                    <div className="primary-line"></div>                  
                    <table>
                        <tr>
                            <th className="col-1">Thời gian</th>
                            <th className="col-2">Tên kì thi</th>
                            <th className="col-3">Số điểm</th>
                            <th className="col-4">Thời gian hoàn thành</th>
                            <th className="col-5">Kết quả</th>
                        </tr>
                        <tr>
                            <td className="dark-text col-1">04.05.2021</td>
                            <td className="col-2">Thi sát hạch chuyên môn khóa 1</td>
                            <td className="col-3">90</td>
                            <td className="col-4">45/60p</td>
                            <td className="col-5"></td>
                        </tr>
                        <tr>
                            <td className="dark-text col-1">04.05.2021</td>
                            <td className="col-2">Thi lên chức</td>
                            <td className="col-3">90</td>
                            <td className="col-4"></td>
                            <td className="col-5"></td>
                            
                        </tr> 
                        <tr>
                            <td className="dark-text col-1">04.05.2021</td>
                            <td className="col-2">Thi lên chức</td>
                            <td className="col-3">0</td>
                            <td className="col-4"></td>
                            <td className="col-5"></td>
                        </tr>
                    </table>
    
                </div>
                
        </div>
    )
}

export default Course
