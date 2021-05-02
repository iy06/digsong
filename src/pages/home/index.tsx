import React, { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { SongSlider } from "../../components/songslider";
import { songRequest } from "../../requests/songRequest"; // axiosのrequestファイル
import { Data, dataAction, useDataReducer } from "../../hooks/useDataReducer"; // reducerのファイル
import { FormModal } from "../../components/modal";
import { PostBtn } from "../../components/postBtn";
import { SongType } from "../../interfaces/SongType";

import "./style.scss";

// Reducerの戻り値の型
interface dataContextType {
  data: Data;
  dispatch: ({type, payload}: dataAction) => void;
};

export const DataContext = React.createContext<dataContextType>(
  {} as dataContextType
);

export const Home = () => {
  const [data, dispatch] = useDataReducer();
  // ModalのState
  const [isOpen, setIsOpen] = useState(false);
  // Modal開閉の関数
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  // 選択された曲のState
  const [selectSong, setSelectSong] = useState<SongType | undefined>();
  // 選択された曲を取得する関数
  const getSelectSong = (id: number) => {
    setSelectSong(
      data.songsData.find((song: SongType) => {
        return id === song.id;
      })
    );
    handleOpen();
  };
  // 選択された曲のStateをリセットする関数
  const resetSelectSong = () => {
    setSelectSong(undefined);
  };
  // 初回ロード時に実行するuseEffect
  useEffect(() => {
    const fetchData = async () => {
      const songs = await songRequest("fetchSongs");
      dispatch({
        type: "songsUpdate", payload: {songs: songs}
      });
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <DataContext.Provider value={{data, dispatch}}>
      <div className="wrapper">
        {/* Headerコンポーネント */}
        <Header />
        <div className="main">
          <SongSlider
            handleOpen={handleOpen}
            getSelectSong={getSelectSong}
          />
        </div>
        {/* FormModalコンポーネント */}
        <FormModal
          isOpen={isOpen}
          handleClose={handleClose}
          selectSong={selectSong}
        />
        {/* PostBtnコンポーネント */}
        <PostBtn
          resetSelectSong={resetSelectSong}
          handleOpen={handleOpen}
        />
        {/* Footerコンポーネント */}
        <Footer />
      </div>
    </DataContext.Provider>
  );
};