import { useState } from "react";
import TaskCard from "./assets/TaskCard";
import "./App.css";

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: number;
}

function App() {
  const [task, setTask] = useState<Task[]>([]);
  const [title, setTitle] = useState<string>("");
  // const [formData, setFormdata] = useState<Omit<Task, "id" | "completed">>({
  //   title: "",
  // });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
      priority: 1,
    };

    setTask((prev) => [...prev, newTask]);
    setTitle("");
  };

  const ToggleComplete = (id: number) => {
    setTask((prev) =>
      prev.map((n) => (n.id == id ? { ...n, completed: !n.completed } : n))
    );
  };

  const handleDelete = (id: number) => {
    setTask((prev) => prev.filter((n) => n.id !== id));
  };

  // const ChangePriority = (id = {});

  console.log(task);

  return (
    <>
      <div className="rounded-full  mx-auto my-5 bg-green-400 text-white text-2xl font-bold flex justify-center items-center p-4 w-[100px] h-[100px] shadow-xl cursor-pointer">
        new task
      </div>
      {title}

      <form className="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          className="w-1/3 border-2 border-red-600 rounded-xl px-4 py-3 text-md"
          onChange={handleChange}
        />
      </form>

      {task.map((item, index) => (
        <TaskCard
          key={index}
          title={item.title}
          completed={item.completed}
          priority={item.priority}
          onClick={() => ToggleComplete(item.id)}
          onDelete={() => handleDelete(item.id)}
        />
      ))}
    </>
  );
}
export default App;
