import { useState, useEffect } from "react";

const Greeting = () => {
    const [greeting, setGreeting] = useState("")

    useEffect(() => {
        const greetTime = new Date().getHours()
        
        if(greetTime < 4) setGreeting("Good Night")
        else if(greetTime < 11 ) setGreeting("Good Morning")
        else if(greetTime < 16) setGreeting("Good Afternoon")
        else setGreeting("Good Night")
    }, [])

    return(
        <>
            <div>{greeting}</div>
        </>
    )
}

export { Greeting }