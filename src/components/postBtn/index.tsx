import React from 'react';
import './style.scss';
import AddIcon from '@material-ui/icons/Add';

interface Props {
  handleOpen: () => void;
};

export const PostBtn = ( props: Props ) => {
  return (
    <div className='post-btn'>
      <AddIcon onClick={ props.handleOpen } />
    </div>
  );
};