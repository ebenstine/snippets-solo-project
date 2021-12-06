import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    root: {
        '& .MuiTextField-root': {
            marginLeft: '4em',
            
        },
        '& label.Mui-focused': {
            color: '#2a4f64',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#3b95ac',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#2a4f64',
                
            },
            '&:hover fieldset': {
                borderColor: '#2a4f64',
                
            },
            '&.MuiSelect fieldset': {
                borderColor: '#2a4f64',
                borderRadius: '8px'
            },
            

        },
    },

    
    dialog: {
       background: "#fff099",
       alignItems: "center",
       
    },

    dialogTitle: {
        background: "#fff099",
        color: "#2a4f64",
        paddingLeft: "6em",
        
    },

    actionDiv: {
        background: "#fff099",
        paddingRight: "6.5em",
        paddingTop: "1em",
        
        
    },

    descriptionText: {
        margin: theme.spacing(1),
        //width: '40ch',
        marginBottom: '1em',
        marginTop: '1em'

    },

    dialogButtons: {
        background: "#EBEBEB",
        color: "#2a4f64",
        border: "1px solid #3b95ac",
        marginBottom: "2em",
        marginTop: "1em"
    },

    upload: {
        paddingLeft: '1em',
        background: '#fff099',
        '&:hover': {
          background:'#fde76c',
          },
        border: "1px solid #3b95ac",
        borderRadius: "3px"
    }

}));

export default useStyles 