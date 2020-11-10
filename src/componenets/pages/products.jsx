import React from 'react'
import ProductItem from '../Productitem'
import './products.css'
const products=()=>{
  return(
      <div>
        <div className='product__container'>
        <ul className='product__items'>
        <ProductItem src='images/SPLINTER.jpg' text='SPLINTE CELL: BLACKLIST'/>
        <ProductItem src='images/strategy.jpg' text='HITMAN'/>
        <ProductItem src='images/FIFA20.jpg' text='FIFA-20'/>
        </ul>
        <ul className='product__items'>
        <ProductItem src='images/UFC3.png' text='UFC3'/>
        <ProductItem src='images/NFS.jpg' text='NEED FOR SPEED'/>
        <ProductItem src='images/DIRT.jpg' text='DIRT4'/>
        </ul>
        
        <ul className='product__items'>
        <ProductItem src='images/TOM.png' text='TOMB RAIDER'/>
        <ProductItem src='images/POP.jpg' text='PRINCE OF PERSIA'/>
        <ProductItem src='images/BREAKPOINT.jpg' text='TOM CLANCY:BREAKPOINT'/>  
        </ul>
        <ul className='product__items'>
        <ProductItem src='images/action-2.jpg' text='TOM CLANCY:WILDLAND'/> 
        <ProductItem src='images/PUBG.jpg' text='PUBG'/>
        <ProductItem src='images/GTA-5.jpg' text='GTA-5'/> 
        </ul>
        </div>
      </div>
  )
}
export default products
