import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, Divider, Grid, Toolbar } from '@mui/material';
import { DataContext } from '../Datacontext';


export default function CheckboxLabels() {
  const[authors,setAuthors]=React.useState([]);
  const{loading}=React.useContext(DataContext);
  const{criteria}=React.useContext(DataContext);
  const{setCriteria}=React.useContext(DataContext);
  const{setArticles}=React.useContext(DataContext);
  const{articles}=React.useContext(DataContext);
  function Reset(){
    setCriteria([]);
  }
  var condition=[]
  function handleCriteria(e){
    condition=condition.concat(criteria)
    console.log(e.target.checked);
    if(e.target.checked){
      condition.push(e.target.name);
    }
    else{
      condition.splice(condition.indexOf(e.target.name),1);
    }
    setCriteria(condition);
  }
  function apply(){
    var filtered=loading.filter(article=>{
      return criteria.includes(article.topic);
    })
    setArticles(filtered);
  }
  var menu = []
  if(loading!=undefined){
      loading.map(article => {
          menu.push(
            <div>
          <FormControlLabel control={<Checkbox name={article.topic} onChange={handleCriteria}  color="default"  />} label={article.topic} />
          <Divider></Divider>
          </div>
     
          );
       
        }

      );
      }  

  return (
      <div style={{backgroundColor:"lightgrey",paddingLeft:"20px",height:"120%",width:"120%"}}>
    <FormGroup>
      {menu}
    </FormGroup>
    <Toolbar>

    <Button variant='contained' sx={{background:"White",color:"black"}}  onClick={Reset}>Reset</Button>
    <Button variant='contained' sx={{background:"#3949ab",color:"white"}} onClick={apply}>Apply</Button>

    </Toolbar>

   
    </div>
  );
}
