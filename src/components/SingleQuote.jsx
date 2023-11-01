import React from 'react'
import { quotes } from '../db/quotes'


const randomQuote  = () => {
    const random = Math.floor(Math.random() * quotes.length)
    return quotes[random]
}

const SingleQuote = () => {

    const {quoteText, quoteAuthor} = randomQuote()

    return (
    <section className='quote-container'>
        <p>{quoteText}</p>
        <span>{quoteAuthor}</span>
    </section>
  )
}

export { SingleQuote }