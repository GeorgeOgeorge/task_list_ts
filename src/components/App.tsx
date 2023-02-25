import { ReactElement } from "react";
import { TaskList } from "./TaskList";
import { AppFrame, AppHeader } from "../styles/App";

function App(): ReactElement {
  return (
    <AppFrame>
      <AppHeader>
        <p>Website todo</p>
      </AppHeader>
      <TaskList/>
    </AppFrame>
  );
}

export default App;
