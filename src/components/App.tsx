import { ReactElement } from "react";
import { TaskList } from "./TaskList";
import { AppFrame, AppHeader } from "../styles/App";

function App(): ReactElement {
  return (
    <AppFrame>
      <AppHeader>
        <h2>Website todo</h2>
      </AppHeader>
      <TaskList/>
    </AppFrame>
  );
}

export default App;
