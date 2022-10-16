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
        justifyContent: 'flex-end',
        // border: '1px solid #000',
        boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        borderRadius :'12px'
    }
}))
function ComponentManagment() {
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
        { field: 'id', headerName: 'Sl No', flex: 0.5 },
        { field: 'componentName', headerName: 'Component Name', flex: 1, renderCell: datagridCellExpand },
        { field: 'addSegment', headerName: 'Added Segment', flex: 1, renderCell: datagridCellExpand },
        { field: 'emailAddress', headerName: 'Email Address', flex: 1, renderCell: datagridCellExpand },
        {
          field: 'action', headerName: 'Action', flex: 1, resizable: true,align: 'left',headerAlign: 'right',
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
            <Header heading='Manage Components' />
            <Grid container item sm ={12} className={classes.main} p={3}>
                <Grid sm={2}>
                    <ButtonWithRoute text="+Add Component" route="manageComponents/addComponent" />
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

export default ComponentManagment;