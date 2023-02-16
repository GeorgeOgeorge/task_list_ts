import { ReactElement } from "react";
import { TaskList } from "./TaskList";

function App(): ReactElement {
  return (
    <>
      <header className="header">
        <h2>Website todo</h2>
      </header>
      <main className="main">
        <TaskList/>
      </main>
    </>
  );
}

export default App;
