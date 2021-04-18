import React, { useContext, useState } from 'react';
import { DataContext } from '../../pages/home';
import { SongType } from '../../interfaces/SongType';
import { songRequest } from '../../requests/songRequest';
import Modal from 'react-modal';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import './style.scss';
interface Props {
  isOpen:      boolean;
  handleClose: () => void;
};
// モーダルのstyle
const customStyles = {
  overlay: {
    backgroundColor: 'rgb(80, 80, 80, 0.8)',
  },
  content: {
    height:       '70%',
    width:        '70%',
    margin:       'auto',
    background:   '#cccccce0',
    borderRadius: '0px',
  },
};
// ファイルが選択されたときにfilenameを表示する
const addFileName = ( event: any ) => {
  let fileNameEle = event.target.nextElementSibling;
  if ( event.target.files.length !== 0 ) {
    fileNameEle.innerHTML = event.target.files[0].name
  } else {
    fileNameEle.innerHTML = ''
  };
};

export const FormModal = ( props: Props ) => {
  Modal.setAppElement( '#root' );
  const { dispatch } = useContext( DataContext );
  const [ title, setTitle ] = useState<string>( '' );
  const [ key, setKey ] = useState<string>( '' );
  const [ bpm, setBpm ] = useState<string>( '' );
  const [ image, setImage ] = useState<any>( '' );
  const [ song_data, setSongData ] = useState<any>( '' );

  const handleChangeTitle = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    setTitle( event.target.value );
  };
  const handleChangeKey = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    setKey( event.target.value );
  };
  const handleChangeBpm = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    setBpm( event.target.value );
  };
  const handleChangeImage = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    console.log(event.target.value);
    // if ( event.target && event.target.files) {
      setImage( event.target.value );
    // }
  };
  const handleChangeSongData = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    // if ( event.target && event.target.files) {
      setSongData( event.target.value );
    // }
  };
  const onClickSubmit = async () => {
    const newData = {
      id:        0,
      title:     title,
      key:       key,
      bpm:       bpm,
      image:     image,
      song_data: song_data,
    };

    try {
      const songs: SongType[] = await songRequest( 'createSongs', { data: newData } );
      dispatch( { type: 'songsUpdate', payload: { songs: songs } } )
    } catch ( error ) {
      console.log( error.message );
    };
    props.handleClose();
  };

  return (
    <Modal
      isOpen={ props.isOpen }
      onRequestClose={ props.handleClose }
      style={ customStyles }
    >
      <form className='post-form'>
        <h3 className='post-form__title'>Let's Post Song</h3>
        <div className='post-form__file-box'>
          <label htmlFor="file-image">
            <CropOriginalIcon />
            <input onChange={ (event) => { addFileName(event); handleChangeImage(event); } } value={ image } name='image' id='file-image' type='file'/>
            <p id='file-name' />
          </label>
          <label htmlFor="file-song">
            <MusicVideoIcon />
            <input onChange={ (event) => { addFileName(event); handleChangeSongData(event); } } value={ song_data } name='song_data' id='file-song' type='file'/>
            <p id='file-name' />
          </label>
        </div>
        <div className='post-form__input-box'>
          <h4>Title</h4>
          <input onChange={ handleChangeTitle } value={ title } name={ title } className='input-title' type='text' placeholder='Sample Music'/>
          <h4>Key</h4>
          <input onChange={ handleChangeKey } value={ key } name={ key } className='input-key' type='text' placeholder='Cmaj'/>
          <h4>Bpm</h4>
          <input onChange={ handleChangeBpm } value={ bpm } name={ bpm } className='input-bpm' type='text' placeholder='128bpm'/>
        </div>
        <input onClick={ onClickSubmit } className='post-form__submit' type='button' value='▶'/>
      </form>
    </Modal>
  );
};