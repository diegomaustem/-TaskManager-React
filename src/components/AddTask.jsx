import { useState } from "react";

export default function AddTask({ OnAddTaskSubmit }) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  function clearFieldsAfterInsertion() {
    setTitle("");
    setDescription("");
  }

  function validationFields() {
    if (!title.trim() || !description.trim()) {
      return alert("The fields can't empty");
    }
    return true;
  }

  return (
    <div className="space-y-4 p-6 bg-my-gray rounded-md shadow flex flex-col">
      <input
        className="border border-slate-300 h-10 outline-cyan-200 px-4 px-2 rounded-md"
        type="text"
        placeholder="Task Name"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        className="border border-slate-300 h-10 outline-cyan-200 px-4 px-2 rounded-md"
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (validationFields() == true) {
            OnAddTaskSubmit(title, description), clearFieldsAfterInsertion();
          }
        }}
        className="bg-dark-blue text-white p-2 rounded-md"
      >
        Add Task
      </button>
    </div>
  );
}
