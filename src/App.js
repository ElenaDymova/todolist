import CreateTask from "./components/Tasks/CreateTask";
import TaskList from "./components/Tasks/TaskList";
import React, { useState, useEffect  } from "react";

const App = () => {

  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const loadedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTaskList(loadedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }, [taskList]);

  const createTaskHandler = (taskName, comment) => {
    setTaskList((prevTaskList) => {
      return [...prevTaskList, {taskName: taskName, comment: comment, id: Math.random().toString()}]
    });
  }

  const deleteTaskHandler = (taskId) => {
    setTaskList(prevTaskList => prevTaskList.filter(task => task.id !== taskId));
  }

  return <div>
    {/* <h1>To do list</h1> */}
    <CreateTask onCreateTask={createTaskHandler}/>
    <TaskList tasks={taskList} onDeleteTask={deleteTaskHandler}/>
  </div>;
};

export default App;
