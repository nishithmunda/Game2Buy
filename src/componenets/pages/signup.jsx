import React,{useState} from 'react'
import '../../App.css'
import Button from '../Button'
import Form from '../Form'

const Signup=()=>{
    const[nameState,setnameState]=useState('')
    const[phoneState,setphoneState]=useState('')
    const[emailState,setemailState]=useState('')
    const[passwordState,setpasswordState]=useState('')
    const[darkMode,setdarkMode]=useState(true)

    const onChangename=(event)=>{
       setnameState({
           nameState:event.target.value
       })
    }
    const onChangephone=(event)=>{
        setphoneState({
            phoneState:event.target.value
        })
    }
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
     <Form darkMode={darkMode}/>   
    </div>

    )
}
export default Signup