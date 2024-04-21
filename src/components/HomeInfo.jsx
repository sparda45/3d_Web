import React from 'react'
import {Link} from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox =({text, link, btnText}) =>(
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'> {text} </p>
        <Link to = {link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)


const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug neo-brutalism-blue py-4 px-8 text-white mx-5 '>   Hi, I'm
        <span className='font-semibold mx-2 text-white'>Reflyn or Dyaz</span>
        👋
        <br />
        A Software Engineer from Indonesia</h1>
    ),
    2: (
        <InfoBox
        text=" u can connect with me through this link on bellow"
        link="/about"
        btnText=" learn more "
        />
    ),
    3: (
        <InfoBox
        text="I made several projects during my year as a programmer and UI/UX designer. Curious about the impact? "
        link="/Projects"
        btnText=" Visit My Portofolio "
        />
    ),
    4: (
        <InfoBox
        text="Wanna make some project with me?. I'm just a few keystrokes away"
        link="/Contact"
        btnText=" Lets talk!! "
        />
    ),
}



const HomeInfo = ({currentStage}) => {
  return renderContent [currentStage] || null;
}

export default HomeInfo