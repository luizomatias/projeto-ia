import React from 'react';
import Tilt from 'react-tilt';
import robot from './robot.png';
import './Logo.css';
const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 190, width: 190}} >
      <div className="Tilt-inner pa3"><img style={{paddingTop: '30px'}} alt='logo' src={robot}/></div>
      </Tilt>
    </div>
  );
}

export default Logo;