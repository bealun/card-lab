import React, { useState } from 'react'
import { Card } from './components/Card'
import {Overlay} from './components/Overlay'
import './lemon.css'

const LemonStyle = {
  title: 'Lemon',
  emoji: '🍋',
  text: 'This is a very tasty fruit',
  submitMessage: 'Order Now',
  cardStyle: 'lemon-card',
  titleColor: 'lemon-title',
  contentCard: 'lemon-content',
  contentText: 'lemon-content-text',
  buttonStyle: 'lemon-button'
}

const DogStyle = {
  title: 'Dog',
  emoji: '🐶',
  text: 'This is a very cute dog',
  submitMessage: 'adopt me',
  cardStyle: 'dog-card',
  titleColor: 'dog-title',
  contentCard: 'dog-content',
  contentText: 'dog-content-text',
  buttonStyle: 'dog-button'
}

const SpaceStyle = {
  title: 'Rocket',
  emoji: '🚀',
  text: 'Join us into the outer space',
  submitMessage: 'Book seat',
  cardStyle: 'space-card',
  titleColor: 'space-title',
  contentCard: 'space-content',
  contentText: 'space-content-text',
  buttonStyle: 'space-button'
  
}

export const App = (props) => {
const [showOverlay, setShowOverlay] = useState(false)
  
const handleClick = (event) => {
  event.preventDefault()
  setShowOverlay(true)
    
 }

  return (

    <div>
    <div>
      {!showOverlay ? ( 
      <Card {...SpaceStyle} 
      handleClick={handleClick}  />
        ) : (
      <Overlay title='Rocket' emoji='🚀'/> ) }
    </div>

    <div>
      {!showOverlay ? (
      <Card {...LemonStyle} 
         handleClick={handleClick}  />
          ) : (
      <Overlay title='Lemon' emoji='🍋'
      overlayTop='styleTop' overlayBottom='styleButtom' /> ) }
    </div>

    <div>
      {!showOverlay ? ( 
      <Card {...DogStyle} 
         handleClick={handleClick} />
        ) : (
      <Overlay title='Dog' emoji='🐶'/> ) }
    </div>
  </div>
  )
}
