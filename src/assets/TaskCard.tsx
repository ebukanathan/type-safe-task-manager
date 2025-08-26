interface Props {
  id?: number;
  title: string;
  completed?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function TaskCard({ title, completed, onClick }: Props) {
  return (
    <div className="w-2/3 mx-auto my-2 rounded=xl shadow-xl flex justify-between items-center px-4">
      <div className={`${completed ? "" : "line-through"}`}>{title}</div>
      <div className="flex gap-2 p-1">
        <button
          className="px-3 py-1  rounded-xl bg-green-300"
          onClick={onClick}
        >
          {completed ? "complete" : "undo"}
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
