import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { Backdrop, CircularProgress, Input, TextField, useScrollTrigger } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';
import { DataContext } from '../Datacontext';
import 'reactjs-popup/dist/index.css';
import Popup from './Sort';
import Filter from './Filter';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 1 : 0,
  });
}

export default function SearchAppBar(props) {
  const [open, setOpen] = React.useState(false);
  const [openFilter, setOpenFilter] = React.useState(false);
  const{filter}=React.useContext(DataContext);
  const{setFilter}=React.useContext(DataContext);
  const handleFilterClose = () => {
    setFilter(false);
  };
  const handleFilterOpen = () => {
    setFilter(!filter);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const{setSearch}=React.useContext(DataContext);
  const{setArticles}=React.useContext(DataContext);
  const{loading}=React.useContext(DataContext);
  function handleChange(e){
    setSearch(e.target.value);
    setArticles(loading.filter(article=>article.title.toLowerCase().includes(e.target.value.toLowerCase())));
  }
  return (
    <ElevationScroll {...props}>
  
      
      <AppBar position="sticky">
          <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <Link to="/data">
           <AccountCircle/></Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button sx={{color:"black"}}>Hi User</Button>
         </Typography>
          <Button sx={{color:"black"}}>Welcome</Button>
          </Toolbar>
          <Toolbar>
          <TextField onChange={handleChange} id="filled-basic" label="Search...." variant="filled" fullWidth="true"  />
          </Toolbar>
          
          <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit" onClick={handleToggle}>Sort By <ArrowDropUpSharpIcon/></Button>
          <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
          >
          <Popup></Popup>
        </Backdrop>
         </Typography>
          <Button color="inherit" onClick={handleFilterOpen}>Filter <FilterAltIcon/></Button>
          <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={filter}
          
          >
          <Filter></Filter>
        </Backdrop>
        </Toolbar>
      </AppBar>
     

    </ElevationScroll>
  );
}
