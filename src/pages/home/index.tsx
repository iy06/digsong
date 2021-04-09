import React from 'react';
import './style.scss';
import { Header } from '../../components/header';
import { Song } from '../../components/song';
import { Footer } from '../../components/footer';


export const Home = () => {
  return (
    <div className='wrapper'>
      {/* Headerコンポーネント */}
      <Header />
      <div className='main'>
        {/* Songコンポーネント */}
        <Song />
      </div>
      {/* Footerコンポーネント */}
      <Footer />
    </div>
  )
};