import React, { useEffect, useState } from 'react';
import AudioPlayer from "react-modular-audio-player";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { Box, Paper, Typography, Card, CardContent } from '@material-ui/core';
import useStyles from './SongsListStyles';
import ColorCodeLegend from './ColorCodeLegend'
import Feedback from '@material-ui/icons/Feedback';

//import songDetails from '../../redux/reducers/songDetails.reducer';




function SongsList() {

    const { 
            
            title, 
            title1, 
            title2, 
            title3, 
            player, 
            card, 
            card1, 
            card2, 
            card3, 
            paper, 
            menuDots,
            blankPage,
            message,
            messageCard,
            messageDiv,
            feedback
            
        } = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const songs = useSelector((store) => store.songs);
    const songDetails = useSelector((store) => store.songDetails)

    const [listView, setListView] = useState(false);
    console.log(songs);


    
    
    /*const handleState = () => {
        setListView(listView = !listView)
    }*/
const handleState = () => {
    
    if (songs.length > 0) {
        setListView(listView => !listView)
    }
}   

//get db info on page load
useEffect(() => {
    dispatch({
        type: 'FETCH_SONGS'
    });
    handleState();
}, []);
//push forward to details page on click


    const handleClick = (songId) => {
        history.push(`/songDetails/${songId}`)
    }

    
    




    //conditionally render cards with different background colors according to priority
    return (
            <>

            {listView ?  
                                    
                                    <Paper className={paper} elevation={10}>
                                        
                                        <div className={menuDots}>

                                            <ColorCodeLegend/>

                                        </div>

                                        <Box 
                                            display="flex"
                                            flexWrap="wrap"
                                            justifyContent="space-between"
                                        >
                                        {/*if no distinction for what group to show is made, show all ternary statement would start here*/}
                                                {songs.map((song) => {
                                                    return (
                                                        <>
                                                        {song.is_active == true ?
                                                        <>
                                                    
                                                            {song.priority === '1' ? 
                                                                
                                                                <Box
                                                                    
                                                                    paddingTop={2}
                                                                
                                                                >
                                                                    <Card
                                                                        
                                                                        raised={true}
                                                                        className={card1}
                                                        
                                                                    > 
                                                                            <section>

                                                                                <CardContent 
                                                                
                                                                                    item xs={1} key={song} 
                                                                                    onClick={() => handleClick(song.song_id)} 
                                                            
                                                                                >  
                                                                
                                                                                    <Typography 
                                                                                        variant="overline" 
                                                                                        className={title1}>{song.title}
                                                                                    </Typography>
                                                                    
                                                                

                                                                                </CardContent>
                                                            
                                                                            </section>
                                                                                
                                                                                <section className={player}>
                                                                            
                                                                                    <AudioPlayer

                                                                                        audioFiles={[{ src: song.preview_audio }]}

                                                                                    />
                                                                                </section>

                                                                    </Card> 
                                                                </Box>
                                                            : 
                                                    
                                                            song.priority === '2' ?
                                                    
                                                                <Box
                                                                    
                                                                    paddingTop={2}
                                                    
                                                                >
                                                                    <Card
                                                        
                                                                        raised={true}
                                                                        className={card2}
                                                                    
                                                                    > 
                                                                        <section> 
                                                                
                                                                            <CardContent 
                                
                                                                                item xs={1} key={song} 
                                                                                onClick={() => handleClick(song.song_id)} 
                            
                                                                            >  
                                
                                                                                <div>
                                                                    
                                                                                    <Typography 
                                                                                            
                                                                                        variant="overline" 
                                                                                        className={title2}>{song.title}
                                                                                    
                                                                                    </Typography>
                                    
                                                                                </div>

                                                                            </CardContent>
                            
                                                                        </section>
                                                        
                                                                            <section className={player}>
                                                            
                                                                                <AudioPlayer

                                                                                    audioFiles={[{ src: song.preview_audio }]}

                                                                                />
                                                                            
                                                                            </section>

                                                                    </Card>
                                                    
                                                                </Box>
                                                    
                                                            : 

                                                            song.priority === '3' ?
                                                            
                                                                <Box
                                                                    
                                                                    paddingTop={2}
                                            
                                                                >
                                                                
                                                                    <Card
                                                
                                                                        raised={true}
                                                                        className={card3}
                                                            
                                                                    > 
                                                                        
                                                                        <section> 
                                                        
                                                                            <CardContent 

                                                                                item xs={1} key={song} 
                                                                                onClick={() => handleClick(song.song_id)} 

                                                                            >  

                                                                                <div>
                                                            
                                                                                    <Typography 
                                                                                    
                                                                                        variant="overline" 
                                                                                        className={title3}>{song.title}
                                                                            
                                                                                    </Typography>
                            
                                                                                </div>

                                                                            </CardContent>

                                                                        </section>
                                                
                                                                            <section className={player}>
                                                    
                                                                                <AudioPlayer

                                                                                    audioFiles={[{ src: song.preview_audio }]}

                                                                                />
                                                                    
                                                                        </section>

                                                                    </Card>
                                            
                                                                </Box>
                                                            : 

                                                            song.priority === 'Uncertain' ?
                                                    
                                                                <Box
                                                            
                                                                    paddingTop={2}
                                                                
                                                                >
                                                        
                                                                    <Card
                                                
                                                                        raised={true}
                                                                        className={card}
                                                                    
                                                                    > 
                                                                        
                                                                        <section> 
                                                                    
                                                                            <CardContent 
                        
                                                                                item xs={1} key={song} 
                                                                                onClick={() => handleClick(song.song_id)} 

                                                                            >  
                        
                                                                                <div>
                                                                        
                                                                                    <Typography 
                                                                                
                                                                                        variant="overline" 
                                                                                        className={title}>{song.title}
                                                                                
                                                                                    </Typography>
                            
                                                                                </div>

                                                                            </CardContent>

                                                                        </section>
                                                
                                                                            <section className={player}>
                                                    
                                                                                <AudioPlayer

                                                                                    audioFiles={[{ src: song.preview_audio }]}

                                                                                />
                                                                            </section>

                                                                    </Card>
                                                                </Box>

                                                            :

                                                            <>
                                                            {handleState}
                                                            </>

                                                            }
                                                    
                                                    <br></br>
                                                    <br></br>
                                                
                                                </>
                                            :
                                            <>
                                            {handleState}
                                            </>

                                            }  
                                            </> 
                                            );

                                        })}

                                </Box> 

                            </Paper>
                    :

                    <Paper className={blankPage}>
                    
                    <div>

                        <Card 
                            className={messageCard}
                            raised={true}
                        >
                        
                            <div>
                                
                                <Feedback className={feedback}/>
                                
                            </div>
                        
                                <div className={messageDiv}>
                                    
                                    <Typography
                        
                                        align="center"
                                        variant="h6"
                                        className={message}
                        
                                    >
                                    
                                        There are no active songs yet.  Navigate to 'Add New Song' in the top right menu to get started.

                                    </Typography>
                                
                                </div>
                        
                        </Card>

                    </div>

                </Paper>
                                    
            }


        </>

);

}

export default SongsList;