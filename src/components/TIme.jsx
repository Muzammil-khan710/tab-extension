import React, { useState ,useEffect } from 'react'

const Time = () => {

    const [time, setTime] = useState(new Date()) 

    useEffect(() => {
        setInterval(() => {
           setTime(new Date()) 
        }, 20000);
    })

    const hours = time.getHours()

    const minutes = time.getMinutes()
    
  return (
    <>
        <div>{hours} : {minutes} </div>
    </>
  )
}

export { Time }