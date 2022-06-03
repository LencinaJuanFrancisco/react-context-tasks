import React, { useState, useContext,useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate,useParams } from "react-router-dom";
const TaskForm = () => {
  const { addTask,tasks, updateTask } = useContext(GlobalContext);
  const navigate = useNavigate();
  const params = useParams()

  const [task, setTask] = useState({
    id:"",
    title: "",
    description: "",
  });
  const handelChange = (e) => {
    //console.log(e.target.name,e.target.value);
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    //console.log(e)
    if(task.id){
      updateTask(task)
    }else{
      addTask(task);
    }
    navigate("/");
  };

  useEffect(()=>{
    const findTask = tasks.find(task=> task.id === params.id)
    //verificamos si exite la tarea
      if(findTask){
        setTask(findTask)
      }
  },[params.id,tasks])
  return (
    <div className="flex justify-center ">
      <form onSubmit={handelSubmit} className="bg-gray-900 p-10">
        <h2 className="mb-7 text-3xl">{task.id? `Editar tarea` : 'Crear Tarea' }</h2>
        <div className="mb-5">
          <input
            onChange={handelChange}
            type="text"
            name="title"
            placeholder="titulo"
            value={task.title}
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
          />
        </div>
        <div className="mb-5">
          <textarea
            onChange={handelChange}
            id=""
            rows="5"
            name="description"
            placeholder="description"
            value={task.description}
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
          ></textarea>
        </div>
        <button className="bg-green-400 w-full hover:bg-green-500 text-white py-5 px-5 mt-2">
        {task.id? `Editar Tarea` : 'Crear Tarea' }
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
