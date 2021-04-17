import React, { useContext } from 'react';
import { DataContext } from '../../pages/home';
import { Song } from '../song';
import { SongType } from '../../interfaces/SongType';
import './style.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SongSlider = () => {
  const { data } = useContext( DataContext );
  const settings = {
    dots:           true,
    infinite:       true,
    slidesToShow:   1,
    slidesToScroll: 1,
    speed:          500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:   1,
          slidesToScroll: 1,
          infinite:       true,
          dots:           true
        }
      },
    ]
  };

  return (
    <Slider { ...settings }>
      {/* Songコンポーネント */}
      { data.songsData.map(( song: SongType ) => {
        return <Song song={ song } key={ song.id }/>
      })}
    </Slider>
  );
};