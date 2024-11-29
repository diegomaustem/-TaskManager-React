import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

export default function App() {
  return (
    <div className="w-screen h-screen bg-gray-200 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-gray-800 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTask />
        <Tasks />
      </div>
    </div>
  );
}
