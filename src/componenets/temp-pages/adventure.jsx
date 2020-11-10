import React from 'react'
import ProductItem from '../Productitem'
import '../pages/products.css'
const Adventure=()=>{
  return(
      <div>
        
        <div className='product__container'>
        <ul className='product__items'>
        <ProductItem src='images/TOM.png' text='TOMB RAIDER'/> 
        </ul>
        <ul className='product__items'>
        <ProductItem src='images/POP.jpg' text='PRINCE OF PERSIA'/>
        </ul>
        </div>
      </div>
  )
}
export default Adventure