import React, { Fragment } from 'react'
import { Grid, Typography, List,ListItem, ListItemText,Card  } from '@material-ui/core'
import { makeStyles, withStyles } from "@material-ui/core";

// withStyles & makeStyles

const style = {
    ContentArea: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '250px',
        width: '100%',
        height: '100%',
        backgroundColor: 'LightBlue'
    }   
}

const ContentArea = (props) => {
    const { classes } = props;
    return (
        <div className={classes.ContentArea}>
 
        </div>
    )
}

export default withStyles(style)(ContentArea);