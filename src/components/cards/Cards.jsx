import CardItem from "./CardItem";
import "./Cards.css"

import React from 'react'

function Cards() {
    return (
        <div>
            <div className="cards">
                <h1>Check Out these EPIC Destination</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                    <ul className='cards__items'>
            <CardItem
              src='images/disney.jpg'
              text='collection of adventures, rides, and shows'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/hawaii.jpg'
              text="Travel through Hawaii, the world's largest island chain"
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/canyon.jpg'
              text="one of nature's most wondrous creations – the slot canyon"
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/goldengate.jpg'
              text='The Golden Gate Bridge, a marvel of modern engineering'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/liberty.jpg'
              text='Colossal neoclassical sculpture on Liberty Island in New York Harbor'
              label='History'
              path='/sign-up'
            />
          </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cards
