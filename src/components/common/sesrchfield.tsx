import { Grid, IconButton, InputBase, TextField } from "@mui/material";
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
      flex: 1
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
function SearchField() {
    const [value, setvalue] = useState('');
    const classes = useStyles();
    return ( 
        // <TextField fullWidth  sx={{
        //     "& fieldset": { border: 'none' },
        //   }} />
        <Grid sm={12}  item className={classes.searchborder} >
                <InputBase
                className={classes.input}
                onChange={((e)=>setvalue(e.target.value))}
                placeholder="Search"
                inputProps={{ "aria-label": "Search" }}
                value={value}
                fullWidth
            />
            <Grid sm={2} item>
                <IconButton
                    type="submit"
                    className={classes.iconButton}
                    aria-label="search"
                    onClick={(()=>{setvalue('')})}
            >
                {value === ''? <SearchIcon /> : <ClearIcon />}
                </IconButton>
            </Grid>
        </Grid>
     );
}

export default SearchField;