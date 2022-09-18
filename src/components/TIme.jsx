import React, { useState ,useEffect } from 'react'

const Time = () => {

    const [time, setTime] = useState(new Date()) 

    useEffect(() => {
        setInterval(() => {
           setTime(new Date()) 
        }, 20000);
    })

    const hours = time.getHours().toLocaleString("en-US", {minimumIntegerDigits : 2})

    const minutes = time.getMinutes().toLocaleString("en-US", {minimumIntegerDigits : 2})
    
  return (
    <>
        <div>{hours} : {minutes} </div>
    </>
  )
}

export { Time }