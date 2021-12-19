import React, {useState, useEffect} from "react";
import  ChildComponent  from './ChildComponent'

export const ThemeContext = React.createContext();


function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    console.log('darkTheme:',darkTheme);
  },[darkTheme]);

  return (
    <ThemeContext.Provider value={darkTheme}>
      <h1>This part is the basic on useContext</h1>
      <button onClick={() => {setDarkTheme(prevDarkTheme => !prevDarkTheme)}}>Click to change theme</button>
      <ChildComponent />

      <h1>This part is the advanced on useContext</h1>
    </ThemeContext.Provider>
  );
}

export default App;
