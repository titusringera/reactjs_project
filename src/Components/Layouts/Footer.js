import React from 'react'

import {Paper, Tab,Tabs,makeStyles} from '@material-ui/core'
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor:  '#3f51b5'
  },
    grow: {
      flexGrow: 1,
    },
    appFooter: {
      marginLeft:'250px',
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      left: '250px',
      width: '250px',
      height: '100%',
      backgroundColor: '#fff'
    
  },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginLeft:'10%',
    // display: 'none',
    width:'20em',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },

}));
export default ({ muscles, category, onSelect }) => {
  const classes = useStyles();
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0
  const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? '' : muscles[index - 1])

  return <Paper className="classes.appFooter">
    <Tabs
       value={index}
      // onChange={onIndexSelect}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="All" />
      {muscles.map(group =>
        <Tab key={group} label={group} />
      )} 
      <Tab key="sd" label="menu" />
    </Tabs>
  </Paper>
}