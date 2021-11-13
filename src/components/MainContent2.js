import React, {useEffect,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFlag,faArrowRight, faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Link } from "react-router-dom";
import imgFail from "../img/result-fail.png";
import Page from "./Page1";
import Lottie from 'lottie-react';
import animate from "../lottie/lottie.json";
import audio from "../audio/success.wav";
const MainContent2 = ({addPopup,popup,addbox, boxQuestion, showRight,right, playAudio}) => {
    const [audioEl]=useState(new Audio(audio));
    useEffect(()=>{
        playAudio ? audioEl.play():audioEl.pause()
        
  },[playAudio])
  

    return (
        <section className="main-container">
            <div className={popup ? "popup-wrapper show " : "popup-wrapper"}>
                {right <2 ? 
                <div className={popup ? "popup show " : "popup"}>
                    <div className="popup-fail">
                        <p className="delete-popup delete-popup-btn" onClick={addPopup}>X</p>
                        <div className="popup-content">
                            <img src={imgFail} alt="result-exam"/>
                            <h1>Khoan đã! Có vẻ bạn còn câu hỏi chưa trả lời</h1>
                            <div className="btn-group flex ai-center jc-sb">
                                <button className="btn" id="final-submit" onClick={addPopup}>Nộp bài</button>
                                <button className="btn primary-bg delete-popup-btn" onClick={addPopup}>Làm tiếp</button>
                            </div>
                        </div>
                    </div>
                </div> 
                :
                
                <div className={popup ? "popup show " : "popup"}>
                    <div className="popup-success">
                        <p className="delete-popup delete-popup-btn" onClick={addPopup}>X</p>
                        <div className="popup-content">
                            
                            <div id="animationLogo">
                                <Lottie animationData={animate} />;
                            </div>
                           
                            <h1>Chúc mừng <br/>bạn đã hoàn thành bài thi</h1>
                            <p>Vui lòng chờ admin chấm câu tự luận nhé</p>
                            <div className="btn-group flex ai-center jc-sb">
                                <button className="btn delete-popup-btn" onClick={addPopup}>Về trang chủ</button>
                                <button className="btn primary-bg"><Link to="/page1" component={Page}>Về trang cá nhân</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
            <div className={boxQuestion ? "show-box" : ""}>

                <button className="quantity-ques " id="arrow-btn" onClick={addbox}><FontAwesomeIcon icon={faArrowRight}/></button>
                <div className="question-box">
                    <div className="header flex jc-sb ai-center">
                        <p className="title">Danh sách câu hỏi</p>
                        <p className="delete-icon" onClick={addbox}>X</p>
                    </div>
                    <div className="content">
                        <ul className="flex ai-center jc-sb">
                            <li >1</li>
                            <li className="active-question">2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                        </ul>

                        <ul className="flex ai-center jc-sb">
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li>10</li>
                                <li>11</li>
                                <li>12</li>
                        </ul>
                    </div>
                    <div className="line"></div>
                    <p className="flag"><FontAwesomeIcon icon={faFlag}/>Đặt cờ</p>
                </div>

                <div className="question-container">
                <div className="question-list">
                    <div className="question-item">
                        <p className="question-num"><span><FontAwesomeIcon icon={faCheck} /></span>Câu hỏi 1 (20 điểm):</p>
                        <h1>IFA có bao nhiêu chi nhánh trên toàn quốc</h1>
                        <button className="btn question-btn" onClick={(e)=>{showRight(e)}}>Có 4 chi nhánh</button>
                        <button className="btn question-btn" onClick={(e)=>{showRight(e)}}>Hover</button>
                        <button className="btn question-btn right " onClick={(e)=>{showRight(e)}} >Selected</button>
                        <button className="btn question-btn" onClick={(e)=>{showRight(e)}}>Có 7 chi nhánh</button>
                    </div>
                    <div className="question-item">
                        <p className="question-num"><span><FontAwesomeIcon icon={faCheck}/></span>Câu hỏi 1 (20 điểm):</p>
                        <h1>Khi giới thiệu bản thân cần chú ý những điểm nào?</h1>
                        <button className="btn question-btn" onClick={(e)=>{showRight(e)}}>Thông tin "basic"</button>
                        <button className="btn question-btn" onClick={(e)=>{showRight(e)}}>Trạng thái hover</button>
                        <button className="btn question-btn right" onClick={(e)=>{showRight(e)}}>Tất cả các phương án</button>
                        <button className="btn question-btn" onClick={(e)=>{showRight(e)}}>Nơi sống nơi làm việc</button>
                    </div>
                    <div className="question-item">
                        <p className="question-num"><span></span>Câu hỏi 2 (20 điểm): Chọn từ thích hợp điền vào chỗ trống</p>
                        <h1>Chọn từ thích hợp để nối</h1>
                        <div className="col-wrapper flex jc-sb">
                            <div className="question-col-1">
                                <button className="btn btn-col col-left">Source 1</button>
                                <button className="btn btn-col col-left">Source 2</button>
                                <button className="btn btn-col col-left">Source 3</button>
                                <button className="btn btn-col col-left">Source 4</button>
                            </div>
                           
                            <div className="question-col-2">
                                <button className="btn btn-col col-right">Target 1</button>
                                <button className="btn btn-col col-right">Target 2</button>
                                <button className="btn btn-col col-right">Target 3</button>
                                <button className="btn btn-col col-right">Target 4</button>
                            </div>

                        </div>
                    </div>
                    
                    <div className="question-item">
                        <p class="question-num">Câu hỏi 4 (50 điểm):</p>
                        <h1>Hãy trình bài các điểm yếu của bản thân, đưa ra lộ trình cải thiện dựa trên kiến thức đã học</h1>
                        <textarea id="default"></textarea>
                        
                    </div>
                </div>
            </div>
            </div>
    </section>
    )
}

export default MainContent2
