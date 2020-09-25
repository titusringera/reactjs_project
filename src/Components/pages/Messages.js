import React,{useState} from 'react';
import 'react-phone-number-input/style.css';
import { makeStyles} from '@material-ui/core';
import flags from 'react-phone-number-input/flags';
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber ,
  isPossiblePhoneNumber} from 'react-phone-number-input'
  const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2),
    },
    PhoneInput:{
      padding: '20px',
      width: '20%',
  },
    label: {
        textTransform: 'none'
    }

}))

function Messages(props) {
  const classes = useStyles();
  const [value, setValue] = useState();
  return (
    <div className={classes.root}>
    <PhoneInput
    
     international
     defaultCountry="KE"
  value={value}
  onChange={setValue}
  error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}/>
<br></br>
Is possible: {value && isPossiblePhoneNumber(value) ? 'true' : 'false'}<br></br>
Is valid: {value && isValidPhoneNumber(value) ? 'true' : 'false'}<br></br>
National: {value && formatPhoneNumber(value)}<br></br>
International: {value && formatPhoneNumberIntl(value)}<br></br>
    </div>
  );
}

export default Messages;

 
