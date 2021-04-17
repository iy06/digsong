import React, { useState } from 'react';
import Modal from 'react-modal';
// import { SongType } from '../../interfaces/SongType';
// import { songRequest } from '../../requests/songRequest';
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
            <input onChange={ addFileName } id='file-image' type='file'/>
            <p id='file-name' />
          </label>
          <label htmlFor="file-song">
            <MusicVideoIcon />
            <input onChange={ addFileName } id='file-song' type='file'/>
            <p id='file-name' />
          </label>
        </div>
        <div className='post-form__input-box'>
          <h4>Title</h4>
          <input className='input-title' type='text' placeholder='Sample Music'/>
          <h4>Key</h4>
          <input className='input-key' type='text' placeholder='Cmaj'/>
          <h4>Bpm</h4>
          <input className='input-bpm' type='text' placeholder='128bpm'/>
        </div>
        <input className='post-form__submit' type='button' value='▶'/>
      </form>
    </Modal>
  );
};