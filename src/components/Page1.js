import React from 'react'
import Header from "./Header.js";
import MainContent from "./MainContent.js";
const Page1 = ({countdown}) => {
    return (
        <>
           <Header/>
           <MainContent countdown={countdown}/> 
        </>
    )
}

export default Page1
