import React from 'react';
//import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input'
import PhoneInput from 'react-phone-number-input'


  export default function Phone(props) {

    const { name, label, value,error=null, onChange, ...other } = props;

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })
    return (
      

<PhoneInput
  placeholder="Enter phone number"
  value={value}
  onChange={onChange}/>
      
    )
}