import { Button , Typography,Card,CardContent,Box, Divider} from "@mui/material";
import React from "react";
 
const Popup = props => {
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
                <Button>Most Recent</Button>
                <br/>
                <Button>Topic</Button>
                <br/>
                <Button>Author</Button>
            </Typography>
        </CardContent>
    </Card>
    </Box>

  );
};
 
export default Popup;