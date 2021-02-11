import React, { useState } from "react";
import "./theme.css";
const Theme = (props) => {
  const [theme, settheme] = useState({ flag: true, color: "red" });
  const colorChanger = () => {
    console.log("hello");
    const newTheme = { ...theme };
    newTheme.flag = !newTheme.flag;
    if (theme.flag) {
      newTheme.color = "blue";
    } else {
      newTheme.color = "red";
    }

    settheme(newTheme);
  };
  return (
    <button
      className="btn-theme"
      onClick={() => {
        colorChanger();
        return props.themeHandler(theme.color);
      }}
    >
      Change the Background
    </button>
  );
};

export default Theme;
