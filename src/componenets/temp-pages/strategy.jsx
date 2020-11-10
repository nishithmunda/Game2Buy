import React from 'react'
import ProductItem from '../Productitem'
import '../pages/products.css'
const Strategy=()=>{
  return(
      <div>
        
        <div className='product__container'>
        <ul className='product__items'>
        <ProductItem src='images/SPLINTER.jpg' text='SPLINTE CELL: BLACKLIST'/>
        </ul>
        <ul className='product__items'>
        <ProductItem src='images/strategy.jpg' text='HITMAN'/>
        </ul>
        </div>
      </div>
  )
}
export default Strategy