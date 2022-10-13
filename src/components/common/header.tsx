import { Grid, IconButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface props {
    heading: string,
}
const useStyles= makeStyles((theme)=>({
    rootHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #100F0F',
        borderRadius: '12px',
        boxSizing: 'border-box'
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
function Header({heading}: props) {
    const classes = useStyles();
    return ( 
    <>
    <Grid sm={12} item className={classes.rootHeader} p={1} mb={3}>
        <Typography className={classes.title}>{heading}</Typography>
        <Grid className={classes.adminprofile}>
            <IconButton>
                <AccountCircleIcon fontSize='large' />
            </IconButton>
                <Typography>Admin</Typography>
        </Grid>
    </Grid>
    </> );
}

export default Header;