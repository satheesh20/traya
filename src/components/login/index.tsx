import { Grid, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import GoogleIcon from '../../assests/GoogleIcon.png';

const useStyles = makeStyles((theme)=>({
    heading: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: "80px",
        lineHeight: '110%',
        color: '#C4DB62',
    },
    root : {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'space-around',
    },
    root2 : {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'

    },
    title: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: "40px",
        lineHeight: '110%',
    }
}))
function LoginPage() {
    const classes = useStyles();
    return (
        <>
        <Grid container spacing={20} mt={0}>
            <Grid sm ={12} item className={classes.root}>
                <Typography className={classes.heading}>Traya-CMS</Typography>
            </Grid>
            <Grid item sm={12} className={classes.root2}>
                <Typography className={classes.title} mb={2}>
                    Login
                </Typography>
                <Grid display='flex' border='1px solid #222227' borderRadius={'4px'} width='70%' justifyContent={'center'} alignItems={'center'}>
                    <IconButton>
                        <img src={GoogleIcon.src} alt='google Icon' />
                    </IconButton>
                    <Typography>Login With Google</Typography>
                </Grid>
            </Grid>
        </Grid>
        </>
     );
}

export default LoginPage;