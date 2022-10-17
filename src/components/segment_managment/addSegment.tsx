import { FormControl, FormControlLabel, Grid, IconButton, Radio, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import CreateHeader from "../common/createHeader";
import TextFields from "../common/textField";
import TextFieldwithDropDwon from "../common/textfieldDropdown";
import ClearIcon from '@mui/icons-material/Clear';

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
function AddSegment() {
    const [selectedValue, setSelectedValue] = useState(true);
    const[condition, setCondition]=useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(!selectedValue);
      };
    const classes=useStyles();
    return ( 
    <>
        <CreateHeader heading="Add Segment" />
        <Grid container>
            <Grid item sm={12} p={3} pb={0} sx={{boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', borderRadius: '8px', marginBottom: '20px'}} >
                <Grid item sm={6}>
                    <TextFields placeHolder="Segment Name" />
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
            </Grid>
            <Grid item container spacing={1} sm={12} p={3} pb={0} sx={{boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', borderRadius: '8px'}} >
                <Grid item sm={4}>
                    <TextFieldwithDropDwon placeHolder="" selected={condition} setSelected={setCondition}  items={['Gender', 'Age', 'Form Status','Order Count','Order Created']} />
                </Grid>
                <Grid item sm={2}>
                    <TextFieldwithDropDwon placeHolder="" selected={condition} setSelected={setCondition}  items={['Gender', 'Age', 'Form Status','Order Count','Order Created']} />
                </Grid>
                <Grid item sm={3}>
                    <TextFields placeHolder="Segment Name" />
                </Grid>
                <IconButton>
                    <ClearIcon  fontSize="large"/>
                </IconButton>
            </Grid>
        </Grid>
    </> 
);
}

export default AddSegment;