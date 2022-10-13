import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme)=>({
    header: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: "32px",
        lineHeight: '44px',
        color: '#100F0F'
    },
    navitemsActive: {
        color: '#333333',
        fontSize: "16px",
    },
    navitemsNot: {
        color: '#333333',
        fontSize: "16px",
    },
}))
const navarItems = [
            {
                route: '/home',
                text: 'Home'
            },
            {
                route: '/userManagment',
                text: 'Manage Users'
            },
            {
                route: '/manageSegments',
                text: 'Manage Segment'
            },{
                route: '/manageComponents',
                text: 'Manage Components'
            }
]
export default function SideNav() {
    const classes = useStyles();
    const active = 1;
  return (
    <Box sx={{ display: 'flex'}}>
        <Box sx={{ overflow: 'auto' }}>
            <Grid display={'flex'}justifyContent={'center'} p={3}>
                <Typography className={classes.header}>Traya CMS</Typography>
            </Grid>
          <List>
            {navarItems.map(({text,route}, index) => (
              <ListItem key={text} disablePadding sx={{padding: '3px', borderRadius: '8px', background: active === index ? '#fff': '', marginBottom: '5px'}}>
                <ListItemButton >
                    {index % 2 === 0 ? <InboxIcon sx={{marginRight: '10px'}} /> : <MailIcon sx={{marginRight: '10px'}} />}
                  <Typography className={classes.navitemsNot}>{text}</Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
    </Box>
  );
}
