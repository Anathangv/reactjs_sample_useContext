import React, { useContext } from "react"
import { ThemeContext } from './App'

export default function ChildComponent(){

  const darkTheme = useContext(ThemeContext);

  const themeStyle = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#fff' : '#333',
    padding: '2rem',
    margin: '2rem',
  }

  console.log("darkTheme",darkTheme);

  return(
    <>
      <div style={themeStyle}>Dark Mode: {String(darkTheme)}</div>
    </>
  )
}
