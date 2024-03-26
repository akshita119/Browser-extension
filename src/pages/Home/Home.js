import React from 'react'
import "./Home.css"
export const Home = () => {
    return (
        <div className='home-container'>
            <h1 className='main-heading'>Browser Extension</h1>
            <div className='user-details'>
                <span className='heading-1'>Hello,  what's your name</span>
            </div>
            <form>
                <input className="input"/>
            </form>
        </div>
    )
}

