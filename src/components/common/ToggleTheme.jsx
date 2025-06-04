import React, { useEffect, useState } from 'react';

const ToggleTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkTheme');
    return savedTheme !== null
      ? JSON.parse(savedTheme)
      : document.body.classList.contains('dark-theme');
  });

  const toggleTheme = () => {
    setIsDarkTheme(prev => {
      const newTheme = !prev;
      localStorage.setItem('isDarkTheme', JSON.stringify(newTheme));
      return newTheme;
    });

    setTimeout(() => {
      window.location.reload();
    }, 50);
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
