import React from 'react';
import Page2 from "./components/Page2";
import Page1 from "./components/Page1";
import {useState, useEffect} from "react"
import "./Base.css";
import {
    BrowserRouter ,
    Routes,
        Route
    } from "react-router-dom";
const App = () => {
    var distance;
    const calculateTimer=()=>{
        var currentTime=new Date().getTime();
        var futureTime=new Date("Nov 13 2021 09:46:00").getTime();
        distance=futureTime-currentTime;
        var timer={};
        if(distance > 0){
            timer = {
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((distance / 1000 / 60) % 60),
                seconds: Math.floor((distance / 1000) % 60)
            };
        }
        
        return timer;
    }
    
    useEffect(()=>{  
       
            const x=setInterval(()=>{
                setTimer(calculateTimer());
                
                clearInterval(x)
            },1000)
           return ()=>clearInterval(x)
        
    },[])
    
    
    const [timer, setTimer]=useState(calculateTimer());
    return (
        
        <>
                {/* <Header/>
                <MainContent countdown={timer}/> */}
                <div className="App-intro">
                    <Routes>
                        <Route path="/" element={<Page1 countdown={timer}/>} />
                        <Route path="/page2" element={<Page2 countdown={timer}/>} />
                         
                    </Routes>
                    
                </div>
            
        </>
    )
}

export default App
