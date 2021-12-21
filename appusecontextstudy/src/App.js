import React, {useState, useEffect} from "react";
import  ChildComponent  from './ChildComponent'
import ChildComponentAdvanced from "./ChildComponentAdvanced";
import { ThemeProvider } from "./ThemeContent";

export const ThemeContext = React.createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <>
      {/* simple */}
      <ThemeContext.Provider value={darkTheme}>
        <h1>This part is the basic on useContext</h1>
        <button onClick={() => {setDarkTheme(prevDarkTheme => !prevDarkTheme)}}>Click to change theme</button>
        <ChildComponent />
      </ThemeContext.Provider>


      {/* advanced */}
      <ThemeProvider>
        <ChildComponentAdvanced />
      </ThemeProvider>
    </>
  );
}

export default App;
