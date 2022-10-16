import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import HomeIcon from '../../assests/home.png';
import ComponentIcon from '../../assests/componentManagmentIcon.png';
import UserIcon from '../../assests/userMangementIcon.png';
import SegementIcon from '../../assests/SegmentmanagmentIcon.png';
import { Image } from '@mui/icons-material';

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
                text: 'Home',
                img: HomeIcon,
            },
            {
                route: '/userManagement',
                text: 'Manage Users',
                img: UserIcon,
            },
            {
                route: '/manageSegments',
                text: 'Manage Segment',
                img: SegementIcon
            },{
                route: '/manageComponents',
                text: 'Manage Components',
                img: ComponentIcon
            }
]
export default function SideNav() {
    const classes = useStyles();
    const [active, setSetactive] = useState(2);
    const router = useRouter();
  return (
    <Box sx={{ display: 'flex'}}>
        <Box sx={{ overflow: 'auto' }}>
            <Grid display={'flex'}justifyContent={'center'} p={3}>
                <Typography className={classes.header}>Traya CMS</Typography>
            </Grid>
          <List>
            {navarItems.map(({text,route,img}, index) => (
              <ListItem key={text} disablePadding sx={{padding: '3px', borderRadius: '8px', background: router.pathname.includes(route) ? '#fff': '', marginBottom: '5px'}}>
                <Link href={route}><ListItemButton>
                     <img src={img.src} alt='nav icons' width={'26px'} style={{marginRight: '10px'}} />
                  <Typography className={classes.navitemsNot}>{text}</Typography>
                </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
    </Box>
  );
}
