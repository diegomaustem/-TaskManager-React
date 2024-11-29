import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Study programation",
      description: "I study react today",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Workout in gim",
      description: "I workout ride a bike",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Get my car in mecanic",
      description: "I study react today",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function OnAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="w-screen h-screen bg-gray-200 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-gray-800 font-bold text-center">
          Tasks Manager
        </h1>
        <AddTask OnAddTaskSubmit={OnAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}
