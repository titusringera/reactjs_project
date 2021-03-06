import React, { Component,Fragment } from 'react'
import {Dialog,Button,
    DialogActions,DialogContent,DialogContentText,DialogTitle,IconButton, Badge,
    TextField} from '@material-ui/core'
    import PersonAdd from '@material-ui/icons/PersonAdd';
    import Fab from '@material-ui/core/Fab'
    import AddIcon from '@material-ui/icons/Add';
export default class extends Component {
    state={
        open:false
    }
    handleToggle = () =>
    {
        this.setState({
            open: !this.state.open
        })
    }
    render(){
        const{open}=this.state
        return(
            <Fragment>
               <IconButton >
                              <Badge  color="secondary">
                                  <PersonAdd style={{color:'white'}} onClick={this.handleToggle} mini fontSize="small" />
                              </Badge>
                          </IconButton>
               
     
                

<Dialog open={open} onClose={this.handleToggle} >
  <DialogTitle id="form-dialog-title">Create new Exercises</DialogTitle>
  <DialogContent>
    <DialogContentText>
     Please fill out the form
    </DialogContentText>
    <form>
    <TextField
      autoFocus
      margin="dense"
      id="name"
      label="Email Address"
      type="email"
      fullWidth
    />
    </form>
    
  </DialogContent>
  <DialogActions>
  
    <Button  color="primary">
      Create
    </Button>
  </DialogActions>
</Dialog>

</Fragment>
        )
    }

}