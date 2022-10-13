import * as React from 'react';
import { FunctionComponent } from 'react'
import { DataGrid, GridColDef, } from '@mui/x-data-grid';

import { Box, IconButton, Paper, Popper, TextField, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { GridCellParams } from "@mui/x-data-grid";
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

interface CellExpandProps {
  value: string;
  width: number;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      border: 0,
      alignItems: "center",
      lineHeight: "24px",
      width: "100%",
      height: "100%",
      position: "relative",
      display: "flex",
      "& .cellValue": {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    },
    root1: {
      padding: 'spacing(0.5, 0.5, 0)',
      justifyContent: 'space-between',
      display: 'flex',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
    },
    divRoot: {
      border: 0,
      "& .MuiDataGrid-colCellTitle": {
        color: '#000'
      },
      "& .MuiDataGrid-columnHeaderTitle": {
        color: '#999999'
      },
      "& .MuiDataGrid-window": {
        overflowX: 'hidden',
      }
    },
    myWrap: {
      wordWrap: 'break-word'
    },
    zIn: {
      zIndex: 1
    }
  })
);

const CellExpand = React.memo(function CellExpand(props: CellExpandProps) {
  const { width, value } = props;
  const wrapper = React.useRef<HTMLDivElement | null>(null);
  const cellDiv = React.useRef(null);
  const cellValue = React.useRef(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const classes = useStyles();
  const [showFullCell, setShowFullCell] = React.useState(false);
  const [showPopper, setShowPopper] = React.useState(false);
  
  function isOverflown(element: any) {
    return (
      element.scrollHeight > element.clientHeight ||
      element.scrollWidth > element.clientWidth
    );
  }

  const handleMouseEnter = () => {
    const isCurrentlyOverflown = isOverflown(cellValue.current!);
    setShowPopper(isCurrentlyOverflown);
    setAnchorEl(cellDiv.current);
    setShowFullCell(true);
  };

  const handleMouseLeave = () => {
    setShowFullCell(false);
  };

  React.useEffect(() => {
    if (!showFullCell) {
      return undefined;
    }

    function handleKeyDown(nativeEvent: KeyboardEvent) {
      if (nativeEvent.key === "Escape" || nativeEvent.key === "Esc") {
        setShowFullCell(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setShowFullCell, showFullCell]);

  return (
    <div
      ref={wrapper}
      className={classes.root}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cellDiv}
        style={{
          height: 1,
          width,
          display: "block",
          position: "absolute",
          top: 0
        }}
      />
      <div ref={cellValue} className="cellValue">
        {value}
      </div>
      {showPopper && (
        <Popper
          open={showFullCell && anchorEl != null}
          anchorEl={anchorEl}
          style={{ width, marginLeft: -17 }}
          className={classes.zIn}
        >
          <Paper
            elevation={1}
            style={{ minHeight: wrapper.current!.offsetHeight - 3 }}
          >
            <Typography variant="body2" style={{ padding: 8 }} className={classes.myWrap}>
              {value}
            </Typography>
          </Paper>
        </Popper>
      )}
    </div>
  );
});

function escapeRegExp(value: string): string {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

interface QuickSearchToolbarProps {
  clearSearch: () => void;
  onChange: () => void;
  value: string;
  autoFocus: boolean;
}

export function datagridCellExpand(params: GridCellParams) {
  return (
    <CellExpand
      value={params.value ? params.value.toString() : ""}
      width={params.colDef.width || 50}
    />
  );
}

interface SpecialCSV {
  filename: string,
  gridRows: any[];
}

interface Props {
  gridColumns: GridColDef[];
  gridRows: any[];
  setSelection?: (selected: any) => void;
  disableCheckbox?: boolean;
  selectionModel? : any,
  searchBool? : boolean,
  specialcsv?: SpecialCSV
}

const Datagrids: FunctionComponent<Props> = ({gridColumns, gridRows, setSelection, disableCheckbox,selectionModel, searchBool, specialcsv}) => {
  const classes = useStyles();
  const checkboxSelection = disableCheckbox ? disableCheckbox : false;
  const [page, setPage] = React.useState(0);
  const [searchText, setSearchText] = React.useState('');
  const [Focus, setFocus]= React.useState(false)
  let [rows,setRows] = React.useState<any[]>(gridRows)
  const requestSearch = (searchValue: string) => {
    setFocus(true);
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = gridRows.filter((row: any) => {
      return Object.keys(row).some((field: any) => {

        return row[field] ? searchRegex.test(row[field].toString()) : false;
      }); 
    });
    if(page!=0){
      setPage(0)
    }
    
    setRows(filteredRows);
  };

  React.useEffect(() => {
    // if(page!=0){
    //   setPage(0)
    // }
    if(searchBool){
      setRows(gridRows);
    }
    
  }, [gridRows]);


  React.useEffect(()=>{
    if(searchText.length>0){
      requestSearch(searchText)
    }
    
  },[selectionModel])

//   function CustomToolbar() {
//     return (
//     //   <GridToolbarContainer>
//     //     <GridColumnsToolbarButton />
//     //     <GridFilterToolbarButton />
//     //     <GridDensitySelector />
//     //     {specialcsv ? 
//     //       <CsvDownload data={specialcsv.gridRows} filename={specialcsv.filename}
//     //         className='rootCon'
//     //         style={{
//     //           border: 'none',
//     //           background: 'transparent',
//     //           cursor: 'pointer'
//     //         }}
//     //       >
//     //         <Box display="flex" flexDirection="row">
//     //           <Box>
//     //             <Typography style={{fontWeight: 500, fontSize: '14px', marginTop: '2px'}}>EXPORT</Typography>
//     //           </Box>
//     //         </Box>
//     //       </CsvDownload>: 
//     //       <GridToolbarExport />}
//     //   </GridToolbarContainer>
//     );
//   }

  function QuickSearchToolbar(props: QuickSearchToolbarProps) {
    const classes = useStyles();
    return (
      <div className={classes.root1}>
        {/* <div>
          <CustomToolbar />
        </div> */}
        <TextField
          variant="standard"
          value={props.value}
          onChange={props.onChange}
          autoFocus= {Focus}
          placeholder="Search…"         
          InputProps={{
            startAdornment: <SearchIcon fontSize="small" />,
            endAdornment: (
              <IconButton
                title="Clear"
                aria-label="Clear"
                size="small"
                style={{ visibility: props.value ? 'visible' : 'hidden' }}
                onClick={props.clearSearch}
              >
                <ClearIcon fontSize="small" />
              </IconButton>
            ),
          }}
        />
      </div>
    );
  }

  return (
    <div style={{ height: 450, width: '100%' }}>
      <DataGrid rows={searchBool ? rows : gridRows} columns={gridColumns} pageSize={10} 
        page={page} onPageChange={(params) => {
          setPage(params.page);
        }} 
        pagination
        onPageSizeChange={(params) => {
          if(params.page >= params.pageCount) {
            setPage(params.pageCount - 1)
          }
        }}
        // state={{
        //   keyboard: {
        //     cell: null,
        //     columnHeader: null,
        //     isMultipleKeyPressed: false,
        //   }
        // }}
        // components={{
        //   Toolbar: searchBool ? QuickSearchToolbar : CustomToolbar,
        // }}
        selectionModel ={selectionModel?  selectionModel : undefined}
        rowsPerPageOptions={[10, 20, 30, 40]} density="comfortable"
        onSelectionModelChange={setSelection ? (selectionMod: any ) =>{
          
          setSelection(selectionMod)
          
        } : () => {}} 
        checkboxSelection={!checkboxSelection}
        className={classes.divRoot}
        disableSelectionOnClick={checkboxSelection}
        componentsProps={searchBool ? {
          toolbar: {
            value: searchText,
            onChange: (event: any) => requestSearch(event.target.value),
            clearSearch: () => requestSearch(''),
          },
        } : undefined}

      />
    </div>
  );
}

export default Datagrids;