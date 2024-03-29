import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "light") {
        return "dark";
      }

      return "light";
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
