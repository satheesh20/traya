import { Button, Grid, Typography } from "@mui/material";
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
function AddContent() {
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = useState(true);
    const [selectedContent, setSelectedContent] = useState('');
    const [selectedSegment, setSelectedSegment] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(!selectedValue);
      };
    return ( 
        <>
        <CreateHeader heading="Add Content" />
        <Grid container sm={12} item >
            <Grid item sm={12}>
                <Grid item sm={6}>
                    <TextFields placeHolder="Content Name"/>
                </Grid>
                <Grid item sm={6}>
                    <TextFieldwithDropDwon selected={selectedContent} setSelected={setSelectedContent} placeHolder="Content Type" items={['Video','Imgge', 'Article']}/>
                </Grid>
                {/* <Grid item sm={6}>
                    <TextFieldwithDropDwon selected={selectedSegment} setSelected={setSelectedSegment} placeHolder="Select Content" items={['content 1','content 2', 'content 3']}/>
                </Grid> */}
                <Grid item sm={6} container spacing={3}>
                    <Grid item sm={6}><Button fullWidth variant='outlined' >Cancel</Button></Grid>
                    <Grid item sm={6}><Button fullWidth variant='contained'sx={{background: '#C4DB62'}}>Save</Button></Grid>
                </Grid>
            </Grid>
        </Grid>
        </>
     );
}

export default AddContent;