import { ChevronsRightIcon, Trash2 } from "lucide-react";

export default function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  return (
    <h1 className="text-red-500">
      <ul className="space-y-4 p-6 bg-my-gray rounded-md shadow">
        {tasks.map((task) => (
          <li key="task.id" className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-dark-blue w-full text-left text-white p-2 rounded-md ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.title}
            </button>
            <button className="bg-dark-blue text-white p-2 rounded-md">
              <ChevronsRightIcon />
            </button>
            <button
              onClick={() => onDeleteTaskClick(task.id)}
              className="bg-dark-blue text-white p-2 rounded-md"
            >
              <Trash2 />
            </button>
          </li>
        ))}
      </ul>
    </h1>
  );
}
