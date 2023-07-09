import React from 'react';
import '../styles/UnderFeatures/underFeatures.css';
import idea from '../images/idea.png';
import handshake from '../images/handshake.png';
import darts from '../images/darts.png';

function UnderFeatures() {
  return (
    <div className='underFeatures'>
      <div className='underFeatures-inner'>
            <div className='wrapper'>
                <div className='box'>
                    <img src={idea} alt="logo" />
                    <h2>UNIQUE IDEAS & SOLUTIONS</h2>
                    <h5>Experience in all the major geographies, meaning we understand all underlying drivers</h5>
                </div>
                <div className='box'>
                    <img src={darts} alt="logo" />
                    <h2>TARGETING & POSITIONING</h2>
                    <h5>Generate new products with higher potential and lower risks of failure.</h5>
                </div>
                <div className='box'>
                    <img src={handshake} alt="logo" />
                    <h2>FRIENDLY CUSTOMER SERVICE</h2>
                    <h5>We build services for you from initial sketches to the final production.</h5>
                </div>
            </div>
      </div>
    </div>
  )
}

export default UnderFeatures
