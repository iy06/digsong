import axiosBase from 'axios';

type action = 'fetchSongs' | 'createSongs';

const api = axiosBase.create({
  baseURL:      'http://localhost:3001/api',
  responseType: 'json',
});

export const songRequest: ( action: action ) => any = async ( action: action ) => {
  switch ( action ) {
    case 'fetchSongs':
      const fetchSongs = await api.get( '/songs' );
      return fetchSongs.data;
    case 'createSongs':
      const createSongs = await api.post( '/songs', 'createアクションへのリクエスト' );
      return createSongs.data;
    default:
      return null;
  }
};