import React from 'react'
import "./styling/MainPage.css"
import NavBar from "./NavBar";
import CartTab from './CartTab';
import CartManager from './CartManager';

const MainPage = () => {
    return (
        <div className='main-page'>
            <h1>Welcome to TCG-Exchange</h1>
            <video autoPlay loop muted className='background-video'>
                <source src='/src/videos/background.mp4' type='video/mp4' />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default MainPage