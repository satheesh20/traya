import { Button, Grid, Typography } from "@mui/material";
import CreateHeader from "../common/createHeader";
import { makeStyles } from "@mui/styles";
import TextFields from "../common/textField";
import TextFieldwithDropDwon from "../common/textfieldDropdown";
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";

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

function EditContent() {
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = useState(true);
    const [selectedContent, setSelectedContent] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [type, setType]= useState('');
    const [ref, setRef] = useState('');
    const router = useRouter();
    const { contentId } = router.query;
    
    useEffect(() => {
      
    }, [])
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(!selectedValue);
      };

    return ( 
        <>
        <CreateHeader heading="Add Content" />
        <Grid container sm={12} item >
            <Grid item sm={12}>
                <Grid item sm={6}>
                    <TextFields placeHolder="Content Name" value={displayName} setValue={setDisplayName} />
                </Grid>
                <Grid item sm={6}>
                    <TextFieldwithDropDwon selected={type} setSelected={setType} placeHolder="Content Type" items={['Video','Imgge', 'Article']}/>
                </Grid>
                { type && <Grid item sm={6}>
                    <TextFields placeHolder={type==='Video' ? 'Swirl Video ID' : type === 'Image' ? 'Image URL' : 'Article URL' }
                        value={ref} setValue={setRef}
                        />
                    </Grid>
                }
                <Grid item sm={6} container spacing={3}>
                    <Grid item sm={6}><Button fullWidth variant='outlined' >Cancel</Button></Grid>
                    <Grid item sm={6}><Button fullWidth variant='contained'sx={{background: '#C4DB62','&:hover': {background: '#C4DB62'}}}>Save</Button></Grid>
                </Grid>
            </Grid>
        </Grid>
        </>
     );
}

export default EditContent;