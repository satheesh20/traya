import { Grid, IconButton, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ButtonWithRoute from "../common/buttonwithroute";
import Header from "../common/header";
import SearchField from "../common/sesrchfield";
import {
    Delete as DeleteIcon,
    Visibility as ViewIcon,
    Edit as EditIcon,
  } from '@mui/icons-material';
import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import Datagrids, { datagridCellExpand } from "../common/datagrids";
const useStyles = makeStyles((theme)=>({
    main :{
        display: 'flex',
        justifyContent: 'space-between',
        // border: '1px solid #000', 
        borderRadius :'12px',
        boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
    }
}))
function USerManagment() {
    const [gridRows, setGridRows]=useState([]);
    const classes = useStyles();
    const handleViewFees = (row: any) => {
        console.log('row', row);
      }
      const handleEditFees = (row: any) => {
        console.log('row', row);
      }
    const buttonData = [
        {
          title: 'Edit Fees',
          action: handleEditFees,
          icon: <EditIcon />
        },
        {
          title: 'View Fees',
          action: handleViewFees,
          icon: <ViewIcon />
        }
      ];
      const gridColumns: GridColDef[] = [
        { field: 'userID', headerName: 'User ID', flex: 0.5 },
        { field: 'name', headerName: 'Name', flex: 1, renderCell: datagridCellExpand },
        { field: 'mobileNumber', headerName: 'Mobile Number', flex: 1, renderCell: datagridCellExpand },
        { field: 'emailAddress', headerName: 'Email Address', flex: 1, renderCell: datagridCellExpand },
        { field: 'role', headerName: 'Role', flex: 1, renderCell: datagridCellExpand },
        { field: 'createdOn', headerName: 'Created On', flex: 1, renderCell: datagridCellExpand },
        { field: 'status', headerName: 'Status', flex: 1, renderCell: datagridCellExpand },
        {
          field: 'action', headerName: 'Action', flex: 1, resizable: true,
          renderCell: (params: GridCellParams) => {
            const selectedRow = {
              id: params.row as number,
            }
            const selectedRowDetails = gridRows.find((row: any, index: any) => {
              return (index === (selectedRow.id - 1))
            })
            const buttonSet = buttonData.map((button, index) => {
              return (
                <div style={{ display: "inline-block" }}>
                  <Tooltip key={index} title={button.title}  >
                    <IconButton
                      // className={classes.button}
                      onClick={() => {
                        if (selectedRowDetails)
                          // console.log('Button Pressed')
                          button.action(selectedRowDetails);
                      }}
                      // variant="outlined"
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
    return ( <>
        <Grid container >
            <Header heading='User Managment' />
            <Grid container item sm ={12} className={classes.main} p={3}>
                <Grid sm={4} item>
                    <SearchField />
                </Grid>
                <Grid sm={2}>
                    <ButtonWithRoute text="+Add User" route="userManagement/addUser" />
                </Grid>
                <Grid sm={12} marginY="20px">
                <Datagrids
                        searchBool={true}
                        gridRows={gridRows}
                        gridColumns={gridColumns}
                        disableCheckbox
                />
                </Grid>
            </Grid>
        </Grid>
    </> );
}

export default USerManagment;