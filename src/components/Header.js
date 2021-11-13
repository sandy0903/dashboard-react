import React from 'react';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart, faBell, faChevronDown} from "@fortawesome/free-solid-svg-icons";
import logo from "../img/logo.png";
import userImg from "../img/user.png";
const Header = () => {
    return (
      <nav className="navbar" >
          <div className="nav-container flex">
              <div className="nav-logo">
                <img src={logo} alt="webiste-logo" className="logo-img" />
              </div>
              <div className="nav-item flex fl-1 ai-center">
                  <div className="nav-item-links">

                      <ul className="flex ai-center ">
                          <li>
                              <a href="./">Trang chủ</a>
                          </li>
                          <li>
                              <a href="./">Khóa học</a>
                          </li>
                          <li>
                              <a href="./">Tìm chuyên gia</a>
                          </li>
                          <li>
                              <a href="./">Ưu đãi</a>
                          </li>
                          <li>
                              <a href="./">Tin tức - Sự kiện</a>
                          </li>
                      </ul>
                  </div>
                  <div className="nav-item-user ">
                      <ul className="flex ai-center jc-center">
                          <li className="user-cart flex jc-center ai-center">
                          <FontAwesomeIcon icon={faShoppingCart} className="user-icon" /><span>2</span>
                          </li>
                          <li className="user-info flex ai-center">
                              <img src={userImg} alt="user-img" className="user-img"/><span>lanlai1212</span>
                          </li>
                          <li className="user-noti flex jc-center ai-center">
                              <FontAwesomeIcon icon={faBell} className="user-icon" />
                          </li>
                          <li className="user-narrow flex jc-center ai-center">
                              <FontAwesomeIcon icon={faChevronDown} className="user-icon" />
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </nav>
    )
  }
  
  


export default Header
