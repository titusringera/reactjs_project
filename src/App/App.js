import React from 'react';
import './App.css';
import Navbar from '../Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Components/Contents/pages/Home';
import Reports from '../Components/Contents/pages/Reports';
import Products from '../Components/Contents/pages/Products';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
