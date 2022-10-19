import { Box, Grid } from "@mui/material";
import SideNav from "./sideNav";
type props = {
    children: React.ReactNode;
}
function Layout({children}:props) {
    return (
    <>
        <Box sx={{MaxWidth:'100vh', overflow: 'hidden'}}>
            <Grid container item >
                <Grid sm={1.8} item minHeight={'100vh'}  sx={{background: '#C4DB62'}} >
                    <SideNav />
                </Grid>
                <Grid sm={10.2} p={2}>
                    {children}
                </Grid>
            </Grid>
        </Box>
    </>
);
}

export default Layout;