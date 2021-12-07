import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            color: 'white'
            //width: '25ch'
        },
        '& label.Mui-focused': {
            color: '#2a4f64',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#3b95ac',
            
            
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#3b95ac',
                paddingLeft: '4em'
                
            },
            '&:hover fieldset': {
                borderColor: '#3b95ac',
                
            },
            '&.MuiSelect fieldset': {
                borderColor: '#3b95ac',
                borderRadius: '8px',
                paddingLeft: '3em'
            },
            

        },
    },
    inputs: {
        margin: theme.spacing(1),
        width: '12ch',
        marginBottom: '1.5em',
        marginTop: '4em',
        background: '#fff099',
        color: '#2a4f64',
        border: '1px solid #c8ecf5',
        '&:hover': {
            background:'#fde76c',
            },
    },
    priority: {
        
        //border: '1px solid #c8ecf5',
        borderBottom: '1 px solid #c8ecf5',
        alignItems: 'center',
        margin: '1ch',
        borderRadius: '2px',
        background: "#EBEBEB",
        color: '#2a4f64',
        
        
        },
    priority1: {
        
        //border: '1px solid #c8ecf5',
        borderBottom: '1 px solid #c8ecf5',
        alignItems: 'center',
        margin: '1ch',
        borderRadius: '2px',
        background: "#c8ecf5",
        color: '#2a4f64',
      
        
            
            
        },
    priority2: {
        
        //border: '1px solid #c8ecf5',
        //borderBottom: '1px solid #c8ecf5',
        alignItems: 'center',
        margin: '1ch',
        borderRadius: '2px',
        background: "rgb(250, 250, 175)",
        color: '#2a4f64',
       
            
                
        },

    priority3: {
        
        //border: '1px solid #c8ecf5',
        borderBottom: '1 px solid #c8ecf5',
        alignItems: 'center',
        margin: '1ch',
        borderRadius: '2px',
        background: "#fdd377",
        color: '#2a4f64',
                    
                    
        },
    
        
        
        
        

    
    titleField: {
        margin: theme.spacing(1),
        width: '16em',
        marginBottom: '1em',
        marginTop: '1.5em',
    },
    paper: {
        margin: '4em auto',
        backgroundColor: '#bdbdbd',
        paddingBottom: '4em',
        width: 650,
        border: '1px solid #fdd377'

    },
    textField: {
        margin: theme.spacing(1),
        width: '40ch',
        marginBottom: '1em',
        marginTop: '1em'
    },
    cardContent: {
        display: 'flex',
        flexDirection : 'column', 
        alignItems: "center", 
        marginLeft: '9em',
        paddingTop: '3em'
    },  
    title: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        color: '#2a4f64'
    },
    wrapper: {
        display: 'flex',
        
    },
    buttons: {
        display: 'flex',
        alignItems: 'center'

    },
  setPriority: {
        paddingLeft: '1em',
        //background: "#fff099",
        color: "#2a4f64",
        //border: "1px solid #3b95ac",
        
    }
}));

export default useStyles;