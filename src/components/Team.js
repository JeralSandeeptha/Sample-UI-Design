import React from 'react'
import '../styles/Team/team.css';
import fb from '../images/facebook.png';
import tw from '../images/twitter.png';
import insta from '../images/instagram.png';

function Team() {
  return (
    <div className='team'>
      <div className='team-inner'>
        <div className='up'>
            <div className='box1'></div>
            <div className='box2'></div>
            <div className='box3'></div>
            <div className='box4'></div>
            <div className='box5'></div>
        </div>
        <div className='down'>
            <div className='up-inner'>
                <a href=""><img src={fb} alt="logo" /></a>
                <a href=""><img src={tw} alt="logo" /></a>
                <a href=""><img src={insta} alt="logo" /></a>
            </div>
            <h2>OUR PERFECT TEAM</h2>
            <h5>Sample text. Click to select the text box. Click again or double click to start editing the text.</h5>
        </div>
      </div>
    </div>
  )
}

export default Team
