import React, { useEffect } from 'react';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { SongSlider } from '../../components/songslider';
import { songRequest } from '../../requests/songRequest'; // axiosのrequestファイル
import { useDataReducer } from '../../hooks/useDataReducer'; // reducerのファイル
import './style.scss';

export const Home = () => {
  const [ data, dispatch ] = useDataReducer();
  // 初回ロード時に実行するuseEffect
  useEffect (() => {
    const fetchData = async () => {
      const songs = await songRequest( 'fetchSongs' );
      dispatch({ type: 'songsUpdate', payload: { songs: songs } });
    };
    fetchData();
    // 警告をなくす
    // eslint-disable-next-line
  }, []);
  // dataが変わった時のuseEffect
  // useEffect(() => {
  //   console.log( data, 'useEffect!' );
  // }, [ data ]);

  return (
    <div className='wrapper'>
      {/* Headerコンポーネント */}
      <Header />
      <div className='main'>
        <SongSlider songs={ data.songsData }/>
      </div>
      {/* Footerコンポーネント */}
      <Footer />
    </div>
  )
};