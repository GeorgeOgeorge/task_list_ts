import { ReactElement, useState } from "react";
import { TaskInterface } from "../interfaces/task_interface";
import { ListFrame, TaskListButton } from "../styles/TaskList";
import { Task } from "./Task";

export function TaskList(): ReactElement {
  const [taskList, setTaskList] = useState(loadTaskList());

  function loadTaskList(): TaskInterface[] {
    const storedTaskList = localStorage.getItem("taskList");

    if (storedTaskList) {
      return JSON.parse(storedTaskList);
    } else {
      localStorage.setItem("taskList", JSON.stringify([]));
      return [];
    }
  }

  function handleDeleteTask(taskId: number): void {
    const updatedTaskList = taskList.filter((task) => task.id !== taskId);
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
    setTaskList(updatedTaskList);
  }

  function handleAddTask(): void {
    const newTask = {
      id: taskList[taskList.length - 1]?.id + 1 || 1,
      name: "",
      status: false,
      deleteTask: handleDeleteTask,
    };
    const newList = [...taskList, newTask];
    setTaskList(newList);
  }

  return (
    <>
      {taskList.length > 0 && (
        <ListFrame>
          <ul>
            {taskList.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                name={task.name}
                status={task.status}
                deleteTask={handleDeleteTask}
              />
            ))}
          </ul>
        </ListFrame>
      )}
      <TaskListButton onClick={() => handleAddTask()}> + New Task</TaskListButton>
    </>
  );
}
