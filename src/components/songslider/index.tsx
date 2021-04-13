import React from 'react';
import { Song } from '../song';
import './style.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SongSlider = () => {
  const settings = {
    dots:           true,
    infinite:       true,
    slidesToShow:   3,
    slidesToScroll: 1,
    speed:          500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  };

  return (
    <Slider { ...settings }>
      {/* Songコンポーネント */}
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
    </Slider>
  );
};