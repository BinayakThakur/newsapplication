import { Button, Grid, Toolbar } from '@mui/material';
import * as React from 'react';
import { DataContext } from '../Datacontext';
import CheckboxAuthors from './Author';
import CheckboxLabels from './Tech';

export default function CustomizedAccordions() {
 const{articles}=React.useContext(DataContext);
 var menu = []
 const [checked, setChecked] = React.useState([]);
 
 function setMenu(e){
    console.log(e);
    if(e.target.name=="tech"){
        menu.push(<CheckboxLabels></CheckboxLabels>)
    }
    else if(e.target.name=="author"){
        menu.push(<CheckboxAuthors></CheckboxAuthors>)
    }
    setChecked(menu);
 }

  return (
    
    <div>
        <Grid container spacing={2}>
            <Grid item xs={5}>
            <Button onClick={setMenu} name="tech">Technology</Button>
            <Button onClick={setMenu} name="author">Author</Button>
            </Grid>
            <Grid item xs={7}>
                {checked}
               
            </Grid>
        </Grid>
    </div>
  );
}
