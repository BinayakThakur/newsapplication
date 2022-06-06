import { Typography,Card,CardContent,Box, Divider,Button, Toolbar} from "@mui/material";
import CustomizedAccordions from "./Menu";
import { DataContext } from '../Datacontext';
import { useContext } from "react";
import CloseIcon from '@mui/icons-material/Close';
const Filter = () => {
    const{setFilter}=useContext(DataContext);
    function closeFilter(){
        setFilter(false);
    }
    return (
        <Box sx={{width:"100%" , alignSelf:"self-end"}}>
        <Card>
            <CardContent>
                
            <Toolbar>
          
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button sx={{color:"#3949ab",mb:2}}>Filter by</Button>
         </Typography>
          <Button  onClick={closeFilter} sx={{color:"#3949ab",mb:2}}><CloseIcon/></Button>
          </Toolbar>
                <Divider/>
                <CustomizedAccordions/>
            </CardContent>
        </Card>
        </Box>
    );
    }
export default Filter;