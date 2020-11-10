import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Button from './Button'
import { useEffect } from 'react'


function Navbar(){
   const[click,setClick]=useState(false)   
   const [button,setButton]=useState(true)
   
   const handleClick=()=>setClick(!click)
   const closeMobilMenu=()=>setClick(false)

   const showButton=()=>{
       if (window.innerWidth<=960){
           setButton(false)
       }
       else{
           setButton(true)
       }
   }
   useEffect(()=>{
       showButton()
   },[])

   const[darkMode,setdarkMode]=useState(true)

   window.addEventListener('resize',showButton)

    return(
        <nav className='navbar'>
            <div className='navbar-container'>
               <Link to='/' className='navbar-logo'onClick={closeMobilMenu}>
                   <i className='fas fa-gamepad'/>
               </Link>
               <div className='menu-icon'onClick={handleClick}>
                 <i className={click? 'fas fs-times':'fas fa-bars'}/>
               </div>
               <ul className={click===true? 'nav-menu active':'nav-menu'}>
                 <li className='nav-item'>
                     <Link to='/' className='nav-links' onClick={closeMobilMenu}>
                         HOME
                     </Link>  
                 </li>
                 <li className='nav-item'>
                     <Link to='/services' className='nav-links' onClick={closeMobilMenu}>
                         SERVICES
                     </Link>  
                 </li>
                 <li className='nav-item'>
                     <Link to='/products' className='nav-links' onClick={closeMobilMenu}>
                         PRODUCTS
                     </Link>  
                 </li>
                 <li className='nav-item'>
                     <Link to='/signup' className='nav-links-mobile' onClick={closeMobilMenu}>
                         SIGNIN
                     </Link>  
                 </li>
               </ul>
               
               <Link className='linktext'to='/signup'>{button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}</Link>
            </div>
        </nav>
    )
}
export default Navbar
