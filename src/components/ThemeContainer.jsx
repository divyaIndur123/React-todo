import React, { useState } from "react";
import TodoApp from "./TodoApp";
import Theme from "./Theme";
const ThemeContainer = () => {
  const [bgColor, setbgColor] = useState("blue");
  const themeHandler = (color) => {
    setbgColor(color);
  };
  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <span className="title"> List</span> <br />
      <Theme themeHandler={themeHandler} />
      <TodoApp />
    </div>
  );
};

export default ThemeContainer;
