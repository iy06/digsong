import axiosBase from 'axios';
import { SongType } from '../interfaces/SongType';

type action = 'fetchSongs' | 'createSongs';
type parameter = { data: SongType };

const api = axiosBase.create({
  baseURL:      'http://localhost:3001/api',
  responseType: 'json',
});

export const songRequest: ( action: action, parameter?: parameter ) => any = async ( action: action, parameter?: parameter ) => {
  if ( parameter ) {
    switch ( action ) {
      case 'createSongs':
        const createSongs = await api.post( '/songs', parameter.data );
        return createSongs.data;
      default:
        return null;
    };
  } else {
    switch ( action ) {
      case 'fetchSongs':
        const fetchSongs = await api.get( '/songs' );
        console.log(fetchSongs.data);
        return fetchSongs.data;
      default:
        return null;
    };
  }
};