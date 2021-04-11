import React from 'react';
import './style.scss';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { SongSlider } from '../../components/songslider';

export const Home = () => {
  return (
    <div className='wrapper'>
      {/* Headerコンポーネント */}
      <Header />
      <div className='main'>
        <SongSlider />
      </div>
      {/* Footerコンポーネント */}
      <Footer />
    </div>
  )
};