import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Drag from "./components/Drag";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Drag />
    </DndProvider>
  );
}

export default App;
