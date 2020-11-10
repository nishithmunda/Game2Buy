import React from 'react'
import Button from './Button'
import './HeroSection.css'
import {Link} from 'react-router-dom'
const HeroSection=()=>{
    return(
        <div className='hero-container'>
            <video src="/videos/game-1.mp4" autoPlay loop muted/>
            <h1>EXPLORE VIRTUAL WORLD</h1>
            <div className='hero-btns'>
                <Link className='getstartedlink'to='/signup'>
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    
                    GET STARTED
                    
                </Button>
                </Link>
                
                {/* <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    WATCH <i className='far fa-play-circle'/>
                </Button> */}

            </div>
        </div>
    )
}
export default HeroSection