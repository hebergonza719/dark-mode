import React from 'react';
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = () => {
  // const [darkMode, setDarkMode] = useState(false);
  // false is being passed down as initialValue
  const [darkMode, setDarkMode] = useDarkMode(false);


  const toggleMode = e => {
    e.preventDefault();
    // setDarkMode(!darkMode);
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
