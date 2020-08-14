import React from 'react';


import {AppBar, Toolbar,Typography,Button} from '@material-ui/core'
import CreateDialog from '../Contents/Dialogs/create'

export default prons=>
<div>
<AppBar position="static">
  <Toolbar>
    
    <Button color="inherit">Login</Button>
    <Typography variant="headline" color="inherit" style={{flex: 1}} >
 
  </Typography>
  <CreateDialog/>
 
  </Toolbar>
 
 
  
</AppBar>
</div>
