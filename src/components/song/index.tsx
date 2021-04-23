import React from 'react';
import './style.scss';
import TimelineIcon from '@material-ui/icons/Timeline';
import BarChartIcon from '@material-ui/icons/BarChart';
import { SongType } from '../../interfaces/SongType';

interface Props {
  song: SongType;
};

export const Song = ( props: Props ) => {
  return (
    <div className='song'>
      <div className='song__data'>
        <div className='key'>
          <TimelineIcon />
          <span>{ props.song.key }</span>
        </div>
        <div className='bpm'>
          <BarChartIcon />
          <span>{ props.song.bpm }</span>
        </div>
      </div>
      <img className='song__image' src={ props.song.image } alt='アルバムの画像'/>
      <h3 className='song__title'>{ props.song.title }</h3>
      <audio className='song__bar' controls controlsList='nodownload' preload='metadata'>
        <source src={ props.song.song_data }/>
      </audio>
    </div>
  );
};
