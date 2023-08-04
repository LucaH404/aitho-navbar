import React, { createContext } from 'react';

type ThemeType = 'dark' | 'light'; 

export const ThemeContext = createContext<ThemeType>('dark'); 

type DarkModeContextProps = {
  theme: ThemeType; 
  children?: JSX.Element;
}

export const DarkModeContext = (props: DarkModeContextProps) => {
  return (
    <ThemeContext.Provider value={props.theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};
