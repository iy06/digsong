import React, { useContext } from 'react';
import './style.scss';
import TimelineIcon from '@material-ui/icons/Timeline';
import BarChartIcon from '@material-ui/icons/BarChart';
import CancelIcon from '@material-ui/icons/Cancel';
import { SongType } from '../../interfaces/SongType';
import { songRequest } from '../../requests/songRequest';
import { DataContext } from '../../pages/home';

interface Props {
  song: SongType;
  handleOpen: () => void;
  getSong: (id: number) => void;
};

export const Song = ( props: Props ) => {

  const { dispatch } = useContext( DataContext );

  const handleDeleteBtn = async () => {
    try {
      if ( props.song ) {
        let result = window.confirm(`${props.song.title}を削除しますか？`)
        if (result) {
          const songs: SongType[] = await songRequest( 'deleteSongs', {
            data: props.song,
          });
          dispatch({ type: 'songsUpdate', payload: { songs: songs } })
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='song'>
      { props.song !== undefined &&
        <div className='song__delete-btn' onClick={ handleDeleteBtn }>
          <CancelIcon />
          <span>Delete</span>
        </div>
      }
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
      <div className='song__image' onClick={ () => { props.getSong(props.song.id) } }>
        <img className='image' src={ props.song.image } alt='アルバムの画像'/>
        <div className='edit-text'>
          <p>Edit</p>
        </div>
      </div>
      <h3 className='song__title'>{ props.song.title }</h3>
      <audio className='song__bar' controls controlsList='nodownload' preload='metadata'>
        <source src={ props.song.song_data }/>
      </audio>
    </div>
  );
};
