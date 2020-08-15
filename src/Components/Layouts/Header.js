import React from 'react';


import {AppBar, Toolbar,Typography,Grid, InputBase, IconButton, Badge, makeStyles ,withStyles} from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import CreateDialog from '../Contents/Dialogs/create';
const useStyles = makeStyles(theme => ({
  root: {
      backgroundColor: '#fff',
      
  },
  searchInput: {
      opacity: '0.6',
      padding: `0px ${theme.spacing(1)}px`,
      fontSize: '0.8rem',
      '&:hover': {
          backgroundColor: '#f9f9f9'
      },
      '& .MuiSvgIcon-root': {
          marginRight: theme.spacing(1)
      },
      borderRadius: 10
  },
  appMain: {
paddingLeft:'250px'
  }
}))
const Header = (props) => {

  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appMain} >
    <Toolbar>
        
      <Grid container
                      alignItems="center">
                      <Grid item>
                          <InputBase
                              placeholder="Search topics"
                              className={classes.searchInput}
                              startAdornment={<SearchIcon fontSize="small" />}
                          />
                      </Grid>
                      <Grid item sm></Grid>

                      <Grid item>
                          <IconButton>
                              <Badge badgeContent={4} color="secondary">
                                  <NotificationsNoneIcon  fontSize="small" />
                              </Badge>
                          </IconButton>
                          <IconButton>
                              <Badge badgeContent={3} color="primary">
                                  <ChatBubbleOutlineIcon fontSize="small" />
                              </Badge>
                          </IconButton>
                          <IconButton>
                              <PowerSettingsNewIcon fontSize="small" />
                          </IconButton>
                      </Grid>
                  </Grid>
      <Typography variant="headline"  style={{flex: 1}} >
   
    </Typography>
    <CreateDialog/>
   
    </Toolbar>
   
   
    
  </AppBar>
  )
}

export default withStyles(useStyles)(Header);
//export default prons=>

