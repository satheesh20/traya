import { Grid, Button } from "@mui/material";
import Link from "next/link";
interface props {
    text: string;
    route: string
}
function ButtonWithRoute({text, route}: props) {
    return (
    <>
    <Link href={route}>
        <Grid sm={12} >
            <Button fullWidth variant="contained" sx={{textTransform: 'none', fontSize: '16px', fontWeight: '500', textFamily: 'Manrope', background: '#C4DB62', borderRadius :'8px'}}>{text}</Button>
        </Grid>
    </Link>
    </> 
);
}
export default ButtonWithRoute;