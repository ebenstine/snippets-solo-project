import React, {useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { Paper, Button, Typography, Card } from '@material-ui/core'
import useStyles from '../UserPage/UserPageStyles'
import ExitToApp from '@material-ui/icons/ExitToApp';

const UserPage = () => {
  
  const user = useSelector((store) => store.user);
  const songs = useSelector((store) => store.songs);
  const allRecordings = useSelector((store) => store.allRecordings)
  
  const { paper, 
          welcome, 
          songCount, 
          recordingCount, 
          button2, 
          genrePrompt, 
          playIcon, 
          highlight,
          infoCard
        
        } = useStyles();


  const dispatch = useDispatch();

 
  useEffect(() => {
    dispatch({ type: 'FETCH_SONGS' })
    dispatch({ type: 'FETCH_ALL_RECORDINGS '})
}, [dispatch]);

  return (
    <>
    
    <Paper className={paper} elevation={10}>
      
      <div className="container">

        <Typography 
          
          align="center" 
          variant = "h4" 
          className = {welcome} 
        >
          Hi, {user.username}!
        </Typography>

        <br></br>
        <Card className={infoCard}>
        <Typography 
        
          align="center" 
          variant = "h6" 
          className = {songCount}>
          
            <span className={playIcon}>▶</span>
             &nbsp;You have <span className={highlight}>{songs.length}</span> different song projects open right now.
      
        </Typography>
      
        <br></br>
      
        <Typography 
          
          align="center" 
          variant = "h6" 
          className = {recordingCount}>
          
            <span className={playIcon}>▶</span>
            &nbsp;Between them, you've uploaded <span className={highlight}>{allRecordings.length}</span> total recordings. 
      
        </Typography>
      
        <br></br>
      
        <Typography 
        
          align="center" 
          variant = "h6" 
          className = {genrePrompt}>
          
            <span className={playIcon}>▶</span>
            &nbsp;Currently, you're working in <span className={highlight}>1</span> genre/style across these projects. 
      
        </Typography>

        <br></br>

      </Card>
      </div>
      
        <section textAlign="center">
    
    
      
          <Button 

            variant="contained" 
            size="small" 
            className={button2} 
            onClick={() => dispatch({ type: 'LOGOUT' })}>Sign Out&nbsp;
            <ExitToApp/>

          </Button>

        </section>

      </Paper>
    
    </>
  );
}

export default UserPage;
