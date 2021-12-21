import React, {useEffect} from "react"
import {useTheme, useThemeUpdate} from './ThemeContent'

export default function ChildComponentAdvanced(){

  const pinkTheme = useTheme();
  const changeTheme = useThemeUpdate();

  const themeStyle = {
    backgroundColor: pinkTheme ? '#d638be' : '#CCC',
    color: pinkTheme ? '#fff' : '#333',
    padding: '2rem',
    margin: '2rem',
  }

  console.log("pinkTheme",pinkTheme);

  return(
    <>
      {console.log("render pinkTheme",pinkTheme)}
      <h1>This part is the advanced on useContext</h1>
      <button onClick={() => {changeTheme(prevPinkTheme => !prevPinkTheme)}}>Click to change theme</button>
      <div style={themeStyle}>Pink Mode: {String(pinkTheme)}</div>
    </>
  )
}
