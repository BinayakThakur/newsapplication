import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {  useScrollTrigger } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DataContext } from '../Datacontext';
import 'reactjs-popup/dist/index.css';
import Box from '@mui/material/Box';
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

export default function Form(props) {
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
          <Link to="/newsapplication">  <ArrowBackIcon/> </Link>
          </IconButton>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
           
            >
          
          <Button sx={{color:"black"}}>User Profile</Button>
          </Box>
      
          </Toolbar>
          
      </AppBar>
     

    </ElevationScroll>
  );
}
