import React, { useState } from "react";
import "./todoapp.css";
const TodoApp = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };
      setTaskList([...taskList, taskDetails]);
    }
  };
  const deletetask = (e, id) => {
    e.preventDefault();
    setTaskList(taskList.filter((t) => t.id !== id));
  };
  const taskCompleted = (e, id) => {
    const taskId = taskList.findIndex((item) => item.id === id);
    const newTask = [...taskList];
    newTask[taskId] = {
      ...newTask[taskId],
      isCompleted: true,
    };
    setTaskList(newTask);
  };
  return (
    <div className="todo">
      {" "}
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        name="text"
        id="text"
        placeholder="Add task here...."
      />
      <button className="add-btn" onClick={addTask}>
        Add
      </button>
      <ul>
        {taskList.map((item) => (
          <li
            className={item.isCompleted ? "crossText" : "listitem"}
            key={item.id}
          >
            {item.value}{" "}
            <button
              className="completed"
              onClick={(e) => taskCompleted(e, item.id)}
            >
              Completed
            </button>
            <button className="delete" onClick={(e) => deletetask(e, item.id)}>
              Delete
            </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
