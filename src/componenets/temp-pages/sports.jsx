import React from 'react'
import ProductItem from '../Productitem'
import '../pages/products.css'
const Sports=()=>{
  return(
      <div>
        
        <div className='product__container'>
        <ul className='product__items'>
        <ProductItem src='images/FIFA20.jpg' text='FIFA-20'/>
        </ul>
        <ul className='product__items'>
        <ProductItem src='images/UFC3.png' text='UFC3'/>
        </ul>
        </div>
      </div>
  )
}
export default Sports