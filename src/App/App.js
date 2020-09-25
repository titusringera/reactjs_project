import React from 'react';
import './App.css';

import '../index.css'
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } 
from '@material-ui/core';
import Header from '../Components/Layouts/Header';
import Footer from '../Components/Layouts/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Components/pages/Home';
import Reports from '../Components/pages/Reports';
import Products from '../Components/pages/Products';
import Messages from '../Components/pages/Messages';
import Team from '../Components/pages/Team';
import Register from '../Components/pages/Register';
import Support from '../Components/pages/Support';
import {muscles, exercises} from '../store';

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
 
})

function App() {
  const classes=useStyles();
  const states=[exercises];
  const state = {
    exercises,
    exercise: {}
  };

 

  return (
    <ThemeProvider theme={theme}>
      <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
          <Route path='/team' component={Team} />
          <Route path='/messages' component={Messages} />
          <Route path='/support' component={Support} />
          <Route path='/register' component={Register} />
        </Switch>
        
        <Footer
        muscles={muscles} />
      </Router>
    </>
      {/* <div className={classes.appMenu}>
        <Header/>
       
        <Employees/>
      </div> */}
    </ThemeProvider>
  );
}

export default App;
