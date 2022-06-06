
import './App.css';
import Home from './Component/Home';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { DataProvider } from './Datacontext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./Component/Feed";
import PrimarySearchAppBar from "./Component/Search";
import Data from './Component/Data';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#d2d4de',
      contrastText: '#1a237e',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: '#000000',
      secondary: '#3949ab',
    },
    background: {
      default: '#fafafa',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <DataProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/data" element={<Data />} />
      <Route path="/home" element={<Home  />} />
    </Routes>
    </BrowserRouter>
    </DataProvider>
    </ThemeProvider>
  );
}

export default App;
