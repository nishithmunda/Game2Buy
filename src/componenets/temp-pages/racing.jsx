import React from 'react'
import ProductItem from '../Productitem'
import '../pages/products.css'
const Racing=()=>{
  return(
      <div>
        
        <div className='product__container'>
        <ul className='product__items'>
        <ProductItem src='images/NFS.jpg' text='NEED FOR SPEED'/>
        </ul>
        <ul className='product__items'>
        <ProductItem src='images/DIRT.jpg' text='DIRT4'/>
        </ul>
        </div>
      </div>
  )
}
export default Racing