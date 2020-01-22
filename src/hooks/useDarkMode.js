import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";


// why should I add initialValue = {}?
export const useDarkMode = (initialValue = {}) => {
  
  // toggleDarkMode is the key created for it to find
  const [darkMode, setDarkMode] = useLocalStorage("toggleDarkMode", initialValue); // initialValue comes from Navbar when using useDarkMode

  // there is a callback inside of useEffect
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  
  // this is thrown back to Navbar in this case
  return [darkMode, setDarkMode];
}