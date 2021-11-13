import React from 'react';
import Sidebar from "./Sidebar";
import Course from "./Course"
import "./MainContent.css";


const MainContent=({countdown})=>{
    
    return(
        <div className="main-container flex">
            <Sidebar/>
            <Course countdown={countdown}/>
        </div>
    )
}

export default MainContent