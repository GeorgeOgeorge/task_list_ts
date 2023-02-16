import { useState } from "react";

export interface TaskInterface {
  id: number;
  name: string;
  category: string;
  status: boolean;
  deleteTask: (id: number) => void;
}

export function Task({
  id,
  name,
  category,
  status,
  deleteTask,
}: TaskInterface) {
  const [taskName, SetTaskName] = useState(name);
  const [taskStatus, SetTaskStatus] = useState(status);

  function handleCheck(): void {
    SetTaskStatus(!taskStatus);
  }

  function handleChangeName(newName: string): void {
    SetTaskName(newName);
  }

  return (
    <li key={id} className="task" style={{ listStyle: "none" }}>
      <input type="checkbox" checked={taskStatus} onChange={handleCheck} />
      <input
        type="text"
        value={taskName}
        onChange={(event) => handleChangeName(event.target.value)}
        disabled={taskStatus}
      />
      <button onClick={() => deleteTask(id)}>Trash</button>
    </li>
  );
}
