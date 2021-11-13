import React from 'react';
import "./Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCamera} from "@fortawesome/free-solid-svg-icons";
import userImg from "../img/user.png";
const Sidebar=()=>{
    return (
        <aside className="left-navbar">
            <div className="user-info">
                <img src={userImg} alt="user-img" /><span><FontAwesomeIcon icon={faCamera} className="user-icon"/></span>
                <h3 className="user-name">Tuyết Lan</h3>
                <p className="title">Học viên</p>
                <p className="private-info">Thông tin cá nhân</p>
            </div>
            <div className="user-list">
                <button className="btn" id="dashboard">
                    Dashboard
                </button>
                <button className="btn" id="timeline">
                    Timeline
                </button>
                <button className="btn" id="courses">
                    Khóa học của tôi
                </button>
                <button className="btn" id="offline-schedual">
                    Lịch học offline
                </button>
                <button className="btn" id="set-schedual">
                    Đặt lịch học
                </button>
                <button className="btn" id="contribute-course">
                    Khóa học đóng góp
                </button>
                <button className="btn active" id="exam-schedual">
                    Kì thi của tôi
                </button>
                <button className="btn" id="certificate">
                    Chứng chỉ của tôi
                </button>
                <button className="btn">
                    One by one live
                </button>
                <button className="btn" id="history">
                    Lịch sử giao dịch
                </button>
                <button className="btn" id="friend-list">
                    Danh sách bạn bè
                </button>
                <button className="btn">
                Báo cáo thành tích
            </button>
        </div>
    </aside>
    )
}
export default Sidebar;