import { Grid, IconButton, InputBase, Menu, MenuItem, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import ClearIcon from '@mui/icons-material/Clear';
import { SetStateAction, useState } from "react";
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
    },
    selected: {
      '&.Mui-selected':{
        background: '#C4DB62'
      }
    }
  }));

  interface props {
    placeHolder: string
    items:string[],
    selected: string,
    setSelected: (val: string) => void,
  }
function TextFieldwithDropDwon({placeHolder,items,selected,setSelected}: props) {
    const classes = useStyles();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
      setSelected(event.target.value);
    };
  
    return ( 
        <Grid sm={12}  item mb={2}>
                <TextField
                className={classes.input}
                onChange={handleChange}
                placeholder={placeHolder}
                inputProps={{ "aria-label": `${placeHolder}`, color: '#fff'}}
                value={selected}
                fullWidth 
                label={ placeHolder}
                select
            > 
                {items.map((text:string)=>
                    <MenuItem value={text} key={text} sx={{padding: '3px','&:hover': {background: '#C4DB62'}, borderRadius: '8px', margin: '5px'}}  divider className={classes.selected}>{text}</MenuItem>
                )}
            </TextField>    
        </Grid>
     );
}

export default TextFieldwithDropDwon;