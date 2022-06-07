import { Button , Typography,Card,CardContent,Box, Divider} from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../Datacontext";
import axios from "axios";

const Popup = props => {
  const{articles}=useContext(DataContext);
  const{setArticles}=useContext(DataContext);
  function sortByTime(){
    const options = {
        method: "GET",
        url: `https://cors-layer-library.herokuapp.com/khabar-backend.herokuapp.com/MostRecentArticles`,
        Headers: {
          "Content-Type": "application/json"
        }
      };
      
        
        axios.request(options).then(function (response) {
              console.log(response.data);
              setArticles(response.data);
            
        }).catch(function (error) {
            console.error(error);
        });
      }
    function SortByAuthor(){
        const options = {
            method: "GET",
            url: `https://cors-layer-library.herokuapp.com/khabar-backend.herokuapp.com/sortedByAuthor`,
            Headers: {
              "Content-Type": "application/json"
            }
          };
          
            
            axios.request(options).then(function (response) {
                  console.log(response.data);
                  setArticles(response.data);
                
            }).catch(function (error) {
                console.error(error);
            });
          }
    function SortedByTopic(){
        const options = {
            method: "GET",
            url: `https://cors-layer-library.herokuapp.com/khabar-backend.herokuapp.com/sortedByTopic`,
            Headers: {
              "Content-Type": "application/json"
            }
          };
          
            
            axios.request(options).then(function (response) {
                  console.log(response.data);
                  setArticles(response.data);
                
            }).catch(function (error) {
                console.error(error);
            });
          }
    
  return (
      <Box sx={{width:"100%" , alignSelf:"self-end"}}>
    <Card>
        <CardContent>
            <Typography variant="body2"  sx={{color:"#3949ab",mb:2}}>
                Sort By
                <br/>
            </Typography>
            <Divider/>
            <Typography variant="body2" component="p">
                <Button onClick={sortByTime}>Most Recent</Button>
                <br/>
                <Button onClick={SortedByTopic}>Topic</Button>
                <br/>
                <Button onClick={SortByAuthor}>Author</Button>
            </Typography>
        </CardContent>
    </Card>
    </Box>

  );
};
 
export default Popup;