import { createMuiTheme }  from '@material-ui/core/styles'
const theme = createMuiTheme({
 
  palette: {
    primary: {
      main: "#3949ab"
    },
    secondary: {
      main: "#3f51b5",
      color: 'white',
    },
    inherit: {
      main: "#ffffff",
     
    }
  },
 
  typography: {
    fontFamily: "Comic Sans MS",
    body2: {
      fontFamily: "Times New Roman",
      fontSize: "1.1rem"
    }
  },
  shape: {
    borderRadius: 10
  },
  spacing: 8,
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: "green"
      }
    },
    MuiInputLabel: {
      root: {
        backgroundColor: "yellow"
      }
    },
    MuiTextField: {
      root: {}
    },
    MuiButton: {
      root: {
        textTransform: "none",
        padding: "10px"
      },
      fullWidth: {
        maxWidth: "300px"
      }
    }
  },
  props: {
    MuiButton: {
      disableRipple: true,
      variant: "contained",
      color: "primary"
    },
    MuiCheckbox: {
      disableRipple: true
    },
    MuiTextField: {
      variant: "filled",
      InputLabelProps: {
        shrink: true
      }
    },
    MuiPaper: {
      elevation: 12
    },
    MuiCard: {
      elevation: 12
    }
  }
})
export default theme