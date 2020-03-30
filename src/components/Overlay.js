import React from 'react'
import { Title } from './Title'


export const Overlay = (props) => {

  return (
    <div className="overlayDiv">
      <section className="overlayTop">
        <Title title={props.title} />
      </section>

      <section className="overlayBottom">
        <Title emoji={props.emoji} />
      </section>
    </div>
  )
}