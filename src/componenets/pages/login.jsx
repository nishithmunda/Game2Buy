import React, { useState } from 'react';
import '../../App.css'
import Button from '../Button'
import Form2 from '../Form2'

const Login=()=>{
    
    const[passwordState,setpasswordState]=useState('')
    const[emailState,setemailState]=useState('')
    const[darkMode,setdarkMode]=useState(true)



    const onChangeemail=(event)=>{
        setemailState({
            emailState:event.target.value
        })
    }   
    const onChangepassword=(event)=>{
        setpasswordState({
            passwordState:event.target.value
        })
    }   
 


    return(
    <div>
     <Button buttonSize='btn--small' buttonStyle='btn--primary' onClick={()=>{setdarkMode(!darkMode)}}>DARKMODE</Button>
     <Form2 darkMode={darkMode}/>    
    </div>

    )
}
export default Login