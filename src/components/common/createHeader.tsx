import { Grid, IconButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Arrow from '../../assests/ArrowLeft.png';

interface props {
    heading: string,
}
const useStyles= makeStyles((theme)=>({
    rootHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        border: '1px solid #100F0F',
        borderRadius: '12px',
        boxSizing: 'border-box',
        alignContent: 'center'
    },
    title:{
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: "24px",
        lineHeight: '26px',
        color: '#100F0F'
    },
    adminprofile: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))
function CreateHeader({heading}: props) {
    const classes = useStyles();
    return ( 
    <>
    <Grid sm={12} item className={classes.rootHeader} p={1} mb={3}>
            <IconButton sx={{marginRight: '10px'}}>
                <img src={Arrow.src} alt='Left Arrow'/>
            </IconButton>
        <Typography className={classes.title}>{heading}</Typography>
    </Grid>
    </> );
}

export default CreateHeader;