import React from 'react'
import CardItem from './Carditem'
import './Cards.css'
const Cards=()=> {
    return (
      <div className='cards'>
        <h1>CATEGORIES</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/adventure.jpg'
                text='ADVENTURE'
                label='Adventure'
                path='/adventure'
              />
              <CardItem
                src='images/racing.jpg'
                text='RACING'
                label='RACING'
                path='/racing'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/action.jpg'
                text='ACTION'
                label='ACTION'
                path='/action'
              />
              <CardItem
                src='images/sports.jpg'
                text='SPORTS'
                label='SPORTS'
                path='/sports'
              />
              <CardItem
                src='images/strategy.jpg'
                text='STRATEGY'
                label='STRATEGY'
                path='/strategy'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cards;