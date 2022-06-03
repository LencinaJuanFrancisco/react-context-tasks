import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

const TaskList = () => {
  const { tasks,deleteTask,toggleTaskDone } = useContext(GlobalContext);

  return (
    <div className="flex justify-center">
      <div className="w-6/12">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between"
          >
            <div>
              <h2>{task.title}</h2>
              <h3>{task.description}</h3>
              <h6>{task.id}</h6>
              <button onClick={()=>toggleTaskDone(task.id)} className=" bg-yellow-600 hover:bg-yellow-500 text-white px-2 py-2 m-2 w-16  rounded">{task.done ? 'Finalizado' : 'Hacer' }</button>
            </div>
            <div>
              <Link
              onClick={()=>deleteTask(task.id)}
                to="/"
                className=" bg-red-600 hover:bg-red-500 text-white px-2 py-2 m-2 w-16  rounded"
              >
                Delete
              </Link>
              <Link
                to={`/edit/${task.id}`}
                className=" bg-green-600 hover:bg-green-500 text-white px-2 py-2 m-2 w-16 rounded"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
