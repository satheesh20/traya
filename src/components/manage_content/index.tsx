import { Box, Button, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ButtonWithRoute from "../common/buttonwithroute";
import Header from "../common/header";
import Modal from "../common/MuiModal";
import {
    Delete as DeleteIcon,
    Visibility as ViewIcon,
    Edit as EditIcon,
  } from '@mui/icons-material';
  import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Datagrids, { datagridCellExpand } from "../common/datagrids";
import { api } from "../apis/api";
import Delete from '../../assests/DeleteIcon.png';
import DeleteSuccessIcon from '../../assests/DeleteSuccessIcon.png';

const useStyles = makeStyles((theme)=>({
    main :{
        display: 'flex',
        justifyContent: 'flex-end',
        // border: '1px solid #000',
        boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        borderRadius :'12px'
    },
    modaltext: {
      fontFamily: 'Manrope',
      fontSize: '24px',
      fontWeight: '500',
    }
}))
function Manage_content() {
    const [gridRows, setGridRows]=useState<any[]>([]);
    const [isModalOpen, setIsModalOpen]=useState(false);
    const [isDeleteModal, setisDeleteModal] = useState(false);
    const [success, setSuccess]=useState(false);
    const [id,setId]=useState('');
    const classes = useStyles();
    const handleDeleteContent = (row: any) => {
        setisDeleteModal(true)
        setId(row.taskId);
      }

      const handleEditContent = (row: any) => {
        console.log('row', row);
      }
    const buttonData = [
        {
          title: 'Edit Content',
          action: handleEditContent,
          icon: <CreateOutlinedIcon sx={{color: '#F6A684'}} />
        },
        {
          title: 'Delete Content',
          action: handleDeleteContent,
          icon: <DeleteIcon sx={{color: '#F6A684'}} />
        }
      ];

      const gridColumns: GridColDef[] = [
        { field: 'id', headerName: 'Sl No', flex: 0.5, align:'center', headerAlign: 'center' },
        { field: 'contentName', headerName: 'Content Name', flex: 1,align:'center', headerAlign: 'center', renderCell: datagridCellExpand, },
        { field: 'contentType', headerName: 'Content Type', flex: 1,align:'center', headerAlign: 'center', renderCell: datagridCellExpand },
        { field: 'url', headerName: 'URL / Swirl ID', flex: 1, renderCell: datagridCellExpand,align:'center', headerAlign: 'center' },
        {
          field: 'action', headerName: 'Action', flex: 1, resizable: true,align: 'center',headerAlign: 'center',
          renderCell: (params: GridCellParams) => {
            const selectedRow = {
              id: params.row.id as number
            }
            
            const selectedRowDetails = gridRows.find((row: any, index: any) => {
              return (index === (selectedRow.id - 1))
            })

            const buttonSet = buttonData.map((button, index) => {
              return (
                <div style={{ display: "inline-block" }}>
                  <Tooltip key={index} title={button.title}  >
                    <IconButton
                      onClick={() => {
                        if (selectedRowDetails)
                          button.action(selectedRowDetails);
                      }}
                      size="small"
                      color="primary"
                    >
                      {button.icon}
                    </IconButton>
                  </Tooltip>
                </div>
              );
            })
    
            return <div>{buttonSet}</div>;
          }
        }
      ];

      const getAllContents=async () => {
        try{
          const res = await  api.contents.getContents();
          console.log(res);
          let rowData = res?.map((row:any, index:number) => {
            return({
              id: index+1,
              contentName: row.display_name,
              contentType: row.type,
              url: row.meta.ref,
              taskId: row.id,
            })
          });
          setGridRows(rowData);
        }catch(err){
          console.log(err)
        }
      }

      useEffect(()=>{
        getAllContents();
      },[])

      const onClose =() =>{
        setisDeleteModal(false)
      }

      const deleteContent =async () => {
         const res = await api.contents.deleteContent(id);
         console.log(res);
         if(res.status===200){
          setSuccess(true);
         }
      }
    return ( 
    <>
        <Grid container >
          <Modal isOpen={isDeleteModal} close={onClose}>
            {!success ? <Grid item sm={12} container justifyContent='center' display={'flex'}>
              <Grid item sm={12} justifyContent='center' display={'flex'} mb={'15px'}>
                <img src={Delete.src} alt='delete-icon' />
              </Grid>
              <Grid item sm={12} mb={3}>
                <Typography className={classes.modaltext}>Do you want to delete this added component?</Typography>
              </Grid>
              <Grid item sm={12} container spacing={3} >
              <Grid item sm={6}><Button fullWidth variant='outlined' onClick={onClose} >No</Button></Grid>
                    <Grid item sm={6}><Button fullWidth variant='contained'onClick={deleteContent}sx={{background: '#FF3141'}}>Yes</Button></Grid>
                </Grid>
            </Grid> :
            <Grid container item sm={12}>
              <Grid item sm={12} justifyContent='center' display={'flex'} mb={'15px'}>
                <img src={DeleteSuccessIcon.src} alt='deleted-icon' />
              </Grid>
              <Grid item sm={12} mb={3}>
                <Typography className={classes.modaltext}>Components has been deleted successfully</Typography>
              </Grid>
            </Grid>
            }
          </Modal>
            <Header heading='Manage Content' />
            <Grid container item sm ={12} className={classes.main} p={3}>
                <Grid sm={2}>
                    <ButtonWithRoute text="+Add Content" route="manageContent/addContent" />
                </Grid>
                <Grid sm={12} marginY="20px">
                <Datagrids
                        gridRows={gridRows}
                        gridColumns={gridColumns}
                        disableCheckbox
                />
                </Grid>
            </Grid>
        </Grid>
    </> 
  );
}

export default Manage_content;
