import React, { useEffect, useState } from 'react';

const ToggleTheme = () => {

  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return document.body.classList.contains('dark-theme');
  });

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
    document.body.classList.toggle('dark-theme');
  };

  const light = <><i className="ri-sun-line"></i>theme</>;
  const dark = <><i className="ri-moon-line"></i>theme</>;

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  return (
    <button id="toggleTheme" onClick={toggleTheme}>
      {isDarkTheme ? light : dark}
    </button>
  );
};

export default ToggleTheme;
