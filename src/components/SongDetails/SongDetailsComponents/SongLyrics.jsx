import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Paper, TextField, MenuItem, Button, Typography, Select, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LibraryMusicSharp } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    textField: {
        margin: theme.spacing(1),
        width: '36ch',
        marginBottom: '1em',
    },
    subheading: {
        marginLeft: '.5em',
        marginBottom: '1.5em',
        marginTop: '.5em'
    },
    buttons:  {
        marginBottom: '2em',
        marginTop: '-1em',
        marginLeft: '7.5em'
    },
    words: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 9.5,
        borderBottom: '1.25px solid #6ca0ad',
        whiteSpace: 'pre-wrap'
    }
}));

function SongLyrics() {
    const songDetails = useSelector(store => store.songDetails);
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    const { textField, buttons, words } = useStyles();
    const [ editable, setEditable] = useState(true);
    console.log(params);
    let song = {
      lyrics: songDetails.lyrics,
  
    };
  
    const [reviseDetails, setReviseDetails] = useState(song);
  
  
    const handleChange = (event) => {
      setReviseDetails({ ...reviseDetails, [event.target.name]: event.target.value })
    };

    const handleEditable = () => {
        setEditable(editable => !editable)
    }
  
  
  
    const handleCancel = () => {
      history.push('/songDetails/:id');
    }
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      let revisedSong = reviseDetails;
      revisedSong = { ...revisedSong, id: params.id };
      console.log('new song revisions made in', revisedSong);
      dispatch({
        type: 'REVISE_SONG',
        payload: revisedSong
      });
      setEditable(editable => !editable);
    }
  
    return (
        <>
            {editable ?
                <FormControl  >
                    <form onSubmit={handleSubmit} autoComplete="off" >
                        <TextField 
                            label="Update Lyrics" 
                            name="lyrics" 
                           
                            onDoubleClick={handleEditable}
                            margin="dense" 
                            multiline className={textField} 
                            onChange={handleChange}
                            
                            />
                        <div className={buttons}> 
                        <Button onClick={handleCancel}> CANCEL </Button>
                        <Button variant="filled" type="submit"> SAVE </Button>
                        </div>
                    </form>
                </FormControl>
                :
                <div onDoubleClick={handleEditable}>
                    <Typography variant="h5" component="h5" className={words}>
                    {`${reviseDetails.lyrics}`}
                    </Typography>
                </div>
            }
            
        </>
   
    )
}



export default SongLyrics;