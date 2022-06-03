import { createContext,useReducer } from "react";
import appReducer from './Reducer'
import {v4} from 'uuid'
const initialState = {
  tasks: [
    {
      id: "1",
      title: "title one",
      description: "this is description",
      done: false,
    },
    {
      id: "2",
      title: "title two",
      description: "This is the Way",
      done: false,
    },
  ],
};
export const GlobalContext = createContext(initialState);

export const ContextProvide = ({ children }) => {

  const [state,disptach] = useReducer(appReducer,initialState)

  const addTask = (task) => {
    // console.log("añadiendo una tarea",task);
    disptach({type:'ADD_TASK',payload:{...task,id:v4(),done:false}})
  };
  const deleteTask =(id)=>{
    disptach({type:'DELETE_TASK',payload:id})
  }
  const updateTask=(task)=>{
    disptach({type:'UPDATE_TASK',payload:task})
  }
  const toggleTaskDone=(id)=>{
    disptach({type:'TOGGLE_TASK',payload:id})

  }
  return (
    <GlobalContext.Provider 
    value={{...state, addTask,deleteTask,updateTask,toggleTaskDone}}>
      {children}
    </GlobalContext.Provider>
  );
};
