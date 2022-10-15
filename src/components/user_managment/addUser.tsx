import { Button, FormControl, FormControlLabel, Grid, Radio, Typography } from "@mui/material";
import CreateHeader from "../common/createHeader";
import { makeStyles } from "@mui/styles";
import TextFields from "../common/textField";
import TextFieldwithDropDwon from "../common/textfieldDropdown";
import { useState } from "react";

const useStyles= makeStyles((theme)=>({
    rootHeader: {
        border: '1px solid #100F0F',
        borderRadius: '12px',
        boxSizing: 'border-box',
    },
    status: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: '25px',
        color: '#999999'
    },
}))
function AddUser() {
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = useState(true);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(!selectedValue);
      };
    return ( 
        <>
        <CreateHeader heading="Add User" />
        <Grid container sm={12} item >
            <Grid item sm={12}>
                <Grid item sm={6}>
                    <TextFields placeHolder="Email Address"/>
                </Grid>
                <Grid item sm={6}>
                    <TextFields placeHolder="Full Name"/>
                </Grid>
                <Grid item sm={6}>
                    <TextFields placeHolder="Mobile Number"/>
                </Grid>
                <Grid item sm={6}>
                    <TextFieldwithDropDwon placeHolder="Role" items={['Admin','Content Creator']}/>
                </Grid>
                <Grid item sm={6}>
                    <Typography className={classes.status}>Status</Typography>
                </Grid>
                <Grid item sm={6} container rowSpacing={3} mb={3}>
                    <Grid item sm={6}>
                    <FormControl>
                    <FormControlLabel
                        control={<Radio
                        checked={selectedValue}
                        value={selectedValue}
                        onChange={handleChange}
                        sx={{
                        color: '#C4DB62',
                        '&.Mui-checked': {
                            color: '#C4DB62',
                        },
                        }} />}
                        label="Active"
                        labelPlacement="end"
                    />
                    </FormControl>
                    </Grid>
                    <Grid item sm={6}>
                    <FormControl>
                    <FormControlLabel
                        value={selectedValue}
                        control={<Radio 
                        checked={!selectedValue}
                        onChange={handleChange}
                        sx={{
                        color: '#C4DB62',
                        '&.Mui-checked': {
                            color: '#C4DB62',
                        },
                        }} />}
                        label="Inactive"
                        labelPlacement="end"
                    />
                    </FormControl>
                    </Grid>
                </Grid>
                <Grid item sm={6} container spacing={3}>
                    <Grid item sm={6}><Button fullWidth variant='outlined' >Cancel</Button></Grid>
                    <Grid item sm={6}><Button fullWidth variant='contained'sx={{background: '#C4DB62'}}>Save</Button></Grid>
                </Grid>
            </Grid>
        </Grid>
        </>
     );
}

export default AddUser;