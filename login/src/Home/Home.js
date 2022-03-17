import React, { Component, useState } from 'react';
import "./Theme.css";
function Home() {
    const [darkMode, setDarkMode] = useState(false);
    return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
    </div>
  );
  }
export default Home;