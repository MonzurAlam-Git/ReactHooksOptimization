import React, { Dispatch, ReactNode, createContext, useState } from "react";

/* Global context in React is created using the createContext() function, which returns an object with two components: the Provider and the Consumer. 
The Provider component is used to define the data that needs to be shared and make it available to all child components that use the Consumer	*/

type TThemeContext = {
  dark: boolean;
  setDark: Dispatch<React.SetStateAction<boolean>>;
};

type TThemeProvider = {
  children: ReactNode;
};

export const ThemeContext = createContext<TThemeContext | undefined>(undefined);

const ThemeProvider = ({ children }: TThemeProvider) => {
  const [dark, setDark] = useState(false);
  const values = { dark, setDark };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
