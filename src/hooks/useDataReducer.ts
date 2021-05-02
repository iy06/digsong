import { useReducer } from "react";
import { SongType } from "../interfaces/SongType";

// actionの型
export interface dataAction {
  type: "songsUpdate";
  payload: { songs?: SongType[] };
};
// stateの型
export interface Data {
  songsData: SongType[];
};
// タプル型でDataと無名関数を引数に取る useDataReducerの型
export const useDataReducer = (): [Data, ({ type, payload }: dataAction) => void] => {
  // 初期データ
  const initialData = {
    songsData: [
      {
        id: 0,
        title: "Sample Music",
        key: "Cmaj",
        bpm: "120",
        song_data: "sample.mp3",
        image: "digsong.png",
      },
    ],
  };
  // dispatchが呼ばれた時のreducer
  const reducer = (state: Data, action: dataAction) => {
    switch (action.type) {
      case "songsUpdate":
        return { ...state, songsData: action.payload.songs || state.songsData };
    }
  };
  const [data, dispatch] = useReducer(reducer, initialData);
  // ここで戻り値を指定
  return [data, dispatch];
};
