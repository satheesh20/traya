import { Grid, IconButton, InputBase, Menu, MenuItem, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400
    },
    input: {
      marginLeft: 'spacing(1)',
      flex: 1,
      background: '#E8E8E8',
      borderRadius: '8px',
      justifyContent: 'center',
      justifyItems:'center',
      '& input': {
        marginLeft: '15px',
        color: '#999999',
      }
    },
    iconButton: {
      padding: 10
    },
    divider: {
      height: 28,
      margin: 4
    },
    searchborder: {
        boxSizing: 'border-box',
        border: '1px solid #100F0F',
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        justifyItems: 'center',
        paddingLeft: '10px'
    }
  }));

  interface props {
    placeHolder: string
    items:string[]
  }
function TextFieldwithDropDwon({placeHolder,items}: props) {
    const [value, setvalue] = useState('');
    const classes = useStyles();
    return ( 
        <Grid sm={12}  item mb={2}>
                <TextField
                className={classes.input}
                onChange={((e)=>setvalue(e.target.value))}
                placeholder={placeHolder}   
                inputProps={{ "aria-label": `${placeHolder}`, color: '#fff'}}
                value={value}
                fullWidth 
                label={ placeHolder}
                select
            > <Grid sm={12} bgcolor='#fff'>
                {items.map((text:any)=>
                    <MenuItem value={text} sx={{padding: '3px','&:hover': {background: '#C4DB62'}, borderRadius: '8px', margin: '5px'}} divider>{text}</MenuItem>
                )}
                </Grid>
            </TextField>    
        </Grid>
     );
}

export default TextFieldwithDropDwon;