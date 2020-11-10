import React from 'react';
import { Link } from 'react-router-dom';

const Productitem=(props)=>
{
   return(
       <li className='product__item'>
           <Link className='product__item__link' to={props.path}>
               <figure className='product__item__pic-wrap'>
                   <img
                    className='product__item__img'
                    alt='ITEM1'
                    src={props.src} 
                    >   
                   </img>
                </figure>  
          <div className='product__item__info'>
            <h2 className='product__item__text'>{props.text}</h2>
          </div>
           </Link>
       </li>
   )
}
export default Productitem