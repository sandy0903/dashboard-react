import React from 'react'
import "./Page2.css";
import Header from "./Header2";
import MainContent from "./MainContent2";
import {useState, useEffect} from "react";

const Page2 = ({countdown}) => {
    const [boxQuestion, showBoxQuestion]=useState(false)
    function addBoxQuestion(){
        
            showBoxQuestion(!boxQuestion)
        
    }
    const [popup, showPopup]=useState(false)
    function addPopup(){
        showPopup(!popup);
       playAudio()
        
    }
    const [right, showRight]=useState(0)
    function checkRight(element){
        if(element.target.classList.contains("right")){
            showRight(right+1);
            element.target.classList.add("active")
        }else{
            return 
        }
    }
    const [play,setPlay]=useState(false)
    function playAudio(){
        
        setPlay(!play);
       
    }
   
    return (
        <>
            <Header countdown={countdown} addPopup={addPopup} />
            <MainContent popup={popup} playAudio={play} addPopup={addPopup} boxQuestion={boxQuestion} addbox={addBoxQuestion} right={right} showRight={checkRight}/>
        </>
    )
}

export default Page2
