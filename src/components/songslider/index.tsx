import React, { useContext } from 'react';
import { DataContext } from '../../pages/home';
import { Song } from '../song';
import { SongType } from '../../interfaces/SongType';
import './style.scss';

interface Props {
  handleOpen: () => void;
  getSong: (id: number) => void;
};

export const SongSlider = (props: Props) => {
  const { data } = useContext( DataContext );

  return (
    <div className='song-slider'>
      {/* Songコンポーネント */}
      { data.songsData.map(( song: SongType ) => {
        return <Song song={ song } key={ song.id } handleOpen={ props.handleOpen } getSong={ props.getSong }/>
      })}
    </div>
  );
};