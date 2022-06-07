import {ToggleButtonGroup,Box,Switch,Input,InputAdornment,FormGroup,Checkbox,MenuItem,Select,NativeSelect,InputLabel, Avatar, Container, FormControl, FormLabel,FormControlLabel, RadioGroup ,Radio,ToggleButton, TextField ,Toolbar, Button, Typography, Autocomplete, OutlinedInput, Backdrop, CircularProgress} from "@mui/material";
import Form from "./Form";
import axios from "axios";
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import { Formik } from 'formik';
import MuiPhoneNumber from 'material-ui-phone-number';
import { styled } from '@mui/material/styles';
const Data = () => {
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,

    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));
    const [update,setUpdate]=useState(<></>)
    var days=[<></>]
    for(var i=1;i<=31;i++){
        days.push(<MenuItem value={i}>{i}</MenuItem>)
    }
    var months=[<></>]
    for(var i=1;i<=12;i++){
        months.push(<MenuItem value={i}>{i}</MenuItem>)
    }
    var years=[<></>]
    for(var i=1940;i<=2020;i++){
        years.push(<MenuItem value={i}>{i}</MenuItem>)
    }

    const signform={
        name : '',
        email:'',
        password:'',
        phone:'',
        gender:'',
        language:'',
        martial:'',
        dob:[0,0,0],
        timeOfBirth:[0,false],
      }
      const [alignment, setAlignment] = useState('web');

      const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
      };
      const [open, setOpen] = useState(false);
      const handleClose = () => {
        setOpen(false);
      };
      const handleToggle = () => {
      setOpen(!open);
    };

      function handleOnChange(value) {
          signform.phone=value
     }
      const signSubmit = (e)=>{
        const data={ 
          "dob": e.dob+'',
          "email": e.email+'',
          "gender": e.gender+'',
          "language": e.language+'',
          "martial": e.martial+'',
          "name": e.name+'',
          "phone": e.phone+'',
          "timeOfBirth": e.timeOfBirth+''
        }
          axios.post('https://cors-layer-library.herokuapp.com/khabar-backend.herokuapp.com/users',data)
          .then(res=>{
              console.log(res)
          }
          )
          .catch(err=>{
              console.log(err)
          }
          )
        
       
    }
      

  return (
    <div>
        <Form></Form>

        <br/>
        <Container>
        <Formik initialValues={signform} onSubmit={signSubmit}>
        { formikProps=>(
          <form onSubmit={formikProps.handleSubmit}>
          <FormLabel style={{color:"grey",mr:3}} sx={{ml:2,mb:2}}>Username</FormLabel><br/>
          <Toolbar>
            
          <TextField  required color="primary" sx={{mt:1,mb:2}}  onChange={formikProps.handleChange} name="name" placeholder="Enter name here" label="" variant="outlined" />
          <Avatar  sx={{ bgcolor: "navy",ml:4 ,minHeight:"40px",mb:2}}>B</Avatar>
          </Toolbar>
   
          <FormLabel style={{color:"grey",mr:3}} sx={{ml:2,mb:2}}>E-mail</FormLabel><br/>
          <Toolbar>
            
          <TextField  required color="primary" sx={{mt:1,mb:2}}  fullWidth="true" type="email" onChange={formikProps.handleChange} name="email" placeholder="Your email ID" label="" variant="outlined" />
          
          </Toolbar>
          
          <FormLabel style={{color:"grey",mr:3}} sx={{ml:2,mb:2}}>Password</FormLabel><br/>
          
          <Toolbar>
            
          <TextField  required color="primary" sx={{mt:1,mb:2}}  fullWidth="true" type="password" onChange={formikProps.handleChange} name="password" placeholder="Min 8 char" label="" variant="outlined" />
          
          </Toolbar>
          <FormLabel style={{color:"grey",mr:3}} sx={{ml:2,mb:2}}>Phone</FormLabel><br/>
          
          <Toolbar>
          
          <MuiPhoneNumber defaultCountry={'in'} fullWidth="true" sx={{mt:1,mb:2}}  name="phone" variant="outlined" onChange={e => formikProps.setFieldValue("phone", e)}/>
          
          </Toolbar>
          <Toolbar>
          <FormLabel style={{color:"grey",mr:3}} sx={{mr:2}}>Gender</FormLabel>
          
          <FormControl>
          
          <RadioGroup
          name="gender"
          sx={{ml:3}}
          onChange={e=>formikProps.setFieldValue("gender",e.target.value)}
          row

          >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          
          </RadioGroup>
          </FormControl>
          </Toolbar>
          <Toolbar>
          <FormLabel style={{color:"grey",mr:3}} sx={{mr:2}}>Language</FormLabel>
          <ToggleButtonGroup
          color="info"
          value={alignment}
          exclusive
          onChange={handleChange}
          sx={{ml:5,mb:2}}
          >
          <ToggleButton value="hindi" onClick={e=>formikProps.setFieldValue("language",e.target.value)}>Hindi</ToggleButton>
          <ToggleButton value="english" onClick={e=>formikProps.setFieldValue("language",e.target.value)}>English</ToggleButton>
          </ToggleButtonGroup>
          </Toolbar>
          <FormLabel style={{color:"grey",mr:3}} sx={{mr:2}}>Martial Status</FormLabel>
  
          <Toolbar sx={{mt:2,mb:2}}>
          <FormControl fullWidth>
          <InputLabel  style={{color:"grey"}} >Select</InputLabel>
          <Select
           required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          placeholder="Select"
          onChange={e=>formikProps.setFieldValue("martial",e.target.value)}
          >
          <MenuItem value="married">Married</MenuItem>
          <MenuItem value="unmarried">Unmarried</MenuItem>
          <MenuItem value="others">Others</MenuItem>
          </Select>
          </FormControl>
          </Toolbar>
          <FormLabel style={{color:"grey",mr:3}} sx={{mr:2,ml:2}}>Date of Birth</FormLabel>
          <Toolbar sx={{mb:2}}>
          <FormControl>
          <InputLabel  style={{color:"grey"}} >DD</InputLabel>
          <Select
          sx={{width:"70px"}}
          labelId="day"
          id="day"
          placeholder="dd"
          onChange={e=>formikProps.setFieldValue("dob[0]",e.target.value)}
          >
            
            {days}
          </Select>
          </FormControl>
          <FormControl>
          <InputLabel sx={{ml:3}}  style={{color:"grey"}} >MM</InputLabel>
          
          <Select
          sx={{ml:3,width:"70px"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          placeholder="Select"
          onChange={e=>formikProps.setFieldValue("dob[1]",e.target.value)}
          >
            {months}
          </Select>
          </FormControl>
          <FormControl>
          <InputLabel sx={{ml:3}} style={{color:"grey"}} >YYYY</InputLabel>
          
          <Select
          sx={{ml:3,width:"100px"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          placeholder="Select"
          onChange={e=>formikProps.setFieldValue("dob[2]",e.target.value)}
          >
           {years}
          </Select>
          </FormControl>
          </Toolbar >
          <FormLabel style={{color:"grey",mr:3}} sx={{mr:2,ml:2}}>Time Of Birth</FormLabel>
          <Toolbar sx={{mb:2}}>
          
          <FormControl fullWidth="true">
        
        <OutlinedInput
          onChange={e=>formikProps.setFieldValue("timeOfBirth[0]",e.target.value)}
          fullWidth="true"
          placeholder="Choose Time"
          id="input-with-icon-adornment"
          variant="outlined"
          endAdornment={
            <InputAdornment>
            <MaterialUISwitch  onChange={e=>formikProps.setFieldValue("timeOfBirth[1]",!signform.timeOfBirth[1])}></MaterialUISwitch>
            
            </InputAdornment>
            
          }
        />
      </FormControl>
          </Toolbar>

          <Button variant="contained" color="primary" fullWidth="true" sx={{mr:2,minHeight:"60px",mb:2}} type="submit">Submit</Button>
          
         </form>)}
        </Formik>
        
        </Container>
    </div>
  )
}
export default Data;