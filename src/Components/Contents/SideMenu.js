import React from 'react'
import { makeStyles, withStyles } from "@material-ui/core";
import Navbar from '../Navbar';

// withStyles & makeStyles

const useStyles = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '250px',
        height: '100%',
        backgroundColor: '#3f51b5'
      
    }
}

const SideMenu = (props) => {
    const { classes } = props;
    return (
        <div className={classes.sideMenu}>
    

        </div>
    )
}

export default withStyles(useStyles)(SideMenu);