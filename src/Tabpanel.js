import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import './TabCostom.css';
import './Tabpanel.css';
import { flexbox } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
function myFunction() {
  // alert("");
  console.log("Dd");
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 750,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="General" {...a11yProps(0)} />
          <Tab label="Billing" {...a11yProps(1)} />
          <Tab label="Shipping" {...a11yProps(2)} />
          <Tab label="Payment Detail" {...a11yProps(3)} />
          <Tab label="More" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <div
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <form className={classes.root} noValidate autoComplete="off">
  
  
      <div>
              <Box display="flex" m={1} bgcolor="background.paper">
      <Grid
  container

  justify="space-around"
  alignItems="center"
>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
    <label>First Name</label>
    <input className="custom-input"  onchange="document.getElementById(this.value).scrollIntoView()">

</input>
   
  </div>
  </Grid>
  <Grid item xs={12} sm={6}>
<div className="dd_with_select">
    <label>Last Name</label>
    <input className="custom-input"  onchange="document.getElementById(this.value).scrollIntoView()">

</input>
  </div>
  </Grid>
  </Grid>
      </Box>
      <Box display="flex" m={1}  bgcolor="background.paper">
      <Grid
  container

  justify="space-around"
  alignItems="center"

>
<Grid item xs={12} sm={6} >
<div className="dd_with_select">
    <label>Email ID</label>
    <input className="custom-input"  onchange="document.getElementById(this.value).scrollIntoView()">

</input>
   
  </div>
  </Grid>
  <Grid item xs={12} sm={6}>
<div className="dd_with_select">
    <label>Phone No</label>
    <input className="custom-input"  onchange="document.getElementById(this.value).scrollIntoView()">

</input>
  </div>
  </Grid>
  </Grid>
      </Box>
      <Box display="flex" m={1} bgcolor="background.paper">
      <Grid
  container

  justify="space-around"
  alignItems="center"

>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
    <label>Catalog</label>
    <select name="sections" id="select" onchange="document.getElementById(this.value).scrollIntoView()">
      <option value="Section1">Default</option>
      <option value="Section2">Section Two</option>
      <option value="Section3">Section Three</option>
    </select>
  </div>
  </Grid>
  <Grid item xs={12} sm={6}>
<div className="dd_with_select">
    <label>Sales Rap</label>
    <select name="sections" id="select" onchange="document.getElementById(this.value).scrollIntoView()">
      <option value="Section1">Santosh</option>
      <option value="Section2">Section Two</option>
      <option value="Section3">Section Three</option>
    </select>
  </div>
  </Grid>
  </Grid>
      </Box>

      <Box display="flex" m={1} bgcolor="background.paper">
      <Grid
  container

  justify="space-around"
  alignItems="center"

>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
    <label>Company Name</label>
    <select name="sections" id="select" onchange="document.getElementById(this.value).scrollIntoView()">
      <option value="Section1">VarStreet Inc.</option>
      <option value="Section2">Section Two</option>
      <option value="Section3">Section Three</option>
    </select>
  </div>
  </Grid>
  <Grid item xs={12} sm={6}>
<div className="dd_with_select">
    <label>
      Estimated Lead Time Option
    </label>
    <select name="sections" id="select" onchange="document.getElementById(this.value).scrollIntoView()">
      <option value="Section1">Do Not Show Estimated Lead Time</option>
      <option value="Section2">Section Two</option>
      <option value="Section3">Section Three</option>
    </select>
  </div>
  </Grid>
  </Grid>
      </Box>
      <Box display="flex" m={1} bgcolor="background.paper">
      <Grid
  container

  justify="space-around"
  alignItems="center"

>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
    <label>Store</label>
    <select name="sections" id="select" onchange="document.getElementById(this.value).scrollIntoView()">
      <option value="Section1">RDemo Store</option>
      <option value="Section2">Section Two</option>
      <option value="Section3">Section Three</option>
    </select>
  </div>
  </Grid>
  <Grid item xs={12} sm={6}>
<div className="dd_with_select">
    <label>
      Status
    </label>
    <select name="sections" id="select" onchange="document.getElementById(this.value).scrollIntoView()">
      <option value="Section1">Active</option>
      <option value="Section2">Section Two</option>
      <option value="Section3">Section Three</option>
    </select>
  </div>
  </Grid>
  </Grid>
      </Box>
    
      </div>
    </form>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <form className={classes.root} noValidate autoComplete="off">
  
  
  <div>
<Box display="flex" m={1} bgcolor="background.paper">
  <Grid
container
justify="space-around"
alignItems="center"
>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
<label>Selected Address</label>
<select name="sections" id="select" onchange="document.getElementById(this.value).scrollIntoView()">
  <option value="Section1">Name of the Address</option>
  <option value="Section2">Section Two</option>
  <option value="Section3">Section Three</option>
</select>

</div>
</Grid>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
<label>Address Line 1</label>
<input className="custom-input"  onchange="document.getElementById(this.value).scrollIntoView()">

</input>
</div>
</Grid>
</Grid>
  </Box>
  <Box display="flex" m={1}  bgcolor="background.paper">
  <Grid
container

justify="space-around"
alignItems="center"

>
<Grid item xs={12} sm={6} >
<div className="dd_with_select">
<label>Address Line 2</label>
<input className="custom-input"  onchange="document.getElementById(this.value).scrollIntoView()">

</input>

</div>
</Grid>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
<label>Address Line 3</label>
<input className="custom-input"  onchange="document.getElementById(this.value).scrollIntoView()">

</input>
</div>
</Grid>
</Grid>
  </Box>
  <Box display="flex" m={1} bgcolor="background.paper">
  <Grid
container

justify="space-around"
alignItems="center"

>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
<label>City</label>
<select name="sections" id="select" onchange="document.getElementById(this.value).scrollIntoView()">
  <option value="Section1">Default</option>
  <option value="Section2">Section Two</option>
  <option value="Section3">Section Three</option>
</select>
</div>
</Grid>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
<label>State</label>
<input className="custom-input"  onchange="document.getElementById(this.value).scrollIntoView()">

</input>
</div>
</Grid>
</Grid>
  </Box>

  <Box display="flex" m={1} bgcolor="background.paper">
  <Grid
container

justify="space-around"
alignItems="center"

>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
<label>Country</label>
<select name="sections" id="select" onchange="document.getElementById(this.value).scrollIntoView()">
  <option value="Section1">Unites State</option>
  <option value="Section2">Section Two</option>
  <option value="Section3">Section Three</option>
</select>
</div>
</Grid>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
<label>
 Zip
</label>
<select name="sections" id="select" onchange="document.getElementById(this.value).scrollIntoView()">
  <option value="Section1">128726</option>
  <option value="Section2">Section Two</option>
  <option value="Section3">Section Three</option>
</select>
</div>
</Grid>
</Grid>
  </Box>
  <Box display="flex" m={1} bgcolor="background.paper">
  <Grid
container

justify="space-around"
alignItems="center"

>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
<label>Phone Number</label>
<select name="sections" id="select" onchange="document.getElementById(this.value).scrollIntoView()">
  <option value="Section1">+1 9999999999</option>
  <option value="Section2">Section Two</option>
  <option value="Section3">Section Three</option>
</select>
</div>
</Grid>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">

</div>
</Grid>
</Grid>
  </Box>

  </div>
</form>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <form className={classes.root} noValidate autoComplete="off">
  
       <form className={classes.root} noValidate autoComplete="off">
  
  
  <div>
<Box display="flex" m={1} bgcolor="background.paper">
  <Grid
container
justify="space-around"
alignItems="center"
>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
<label>Selected Address</label>
<select name="sections" id="select" onchange="document.getElementById(this.value).scrollIntoView()">
  <option value="Section1">Same as billing</option>
  <option value="Section2">Section Two</option>
  <option value="Section3">Section Three</option>
</select>

</div>
</Grid>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
<label>Address Line 1</label>
<input className="custom-input"  onchange="document.getElementById(this.value).scrollIntoView()">

</input>
</div>
</Grid>
</Grid>
  </Box>
  <Box display="flex" m={1}  bgcolor="background.paper">
  <Grid
container

justify="space-around"
alignItems="center"

>
<Grid item xs={12} sm={6} >
<div className="dd_with_select">
<label>Address Line 2</label>
<input className="custom-input"  onchange="document.getElementById(this.value).scrollIntoView()">

</input>

</div>
</Grid>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
<label>Address Line 3</label>
<input className="custom-input"  onchange="document.getElementById(this.value).scrollIntoView()">

</input>
</div>
</Grid>
</Grid>
  </Box>
  <Box display="flex" m={1} bgcolor="background.paper">
  <Grid
container

justify="space-around"
alignItems="center"

>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
<label>City</label>
<select name="sections" id="select" onchange="document.getElementById(this.value).scrollIntoView()">
  <option value="Section1">Default</option>
  <option value="Section2">Section Two</option>
  <option value="Section3">Section Three</option>
</select>
</div>
</Grid>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
<label>State</label>
<input className="custom-input"  onchange="document.getElementById(this.value).scrollIntoView()">

</input>
</div>
</Grid>
</Grid>
  </Box>

  <Box display="flex" m={1} bgcolor="background.paper">
  <Grid
container

justify="space-around"
alignItems="center"

>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
<label>Country</label>
<select name="sections" id="select" onchange="document.getElementById(this.value).scrollIntoView()">
  <option value="Section1">Unites State</option>
  <option value="Section2">Section Two</option>
  <option value="Section3">Section Three</option>
</select>
</div>
</Grid>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
<label>
 Zip
</label>
<select name="sections" id="select" onchange="document.getElementById(this.value).scrollIntoView()">
  <option value="Section1">128726</option>
  <option value="Section2">Section Two</option>
  <option value="Section3">Section Three</option>
</select>
</div>
</Grid>
</Grid>
  </Box>
  <Box display="flex" m={1} bgcolor="background.paper">
  <Grid
container

justify="space-around"
alignItems="center"

>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
<label>Phone Number</label>
<select name="sections" id="select" onchange="document.getElementById(this.value).scrollIntoView()">
  <option value="Section1">+1 9999999999</option>
  <option value="Section2">Section Two</option>
  <option value="Section3">Section Three</option>
</select>
</div>
</Grid>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">

</div>
</Grid>
</Grid>
  </Box>

  </div>
</form>



  
</form>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        <form className={classes.root} noValidate autoComplete="off">
  
  
  <div>
<Box display="flex" m={1} bgcolor="background.paper">
  <Grid
container
justify="space-around"
alignItems="center"
>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
<label>Price List</label>
<select name="sections" id="select" onchange="document.getElementById(this.value).scrollIntoView()">
  <option value="Section1">Same as billing</option>
  <option value="Section2">Section Two</option>
  <option value="Section3">Section Three</option>
</select>

</div>
</Grid>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">

</div>
</Grid>
</Grid>
  </Box>

  <Box display="flex" m={1} bgcolor="background.paper">
  <Grid
container
justify="space-around"
alignItems="center"
>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
<label>Default Payment Method</label>
<select name="sections" id="select" onchange="document.getElementById(this.value).scrollIntoView()">
  <option value="Section1">Credit Card</option>
  <option value="Section2">Section Two</option>
  <option value="Section3">Section Three</option>
</select>
</div>
</Grid>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
<label>Default Delivery Method</label>
<select name="sections" id="select" onchange="document.getElementById(this.value).scrollIntoView()">
  <option value="Section1">FedX 1 day Delivery</option>
  <option value="Section2">Section Two</option>
  <option value="Section3">Section Three</option>
</select>
</div>
</Grid>
</Grid>
  </Box>

 
 <Box display="flex" m={1} bgcolor="background.paper">
  <Grid
container
justify="space-around"
alignItems="center"
>
<Grid item xs={12} sm={6}>
<div className="dd_with_select ">
 
<label>Allow Payment Methods</label>
<div className="custom-select">
<input type="text" id="myInput" onKeyPress={myFunction}  placeholder="Search template..." />

<ul id="myUL">


  <li><a href="#"> <Checkbox color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }}/>Delivery method 1</a></li>
  <li><a href="#"> <Checkbox color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }}/>Delivery method 1</a></li>
  <li><a href="#"> <Checkbox color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }}/>Delivery method 1</a></li>
  <li><a href="#"> <Checkbox color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }}/>Delivery method 1</a></li>
  <li><a href="#"> <Checkbox color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }}/>Delivery method 1</a></li>
  <li><a href="#"> <Checkbox color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }}/>Delivery method 1</a></li>
  <li><a href="#"> <Checkbox color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }}/>Delivery method 1</a></li>
  <li><a href="#"> <Checkbox color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }}/>Delivery method 1</a></li>

</ul>
</div>
</div>
</Grid>
<Grid item xs={12} sm={6}>
<div className="dd_with_select ">
<label>Allow Delivery Methods</label>
<div className="custom-select">
<input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search template..." />

<ul id="myUL">


  <li><a href="#"> <Checkbox color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }}/>Delivery method 1</a></li>
  <li><a href="#"> <Checkbox color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }}/>Delivery method 1</a></li>
  <li><a href="#"> <Checkbox color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }}/>Delivery method 1</a></li>
  <li><a href="#"> <Checkbox color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }}/>Delivery method 1</a></li>
  <li><a href="#"> <Checkbox color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }}/>Delivery method 1</a></li>
  <li><a href="#"> <Checkbox color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }}/>Delivery method 1</a></li>
  <li><a href="#"> <Checkbox color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }}/>Delivery method 1</a></li>
  <li><a href="#"> <Checkbox color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }}/>Delivery method 1</a></li>

</ul>
</div>
</div>
</Grid>
</Grid>
  </Box>
  </div>
</form>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
       <form className={classes.root} noValidate autoComplete="off">
  
  
  <div>
<Box display="flex" m={1} bgcolor="background.paper">
  <Grid
container
justify="space-around"
alignItems="center"
>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
<label>Currency</label>
<select name="sections" id="select" onchange="document.getElementById(this.value).scrollIntoView()">
  <option value="Section1">USD</option>
  <option value="Section2">Section Two</option>
  <option value="Section3">Section Three</option>
</select>

</div>
</Grid>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">

</div>
</Grid>
</Grid>
  </Box>

  <Box display="flex" m={1} bgcolor="background.paper">
  <Grid
container

justify="space-around"
alignItems="center"

>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">
<label>Notes</label>
<textarea className="custom-textarea"></textarea>
</div>
</Grid>
<Grid item xs={12} sm={6}>
<div className="dd_with_select">

</div>
</Grid>
</Grid>
  </Box>

 

  </div>
</form>
        </TabPanel>
      </div>
    </div>
  );
}