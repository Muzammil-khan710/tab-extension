import React from 'react'
import { quotes } from '../db/quotes'


const randomQuote  = () => {
    const random = Math.floor(Math.random() * quotes.length)
    return quotes[random]
}

const SingleQuote = () => {

    const {quoteText, quoteAuthor} = randomQuote()

    return (
    <div className='quote-container'>
        <div>{quoteText}</div>
        <div>{quoteAuthor}</div>
    </div>
  )
}

export { SingleQuote }