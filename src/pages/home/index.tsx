import React from 'react';
import './index.scss';

export const Home = () => {
  return (
    <div className='wrapper'>
      {/* ヘッダーコンポーネント */}
      <header className='header'>DigSong</header>
      <div className='main'>
        {/* ソングコンポーネント */}
        <div className='song'>
          <div className='song__data'>
            <p className='key'>#Cmaj</p>
            <p className='bpm'>128</p>
          </div>
          <img className='song__image' src='logo512.png'/>
          <h3 className='song__title'>AllOrNothing</h3>
          <audio className='song__bar' controls controlsList='nodownload' preload='meatadata'>
            <source src='AllOrNothing.mp3'/>
          </audio>
        </div>
      </div>
      {/* フッターコンポーネント */}
      <footer>Footer</footer>
    </div>
  )
};