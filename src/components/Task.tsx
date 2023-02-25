import { useEffect, useState } from "react";
import { TaskFrame, TaskTextInput } from "../styles/Task";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { TaskInterface } from "../interfaces/task_interface";

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
    <TaskFrame key={id}>
      <input type="checkbox" checked={taskStatus} onChange={handleCheck} />
      <TaskTextInput
        type="text"
        value={taskName}
        onChange={(event) => handleChangeName(event.target.value)}
        disabled={taskStatus}
      />
      <button onClick={() => deleteTask(id)}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </TaskFrame>
  );
}
