import { useEffect, useState } from "react";
import { TaskFrame } from "../styles/Task";

export interface TaskInterface {
  id: number;
  name: string;
  status: boolean;
  deleteTask: (id: number) => void;
}

export function Task({ id, name, status, deleteTask }: TaskInterface) {
  const [taskName, SetTaskName] = useState(name);
  const [taskStatus, SetTaskStatus] = useState(status);

  useEffect(() => {
    const storedTaskList = JSON.parse(localStorage.getItem("taskList") || "[]");

    if (storedTaskList.length > 0) {
      const savedTasks = storedTaskList.filter((task: TaskInterface) => task.id !== id);

      const newStoredTaskList = [...savedTasks, { id, name: taskName, status: taskStatus },];

      localStorage.setItem("taskList", JSON.stringify(newStoredTaskList));
    }
  }, [taskName, taskStatus]);

  function handleCheck(): void {
    SetTaskStatus(!taskStatus);
  }

  function handleChangeName(newName: string): void {
    SetTaskName(newName);
  }

  return (
    <TaskFrame key={id} className="task" style={{ listStyle: "none" }}>
      <input type="checkbox" checked={taskStatus} onChange={handleCheck} />
      <input
        type="text"
        value={taskName}
        onChange={(event) => handleChangeName(event.target.value)}
        disabled={taskStatus}
      />
      <button onClick={() => deleteTask(id)}>Trash</button>
    </TaskFrame>
  );
}
