import React from 'react';
import { Grid, Paper, Typography, List,ListItem, ListItemText,Card, colors, GridList  } from '@material-ui/core'
//import { } from '@material-ui/List'
import SideMenu from './SideMenu';
import ContentArea from './ContentArea';
const styles = {
  Container :{
    
  },
  Paper: {
    padding: 20,
    
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    width: '40%',
    overflowY: 'auto'
  },

  Card: {
    
    paddingLeft: 258,
      _padding: 20,
      marginLeft: '-50%',
      get padding() {

          return this._padding
      },
      set padding(value) {
          this._padding = value
      },
    marginTop: 10,
    marginBottom: 10,
    height: 600,
 
    overflowY: 'auto'
  }
}

export default ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = 'Welcome!',
    description = 'Please select an exercise from the list on the left.'
  }
 }) =>
 <Grid>
<SideMenu/>
 <ContentArea/>
 </Grid>
 