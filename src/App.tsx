import React from "react";

import ColorChangeButton from "./ColorChangeButton";
import { mockTasks } from "./mockData";
import TaskList from "./TaskList";

const App: React.FC = () => {
  return (
    <div>
      <ColorChangeButton />
      <h1>Список задач</h1>
      <TaskList tasks={mockTasks} />
    </div>
  );
};

export default App;
