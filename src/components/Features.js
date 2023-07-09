import React from 'react'
import '../styles/Features/features.css';
import planning from '../images/analysis.png'; 
import managing from '../images/team-management.png'; 
import marketing from '../images/megaphone.png';

function Features() {
  return (
    <div className='features'>
      <div className='features-inner'>
        <div className='left'>

        </div>
        <div className='right'>
            <div className='box'>
                <img src={planning} alt="" />
                <h2>PLANNING</h2>
                <h5>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</h5>
            </div>
            <div className='box'>
                <img src={managing} alt="" />
                <h2>MANAGING</h2>
                <h5>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</h5>
            </div>
            <div className='box'>
                <img src={marketing} alt="" />
                <h2>MARKETING</h2>
                <h5>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</h5>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Features
