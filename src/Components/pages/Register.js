import React, { Component } from 'react'
import { register } from '../UserFunctions'
import { Grid,Toolbar,makeStyles} from '@material-ui/core';
import { useForm, Form } from '../Layouts/useForm';
import Controls from "../controls/Controls";
const useStyles = makeStyles(theme => ({
  
    mainTitle: {
        width: '100%'
    },
       
}))
export default function Register() {

const classes=useStyles();
    
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const initialFValues = {
        id: 0,
        first_name: '',
        last_name:'',
        email: '',
        password: '',
        
    }
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
           // employeeService.insertEmployee(values)
            resetForm()
        }
    }
 
    return (
        <div className='register'>
        
        <Form onSubmit={handleSubmit}>
            <Grid container>
            <Toolbar className={classes.mainTitle}>
             <h3  >Registration Page</h3>
           </Toolbar>
           
                <Grid item xs={9}>
                    <Controls.Input
                        
                        label="First Name"
                        name="first_name"
                        placeholder="Enter your first name"
                        value={values.first_name}
                       
                        onChange={handleInputChange}
                        error={errors.first_name}
                    />
                    <Controls.Input
                        
                        label="Last Name"
                        name="last_name"
                        placeholder="Enter your last name"
                        value={values.last_name}
                       
                        onChange={handleInputChange}
                        error={errors.last_name}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Password"
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleInputChange}
                        error={errors.password}
                    />
                    

             
              

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Register" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
      
      </div>
    )
  }
