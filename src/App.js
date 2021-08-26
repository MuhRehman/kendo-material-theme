import React, { useState} from 'react';
import './App.css';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import 'font-awesome/css/font-awesome.min.css';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Container from '@material-ui/core/Container';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Tabs, TabPanel } from 'react-tabs';
import Button from '@material-ui/core/Button';
import 'react-tabs/style/react-tabs.css';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
const currencies = [
  {
    value: 'USD',
    label: 'Default',
  },
  {
    value: 'EUR',
    label: 'demo',
  },
  {
    value: 'BTC',
    label: 'demo',
  },
  {
    value: 'JPY',
    label: 'demo',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
const StyledTableCell = withStyles((theme) => ({
  head: {
    
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


function createData(name,part, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
 
];

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });
function App() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
  
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [showText, setShowText] = useState(false);
  const handleOnChange = () => {
    var chkds = document.getElementsByName("selfs")[0].checked;
  
    if(chkds === true){

      console.log(chkds);
      setShowText(true);
    }else {
      console.log("false");
      setShowText(false);
    }
 
  };
  
  return (
 
    <Container maxWidth="">
      <div

  container
  boxShadow={3}
  spacing={3}
  style={{ padding: 20 }}
>
 
        </div>

 
  <Tabs>
 
    
  <div style={{display:"flex", backgroundColor:"rgba(0, 0, 0, 0.04)",
  paddingLeft:"12px", paddingRight:"12px", flexDirection: "row",
  flexWrap: "wrap", justifyContent: "space-between",}} className="flex" >
     
    <input className="custominput" placeholder=" "  style={{alignSelf: "flex-start",focus:"none", border:"none",backgroundColor:"rgba(0, 0, 0, 0.0)",  paddingBottom:"12px",paddingTop:"12px",marginTop:"24px",marginBottom:"12px"}}></input>
    <div  style={{alignSelf: "flex-end",paddingBottom:"12px",paddingTop:"12px",marginTop:"12px",marginBottom:"12px"}}>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        
        </DialogTitle>
        <DialogContent >
          <h3>Select Group</h3>
          <p  style={{color: "gray"}}>You can create new group on move to a selecting item to an existing group.</p>
       <div style={{borderBottom:"1px solid gray"}}></div>
       <Box m={2} pt={3}>
        <form  className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
         style={{margintop:"12px"}}
          id="standard-select-currency"
          select
          label="Select Group"
          value={currency}
          onChange={handleChange}
          helperText=""
          dividers
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    
      </div>
     
    </form>
    </Box>

        <Button variant="contained" color="primary">
      Move  to Group
      </Button>
        
        </DialogContent>
        <DialogActions>
         
        </DialogActions>
      </Dialog>
    <label className="dropdown">
    {showText ? <div> <div className="dd-button2" onClick={handleClickOpen}> Move to  Group </div>   <div className="dd-button5"> Delete </div> <div className="dd-button3"> Export </div> </div> : <div> <div className="dd-button2"> 2- 200 of 2,000 </div>   <div className="dd-button5"> Sort </div> <div className="dd-button3"> Filter </div> </div>}




</label>
    <label className="dropdown">



<input type="checkbox" className="dd-input" id="test"/>



</label>
    <label className="dropdown">



<input type="checkbox" className="dd-input" id="test"/>



</label>


    </div>

    </div>

    
    <TabPanel>
    <TableContainer maxWidth="sm" style={{paddingLeft:"2px"}} component={Paper}>
      <Table  aria-label="customized table">
        <TableHead style={{backgroundColor:"white",color:"black"}}>
          <TableRow>
            <StyledTableCell style={{color:"black"}}> </StyledTableCell>
  
            <StyledTableCell style={{color:"black"}}>Sort Order</StyledTableCell>
            <StyledTableCell style={{color:"black"}}>Image</StyledTableCell>
            <StyledTableCell style={{color:"black"}} align="left">Part #</StyledTableCell>
            <StyledTableCell style={{color:"black"}} align="left">Description</StyledTableCell>
            <StyledTableCell style={{color:"black"}} align="right"></StyledTableCell>
            <StyledTableCell style={{color:"black"}} align="right">Mr. Name </StyledTableCell>
            <StyledTableCell style={{color:"black"}} align="right"></StyledTableCell>
            <StyledTableCell style={{color:"black"}} align="right">Mr. Name </StyledTableCell>
            <StyledTableCell style={{color:"black"}} align="right">Price</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableHead style={{backgroundColor:"#0275d8"}}>
          <TableRow>
            <StyledTableCell> <DragIndicatorIcon/></StyledTableCell>
          <input type="checkbox" style={{marginLeft:"22px",marginTop:"18px"}} id="vehicle1" name="vehicle1" value="Bike"></input>
          <select  style={{marginLeft:"22px",marginTop:"18px"}} name="cars" id="cars">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  
  </select>
            <StyledTableCell>Name of group</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"> </StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"><MoreHorizIcon/></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="left"> <DragIndicatorIcon/></StyledTableCell>
              <input type="checkbox" onChange={handleOnChange}  style={{marginLeft:"22px",marginTop:"18px"}} id="vehicle1" name="selfs" value="Bike"></input>
              <select  style={{marginLeft:"22px",marginTop:"18px"}} name="cars" id="cars">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  
  </select>
              <StyledTableCell component="th" scope="row">
                <img style={{height:"32px"}} src={row.name}  alt=""/>
              </StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">  
<label className="dropdown">

<div className="dot-button">
<MoreHorizIcon/>
</div>

<input type="checkbox" className="dd-input" id="test"/>

<ul className="dot-menu">
  <li>Edit </li>
  <li>Move Up</li>
  <li>Move Down </li>
  <li>Change Group</li>
  <li>Remove </li>

 
</ul>

</label>


</StyledTableCell>
              {/* <StyledTableCell align="right"><MoreHorizIcon/></StyledTableCell> */}
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </TabPanel>
    
  </Tabs>

  
    </Container>
  );
}

export default App;
