import { useState } from "react";
import TaskCard from "./assets/TaskCard";

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: string;
}

type Priority = "low" | "medium" | "high";
function App() {
  const [task, setTask] = useState<Task[]>([]);
  const [title, setTitle] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [filtered, setFiltered] = useState<Priority | "All">("All");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
      priority,
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

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFiltered(e.target.value as Priority | "All");
    console.log(filtered);
  };

  const FilteredTask =
    filtered === "All"
      ? task
      : task.filter((item) => item.priority === filtered);

  console.log(FilteredTask);

  const letsee: Task[] = task.filter((n) => n.priority == filtered);
  console.log(letsee);
  return (
    <div className="w-2/3 mx-auto bg-red-500">
      <div className="rounded-full  mx-auto my-5 bg-green-400 text-white text-2xl font-bold flex justify-center items-center p-4 w-[100px] h-[100px] shadow-xl cursor-pointer">
        new task
      </div>
      {title}

      <form
        className=" w-[400px] mx-auto  rounded-xl border border-red-400  p-3 flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          value={title}
          className="w-full border-2 border-red-600 rounded-xl px-4 py-3 text-md"
          onChange={handleChange}
        />
        <div className="w-[200px]">
          <select name={priority} id="" onChange={handleSelect}>
            <option value="">---choose priority--</option>
            <option value="high">high</option>
            <option value="medium">medium</option>
            <option value="low">low</option>
          </select>
        </div>
      </form>

      <div className="">{filtered}</div>
      <select
        value={filtered}
        onChange={handleFilterChange}
        className="flex border p-2 rounded mb-4 mx-auto "
      >
        <option value="All">All</option>
        <option value="high">High Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="low">Low Priority</option>
      </select>

      {FilteredTask.map((item, index) => (
        <TaskCard
          key={index}
          title={item.title}
          completed={item.completed}
          priority={item.priority}
          onClick={() => ToggleComplete(item.id)}
          onDelete={() => handleDelete(item.id)}
        />
      ))}
    </div>
  );
}
export default App;
