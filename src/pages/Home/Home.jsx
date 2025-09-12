import React from 'react'
import Profileimg from '../../assets/images/profileimg.png'
import { MdOutgoingMail } from "react-icons/md";
import { RxDownload } from "react-icons/rx";
import './Home.scss'


const Home = () => {
return (
            
     <div className='home-container'>
         <div className='profile-img'>
            <img src={Profileimg} alt="Alisson Teles Fraga smiling facing forward in
             a well-lit indoor setting with a neutral background"/>
        </div>
        <div className='intro-text'>
            <h1>ALISSON TELES FRAGA</h1>
            <h2>Software Engineer</h2>
                <div className='buttons'>
                    <a href="" className='home-btn'><RxDownload /> Download Resume</a>
                    <a href=""className='home-btn'><MdOutgoingMail /> Contact me</a>
                </div>
            </div>
        </div>
            
)
}

export default Home
