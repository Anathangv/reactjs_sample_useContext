import React from "react";

export const ThemeContext = React.createContext();  

function App() {

  return (
    <ThemeContext.Provider value="teste">
      <h1>this is the beggin</h1>
    </ThemeContext.Provider>
  );
}

export default App;
