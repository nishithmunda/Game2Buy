import React, { useState } from 'react'
import './Form.css'
import Input from './Input'
import Button from './Button'
import { Link } from 'react-router-dom';


const Form=(props)=>{
//    const[darkMode,setdarkMode]=useState(true)
      console.log(props.darkMode)
      
  return(
      <div className='main'>
          {/* <button onClick={()=>{setdarkMode(!darkMode)}} buttonSize='btn--medium' buttonStyle='btn--primary' >SWITCH</button> */}
      <div className={props.darkMode ? 'form-content-right-dark' : 'form-content-right'}>
           <form className='form'>
               <h2 className={props.darkMode ? 'form-label-dark': 'form-label'}>SIGNUP </h2>
               <div className='form-input'>
                   <label className={props.darkMode? 'form-label-dark': 'form-label'}>
                       USERNAME
                   </label>   
                   {/* <input className='form-input' type='text' placeholder="USERNAME"></input> */}
                   <Input inputStyle='inp--primary' />
               </div>
               <div className='form-input'>
                   <label className={props.darkMode ? 'form-label-dark': 'form-label'}>
                       EMAIL
                   </label>   
                   {/* <input className='form-input' type='email' placeholder="EMAIL"></input> */}
                   <Input inputStyle='inp--primary' />
               </div>
               <div className='form-input'>
                   <label className={props.darkMode ? 'form-label-dark': 'form-label'}>
                       PASSWORD
                   </label>   
                   {/* <input className='form-input' type='password' placeholder="PASSWORD"></input> */}
                   <Input inputStyle='inp--primary' />
               </div>
               <div className='form-input'>
                   <label className={props.darkMode ? 'form-label-dark': 'form-label'}>
                       CONFIRM PASSWORD
                   </label>   
                   {/* <input className='form-input' type='password' placeholder="CONFIRM-PASSWORD"></input> */}
                   <Input inputStyle='inp--primary' />
               </div>
               
               <Button buttonSize='btn--medium' buttonStyle='btn--primary' type='submit' >SUBMIT</Button>    
               <Link className='login__link' to='./login'><h6 className={props.darkMode ? 'login__link_text-dark': 'login__link_text'}>All_ready_has an account ?</h6></Link>
            </form>  
      </div>   
      </div>     
  )
}
export default Form