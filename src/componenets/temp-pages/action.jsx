import React from 'react'
import ProductItem from '../Productitem'
import '../pages/products.css'
const Action=()=>{
  return(
      <div>
        
        <div className='product__container'>
        <ul className='product__items'>
        <ProductItem src='images/BREAKPOINT.jpg' text='TOM CLANCY:BREAKPOINT'/>  
        <ProductItem src='images/action-2.jpg' text='TOM CLANCY:WILDLAND'/>    
        </ul>
        <ul className='product__items'>
        <ProductItem src='images/PUBG.jpg' text='PUBG'/>
        <ProductItem src='images/GTA-5.jpg' text='GTA-5'/> 
        </ul>
        </div>
      </div>
  )
}
export default Action