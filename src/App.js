import { Route, Routes } from "react-router-dom";

import Heading from "./components/Heading";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { ContextProvide } from "./context/GlobalContext";

import "./App.css";

function App() {
  return (
    <div>
      <div className=" text-white text-center p-10">
        <div className="container mx-autor h-full"></div>
        <ContextProvide>
          <Heading />
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/add" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
          </Routes>
        </ContextProvide>
      </div>
    </div>
  );
}

export default App;
