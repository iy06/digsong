import React, { useEffect, useState } from 'react';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { SongSlider } from '../../components/songslider';
import { songRequest } from '../../requests/songRequest'; // axiosのrequestファイル
import { Data, dataAction, useDataReducer } from '../../hooks/useDataReducer'; // reducerのファイル
import { FormModal } from '../../components/modal';
import { PostBtn } from '../../components/postBtn';

import './style.scss';

// useContextを使ってデータを渡す
// reducerの戻り値の方を定義
type dataContextType = {
  data: Data;
  dispatch: ( { type, payload }: dataAction ) => void;
};

export const DataContext = React.createContext<dataContextType> (
  {} as dataContextType
);

export const Home = () => {
  const [ data, dispatch ] = useDataReducer();
  // モーダルの状態管理
  const [ isOpen, setIsOpen ] = useState( false );
  const handleOpen = () => {
    setIsOpen( true );
  };
  const handleClose = () => {
    setIsOpen ( false );
  };
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
  //   console.log(data);
  // }, [ data ]);
  return (
    <DataContext.Provider value={{ data, dispatch }}>
      <div className='wrapper'>
        {/* Headerコンポーネント */}
        <Header />
        <div className='main'>
          <SongSlider />
        </div>
        {/* FormModalコンポーネント */}
        <FormModal
          isOpen={ isOpen }
          handleClose={ handleClose }
        />
        {/* PostBtnコンポーネント */}
        <PostBtn handleOpen={ handleOpen }/>
        {/* Footerコンポーネント */}
        <Footer />
      </div>
    </DataContext.Provider>
  );
};