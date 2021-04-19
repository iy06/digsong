import axiosBase from 'axios';
import { SongType } from '../interfaces/SongType';

type action = 'fetchSongs' | 'createSongs';
type parameter = { data: SongType };

const api = axiosBase.create({
  baseURL:      'http://localhost:3001/api',
  responseType: 'json',
});

export const songRequest: ( action: action, parameter?: parameter ) => any = async ( action: action, parameter?: parameter ) => {
  console.log(parameter);
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