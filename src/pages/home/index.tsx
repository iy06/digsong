import React, { useEffect, useState } from 'react';
import './style.scss';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { SongSlider } from '../../components/songslider';
import { songRequest } from '../../requests/songRequest'; // axiosのrequestファイル

export const Home = () => {
  // 初回ロード時に実行するuseEffect
  useEffect (() => {
    const showSongs = async () => {
      const response = await songRequest( 'fetchSongs' );
      console.log(response);
    }
    showSongs();
  }, []);

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