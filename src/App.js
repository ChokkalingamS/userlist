
import './App.css';
import {useState,Fragment} from 'react'
// Material UI

// Popup Menu
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Tooltip from '@mui/material/Tooltip';

// App Bar
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

// Table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// App Bar Icons
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NavigationIcon from '@mui/icons-material/Navigation';
import Fab from '@mui/material/Fab';

// App Drawer
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GroupIcon from '@mui/icons-material/Group';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';

// Dark Mode
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { createTheme, ThemeProvider } from '@mui/material/styles';  


export default function App()
{
 
  return  <Container/>
        
}



function Container() 
{
  // Dark Mode/ Light Mode Condional Styling
  let [themechange,setThemechange]=useState('dark')
  let lightmode=<Tooltip title="Light Mode"><LightModeIcon style={{fill:"gold"}}/></Tooltip>
  let darkmode=<Tooltip title="Dark Mode"><DarkModeIcon style={{fill:"white"}}/></Tooltip>
  let mode=(themechange==='light')?darkmode:lightmode
  let themebutton=<IconButton onClick={()=>setThemechange((themechange==='light')?'dark':'light')}>{mode}</IconButton>
 
  // App Drawer
  const [state, setState] = useState({left: false});
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Users", "Messages", "More Info", "Settings"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index ===0 ? <GroupIcon /> : null}
              {index ===1 ? <MailIcon /> : null}
              {index ===2 ? <InfoIcon /> : null}
              {index ===3 ? <SettingsIcon /> : null}
              {index===4  ? mode:null }
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>  
    </Box>)

    // Theme
   const theme = createTheme({
    palette: {mode:themechange},
  });

  return (
                <ThemeProvider theme={theme}>
                <Paper elevation={0} style={{borderStyle:"none",minHeight:"100vh"}}>

                <div className="App">
                
                {/* Header */}
                <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{height:"4rem",backgroundColor:(themechange==='light')&&"#7b49d3"}}>
                <Toolbar variant="dense" >

                {/* App Bar */}
                <Fragment key={1} >
                <IconButton onClick={toggleDrawer("left", true)} style={{marginRight:"0.5rem",color:(themechange==='light')&&"white"}}>
                <MenuIcon/></IconButton>
               
                 {themebutton}   {/* Theme Change Button */}
                
                <Drawer style={{color:"green"}}
                 anchor="left"
                 open={state["left"]}
                 onClose={toggleDrawer("left", false)} >
                 {list("left")}
                 </Drawer>
                 </Fragment>
                  {/* Search Field */}
                 <InputBase  placeholder="Search" className="searchfield" style={{backgroundColor:(themechange==='light')&&"white"}}
                 inputProps={{ 'aria-label': 'search google maps' }} /> 
    
                 <div  className="badge">
                 <Badge id="mail" badgeContent={5} color="error">
                 <MailIcon  style={{fill:(themechange==='dark')&&"greenyellow"}} />
                 </Badge>
                 <Badge  id="notification" badgeContent={7} color="error">
                 <NotificationsIcon   style={{fill:(themechange==='dark')&&"skyblue"}}/> 
                 </Badge>
                 </div>

                  {/* Admin pic */}
                 <img alt="C" className="adminpic" src="https://static.statusqueen.com/dpimages/thumbnail/Stylish_dp-1473.jpg" />
                 <p className="admin">ADMIN</p>
                </Toolbar>
                </AppBar>
                </Box>


               {/* Body */}
               <Userlist/>

                {/* Float Icon */}
              <Fab variant="extended" id="floaticon" onClick={()=>window.scroll(-500,0)}><NavigationIcon sx={{ mr: 1 }} />Navigate</Fab>
              
              {/* Footer */}
              <div className="footer" style={{backgroundColor:(themechange==='light')&&"#7b49d3"}}>
              <p className="footercontent">Copyright © UserList Webpage 2021</p>
              </div>
    
              </div>
              </Paper>
              </ThemeProvider>
  ); 
}


// Userlist Component
function Userlist()
{
  // Userlist
  let userlist=[
    {
     Name: "Roman Nitzsche",
     Avatar: "https://static.statusqueen.com/dpimages/thumbnail/dp%20image58-681.jpg",
     id: "23",
     Mobile:9856123570,
     Mail:"roman@gmail.com",
     Status:"Active"

    },
    {
     Name: "Darrel Shields",
     Avatar: "https://static.statusqueen.com/dpimages/thumbnail/dp_images_8-1279.jpg",
     id: "24",
     Mobile:8135489684,
     Mail:"darrel@gmail.com",
     Status:"Active"
    },
    {
     Name: "Angela",
     Avatar: "https://i.pinimg.com/originals/19/cf/78/19cf789a8e216dc898043489c16cec00.jpg",
     id: "26",
     Mobile:9852365478,
     Mail:"angel@gmail.com",
     Status:"InActive"
    },
    {
     Name: "Jeremy Ledner",
     Avatar: "https://cdn2.momjunction.com/wp-content/uploads/2019/07/Whatsapp-DP25.jpg",
     id: "27",
     Mobile:8852645826,
     Mail:"jeremy@gmail.com",
     Status:"Active"
    },
    {
     Name: "Peter Murphy",
     Avatar: "http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/01/Alone-Very-Nice-Dp.jpg",
     id: "28",
     Mobile:7153467805,
     Mail:"peter@gmail.com",
     Status:"Active"
    },
   ]

  //  Userlist Data
   const[data,setData]=useState(userlist)
 
  //  Dialog
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {setOpen(true);};
  const handleClose = () => {setOpen(false);};



   return (<div className="displayuserlist">
               <p className="current-users">Current Users : {data.length}</p>
               
               <div className="users-heading">
               <p>Users</p>
               <Button id="addmoviebutton" variant="contained" color="success" onClick={()=>handleClickOpen()}>Add User</Button>
               </div>

              <Adduserlist userlist={userlist} data={data} setData={setData} handleClose={handleClose} open={open} />
              <Displayuserlist  userlist={userlist} u data={data}  setData={setData} />               
          </div>)
}

// Display User List
function Displayuserlist({data,setData,userlist})
{ 
  // Copy by value
  const copydata=[...data]

  // Delete Userdata
  let deleteuserlist=(i)=>
  {
   const deleteddata= (copydata.filter((data,index)=>index!==i));
   console.log(deleteddata);
   setData(deleteddata);
  }
 
  return(

        // Table Heading
        <TableContainer component={Paper} id="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        <TableRow>
        <TableCell align="center">Photo</TableCell>
        <TableCell align="center">Username</TableCell>
        <TableCell align="center">Mobile</TableCell>
        <TableCell align="center">Mail</TableCell>
        <TableCell align="center">Status</TableCell>
        <TableCell align="center">Action</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>

        {/* Table Body */}
        {    (data.map(({Name,Avatar,Mobile,Mail,Status},i)=>{ return(
        //  Table row : Individual user data 
        <TableRow  className="userdata" key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>  
        <TableCell component="th" scope="row" align="center" >
        <img className="userpic" src={Avatar} alt={Name}></img></TableCell>
        <TableCell align="center"> <p  className="username">{Name}   </p></TableCell>
        <TableCell align="center"> <p className="userphnno">{Mobile} </p></TableCell>
        <TableCell align="center"> <p className="usermail">{Mail}    </p></TableCell>
        <TableCell align="center"> <p className="status">{Status}    </p></TableCell>
        <TableCell align="center"> <Features deleteuserlist={deleteuserlist} i={i} data={data} setData={setData}/></TableCell>
        </TableRow>)}))}
        </TableBody>
        </Table> 
        </TableContainer>)      
     }

// User Features:EditButton,DeleteButton
function Features({deleteuserlist,data,setData,i})
{
  // To track individual userdata
  let [count,setCount]=useState(0);

  // Popup Menu
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {setOpen(true);}
  const handleClose = () => {setOpen(false);}

  return(
  <div>
  <Tooltip title="Edit">
  <IconButton onClick={()=>{handleClickOpen();setCount((count)=>count=(count===0)?1:0)}}><ModeEditIcon color="success"/></IconButton>
  </Tooltip>

  <Tooltip title="Delete">
  <IconButton onClick={()=>deleteuserlist(i)}>
  <DeleteIcon color="error" />
  </IconButton>
  </Tooltip>
  
  {/* Edit Userlist Component */}
  {(count===1)&&<Updateuserlist setCount={setCount} data={data} setData={setData} i={i}  handleClose={handleClose} open={open}/>}
  {console.log(count)}
  </div>)
}


// Add New User Data
function Adduserlist({userlist,data,setData,handleClose,open})
{
  const[name,setName]=useState('')
  const[picurl,setPicurl]=useState('')
  const[mobilenum,setMobilenum]=useState('')
  const[mail,setMail]=useState('')

  // Newly Added Userdata Object
  const newuserlist={Name:name,Avatar:picurl,Mobile:+mobilenum,Mail:mail,Status:"Active"}


  return (
         <div className="Adduserlist">
        {/* Popup Menu */}
        <Dialog open={open} onClose={handleClose} >
        <DialogTitle>Add User</DialogTitle>

         {/* TextField */}
        <DialogContent style={{width:'30rem'}}>
        <TextField  style={{width:'27rem'}} required label="Name" id="filled-basic" variant="filled"type="text"   onInput={(e)=>setName(e.target.value)}      placeholder="Enter the username" /><br/>
        <TextField  style={{width:'27rem'}} required label="Photo" id="filled-basic" variant="filled"  type="text"   onInput={(e)=>setPicurl(e.target.value)}    placeholder="Profile pic url" /><br/>
        <TextField  style={{width:'27rem'}} required label="Mobile Number" id="filled-basic" variant="filled" type="number" onInput={(e)=>setMobilenum(e.target.value)} placeholder="Enter the Mobile Number" /><br/>
        <TextField  style={{width:'27rem'}} required label="Mail" id="filled-basic" variant="filled" type="mail"   onInput={(e)=>setMail(e.target.value)}      placeholder="Enter the Mailid" /><br/>
        </DialogContent>
        
        <DialogActions>
        <Button  variant="contained" style={{marginRight:'4rem',marginBottom:"1rem"}}
         onClick={()=>{ console.log(data); handleClose();  return setData([...data,newuserlist])}}>Add User</Button>
        
        <Button  variant="contained" style={{marginRight:'6rem',marginBottom:"1rem"}}
         onClick={handleClose}>Cancel</Button>
        </DialogActions>
        
        </Dialog>
  </div>)
}


// Edit User data
function Updateuserlist({data,setData,i,setCount,open,handleClose})
{
  // Destruturing from old user data
  const{Name,Avatar,Mobile,Mail}=data[i]
  
  const[name,setName]=useState(Name)
  const[picurl,setPicurl]=useState(Avatar)
  const[mobilenum,setMobilenum]=useState(Mobile)
  const[mail,setMail]=useState(Mail)

  // Updatad User data Object
  const newuserlist={Name:name,Avatar:picurl,Mobile:+mobilenum,Mail:mail,Status:"Active"}

  // Updating the Particular userdata using the index value as refernce
  data[i]=newuserlist;

  // updated User List
  const Updateduserlist=[...data];

 
  return( 
        <div className="Updateuserlist">
        {/* Popup Menu */}
        <Dialog open={open} onClose={handleClose} >
        <DialogTitle>Update User</DialogTitle>

         {/* TextField */}
        <DialogContent style={{width:'30rem'}}>
        <TextField type="text"    value={name}       required  onInput={(e)=>setName(e.target.value)}       style={{width:'27rem'}}  label="Name" id="filled-basic" variant="filled"    placeholder="Enter the username" /><br/>
        <TextField type="text"    value={picurl}     required  onInput={(e)=>setPicurl(e.target.value)}     style={{width:'27rem'}}  label="Picture" id="filled-basic" variant="filled"    placeholder="Profile pic url" /><br/>
        <TextField type="number"  value={mobilenum}  required  onInput={(e)=>setMobilenum(e.target.value)}  style={{width:'27rem'}}  label="Mobile" id="filled-basic" variant="filled"    placeholder="Enter the Mobile Number" /><br/>
        <TextField type="mail"    value={mail}       required  onInput={(e)=>setMail(e.target.value)}       style={{width:'27rem'}}  label="Mail" id="filled-basic" variant="filled"    placeholder="Enter the Mailid" /><br/>
        </DialogContent>

        <DialogActions>
        <Button  variant="contained"  style={{marginRight:'5rem',marginBottom:"1rem"}}
         onClick={()=>{setCount((x)=>(x>0)?x-1:null);handleClose(); return setData(Updateduserlist)}}>Save</Button>

        <Button  variant="contained" style={{marginRight:'6rem',marginBottom:"1rem"}} 
         onClick={()=>{setCount((x)=>(x>0)?x-1:null);handleClose();}}>Cancel</Button>
        </DialogActions>
        
        </Dialog>
        </div>)
}



