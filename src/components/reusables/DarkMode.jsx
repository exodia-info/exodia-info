import React, { useState, useEffect } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-700"
    >
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
}

export default DarkModeToggle;
