import { useState } from "react";
import "./App.css";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [task, setTask] = useState<Task[]>([]);
  const [formData, setFormdata] = useState<Omit<Task, "id">>({
    title: "",
    completed: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: type == "checkbox" ? checked : value,
    }));
  };

  return (
    <>
      <div className="rounded-full  mx-auto my-5 bg-green-400 text-white text-2xl font-bold flex justify-center items-center p-4 w-[100px] h-[100px] shadow-xl cursor-pointer">
        new task
      </div>
      {formData.title}

      <div className="">
        <input
          type="text"
          name="title"
          value={FormData.title}
          className="w-1/3 border-2 border-red-600 rounded-xl px-4 py-3 text-md"
          onChange={handleChange}
        />
      </div>
    </>
  );
}
export default App;
