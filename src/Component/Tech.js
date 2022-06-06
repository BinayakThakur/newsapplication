import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, Divider, Grid, Toolbar } from '@mui/material';

export default function CheckboxLabels() {
  return (
      <div style={{backgroundColor:"lightgrey",paddingLeft:"20px",height:"120%",width:"120%"}}>
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked color="default"  />} label="Tech" />
      <Divider></Divider>
      <FormControlLabel control={<Checkbox defaultChecked color="default" />} label="UI" />
      <Divider></Divider>
      <FormControlLabel control={<Checkbox defaultChecked color="default" />} label="Design" />
      <Divider></Divider>
      <FormControlLabel control={<Checkbox defaultChecked color="default" />} label="AI" />
      <Divider></Divider>
      <FormControlLabel control={<Checkbox defaultChecked color="default" />} label="Marketing" />
      <Divider></Divider>
     
    </FormGroup>
    <Toolbar>

    <Button variant='contained' sx={{background:"White",color:"black"}}>Reset</Button>
    <Button variant='contained' sx={{background:"#3949ab",color:"white"}} >Apply</Button>

    </Toolbar>

   
    </div>
  );
}
