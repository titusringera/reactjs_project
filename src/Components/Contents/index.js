import React, { Fragment } from 'react'
import { Grid, Paper, Typography, List,ListItem, ListItemText,Card  } from '@material-ui/core'
//import { } from '@material-ui/List'

const styles = {
  container :{
      paddingLeft: '250px'
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
  <Grid container style={styles.container}>
    {/* <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group
            ? <Fragment key={group}>
                <Typography
                  variant="headline"
                  style={{ textTransform: 'capitalize' }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) =>
                    <ListItem
                      key={id}
                      button
                      onClick={() => onSelect(id)}
                    >
                      <ListItemText primary={title} />
                    </ListItem>
                  )}
                </List>
              </Fragment>
            : null
        )}
      </Paper>
    </Grid> */}
    <Grid item sm>
      <Card style={styles.Card}>
        <Typography
          variant="display1"
        >
          {title}
        </Typography>
        <Typography
          variant="subheading"
          style={{marginTop: 20}}
        >
          {description}
        </Typography>
      </Card>
    </Grid>
  </Grid>