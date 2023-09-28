import React, { useState } from "react";

import { ItemStatus } from "./mockData";

interface Task {
  id: string;
  title: string;
  status: ItemStatus;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const [taskList, setTaskList] = useState<Task[]>(tasks);

  const handleDeleteTask = (taskId: string) => {
    const updatedTasks = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedTasks);
  };

  return (
    <div>
      {taskList.map((task) => (
        <div
          key={task.id}
          style={{
            textDecoration:
              task.status === ItemStatus.COMPLETED ? "line-through" : "none",
          }}
        >
          {task.title}
          <button onClick={() => handleDeleteTask(task.id)}>Удалить</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
