import React from 'react'
import { useGlobal } from '../context/GlobalContext'
import "./pages.css"

const WelcomePage = () => {

    const { setName } = useGlobal()

    const nameHandler = (e) => {
        setName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
        localStorage.setItem(
          "username",
          `${e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)}`
        );
      };

  return (
    <div className='welcome-container'>
        <div className='welcome-text'>Hello! Please Enter your name</div>
        <input type="text" className='welcome-input'
        onKeyDown={(e) => e.code === "Enter" && e.target.value !== "" && nameHandler(e)}/>
    </div>
  )
}

export { WelcomePage }