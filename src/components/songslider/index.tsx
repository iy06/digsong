import React, { useContext } from 'react';
import { DataContext } from '../../pages/home';
import { Song } from '../song';
import { SongType } from '../../interfaces/SongType';
import './style.scss';

export const SongSlider = () => {
  const { data } = useContext( DataContext );

  return (
    <div className='song-slider'>
      {/* Songコンポーネント */}
      { data.songsData.map(( song: SongType ) => {
        return <Song song={ song } key={ song.id }/>
      })}
    </div>
  );
};