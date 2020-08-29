import React from 'react';
import './App.css';
import SideMenu from '../Components/Contents/SideMenu';
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from '../Components/Layouts/Header';
import Employees from '../Components/Contents/pages/Employees/Employees';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#333996"
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})
const useStyles =makeStyles ({
  appMenu: {
      display: 'flex',
      paddingLeft: '250px',
      flexDirection: 'column',
      position: 'absolute',
      left: '0px',
      width: '100%',
      height: '50px',
      backgroundColor: '#3f51b5'
    
  }
})

function App() {
  const classes=useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu/>
      <div className={classes.appMenu}>
        <Header/>
       
        <Employees/>
      </div>
    </ThemeProvider>
  );
}

export default App;
