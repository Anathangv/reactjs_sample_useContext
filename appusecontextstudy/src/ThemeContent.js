
import React, {useState, useContext} from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme(){
	return useContext(ThemeContext);
}

export function useThemeUpdate(){
	return useContext(ThemeUpdateContext);
}


export function ThemeProvider({ children }){

	const [pinkTheme, setPinkTheme] = useState(false);

	function changeTheme(){
		setPinkTheme(prevPinkTheme => !prevPinkTheme);
	}

	return(
		<ThemeContext.Provider value={pinkTheme}>
			<ThemeUpdateContext.Provider value={changeTheme}>
				{children}
			</ThemeUpdateContext.Provider>
		</ThemeContext.Provider>
	);
}