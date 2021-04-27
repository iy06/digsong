import axiosBase from 'axios';
import { SongType } from '../interfaces/SongType';

type action = 'fetchSongs' | 'createSongs' | 'deleteSongs';
type parameter = { data: SongType };

const API_URL = process.env.REACT_APP_DIGSONG_API_URL

const api = axiosBase.create({
  baseURL:      `${ API_URL }/api`,
  responseType: 'json',
});

export const songRequest: ( action: action, parameter?: parameter ) => any = async ( action: action, parameter?: parameter ) => {
  if ( parameter ) {
    switch ( action ) {
      case 'createSongs':
        const params = new FormData();
        params.append( 'title', parameter.data.title );
        params.append( 'key', parameter.data.key );
        params.append( 'bpm', parameter.data.bpm );
        params.append( 'image', parameter.data.image );
        params.append( 'song_data', parameter.data.song_data );
        const createSongs = await api.post( '/songs',
          params, {
            headers: {
              'content-type': 'multipart/form-data',
            },
          } );
        return createSongs.data;
      case 'deleteSongs':
        const deleteSongs = await api.delete( `/songs/${ parameter.data.id }` )
        return deleteSongs.data;
      default:
        return null;
    };
  } else {
    switch ( action ) {
      case 'fetchSongs':
        const fetchSongs = await api.get( '/songs' );
        return fetchSongs.data;
      default:
        return null;
    };
  }
};