import React, { useState ,useEffect } from 'react'

const TIme = () => {

    const [time, setTime] = useState(new Date()) 

    useEffect(() => {
        const timer = setInterval(() => {
           setTime(new Date()) 
        }, 1000);
    })
    
  return (
    <>
        <div>{time.toLocaleTimeString()}</div>
    </>
  )
}

export { TIme }