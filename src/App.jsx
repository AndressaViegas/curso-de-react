import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import {v4} from "uuid"
import Title from "./components/Title";
function App() {
  let [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks"))|| [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  function onTaskClick(taskId) {
     let newTasks = tasks.map((task) => {
      if (task.id === taskId) {
      return {...task, isCompleted: !task.isCompleted}
      }
      return task 
     })
     setTasks(newTasks)
  }
  function onTaskDelete(taskid) {
    let newTasks = tasks.filter((task) => task.id !== taskid)
    setTasks(newTasks)
      }
      
      function onAddTaskSubmit(title, description) {
        // Adiciona uma nova tarefa com um ID único
        let newTask = {
          id: v4(),
          title,
          description,
          isCompleted: false,
        }
        setTasks([...tasks, newTask])
      }


  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
     <div className="w-[500px] space-y-4">
     <Title>Gerenciador de tarefas</Title>
     <AddTasks onAddTaskSubmit={onAddTaskSubmit}  />
      <Tasks  tasks={tasks} onTaskClick={onTaskClick} onTaskDelete= {onTaskDelete}/>
     </div>
      
    </div>
  );
}
export default App;
