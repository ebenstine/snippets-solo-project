import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import AddRecording from '../../AddRecording/AddRecording';
import RecordingsList from '../../RecordingsList/RecordingsList';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    heading: {
        color: '#2a4f64',
        background: '#bdbdbd'
    }

})


const SongDetailsMenu = ({song}) => {
    const {heading} = useStyles
    const [open, setOpen] = useState(false);
   
  
    const handleClickOpen = () => {
      if (song === null){
        setOpen(false)
      } else
      setOpen(true);
    };
    const handleCancel = () => {
      setOpen(false);
    }

  
    return (
      <div>
        <IconButton>
        <MoreHorizIcon aria-controls="simple-menu" aria-haspopup="true"
                        fontSize={'inherit'} onClick={handleClickOpen}>
        </MoreHorizIcon>
        </IconButton>
        <MenuItem onClick={handleClickOpen}></MenuItem>
        <Dialog open={open} 
                onClose={handleCancel} 
                aria-labelledby="Rename song title input"
                
                >
          <DialogTitle className={heading}>Audio Recordings</DialogTitle>
          <DialogContent>
          <AddRecording/>
          <RecordingsList/>
          </DialogContent>
          <DialogActions>
            
          </DialogActions>
        </Dialog>
        
      </div>
    );
  }
  
  export default SongDetailsMenu;