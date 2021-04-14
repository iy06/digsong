import React from 'react';
import './style.scss';
import TimelineIcon from '@material-ui/icons/Timeline';
import BarChartIcon from '@material-ui/icons/BarChart';


export const Song = () => {
  return (
    <div className='song'>
      <div className='song__data'>
        <div className='key'>
          <TimelineIcon />
          <span>Cmaj</span>
        </div>
        <div className='bpm'>
          <BarChartIcon />
          <span>128</span>
        </div>
      </div>

      <img className='song__image' src='logo512.png' alt='アルバムの画像'/>
      <h3 className='song__title'>AllOrNothing</h3>
      <audio className='song__bar' controls controlsList='nodownload' preload='meatadata'>
        <source src='AllOrNothing.mp3'/>
      </audio>
    </div>
  );
};