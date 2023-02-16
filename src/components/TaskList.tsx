import { ReactElement, useState } from "react";
import { TaskInterface, Task } from "./Task";

export function TaskList(): ReactElement {
  const tasksList: TaskInterface[] = [
    {
      id: 0,
      name: "Duffy",
      category: "Chelsea",
      status: false,
      deleteTask: handleDeleteTask,
    },
    {
      id: 1,
      name: "Butch",
      category: "Myranda",
      status: true,
      deleteTask: handleDeleteTask,
    },
  ];

  const [taskList, setTaskList] = useState(tasksList);

  function handleDeleteTask(taskId: number): void {
    const updatedTaskList = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedTaskList);
  }

  function handleAddTask(): void {
    const newTask = {
      id: taskList[taskList.length - 1].id + 1,
      name: "",
      category: "",
      status: false,
      deleteTask: handleDeleteTask
    }
    const newList = [...taskList, newTask]
    setTaskList(newList);
  }

  return (
    <div>
      <ul>
        {taskList.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            status={task.status}
            category={task.category}
            deleteTask={handleDeleteTask}
          />
        ))}
      </ul>
      <button onClick={() => handleAddTask()}>New Task</button>
    </div>
  );
}
