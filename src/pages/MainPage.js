import React from 'react'
import { Greeting } from '../components/Greeting'
import { SingleQuote } from '../components/SingleQuote'
import { Time } from '../components/Time'
import { Todo } from '../components/Todo'
import { Weather } from '../components/Weather'

const MainPage = () => {
  return (
    <div style={{display: "flex", flexDirection : "column"}}>
      <Weather/>
      <Time/>
      <Greeting/>
      <SingleQuote/>
      <Todo/>
    </div>
  )
}

export { MainPage } 