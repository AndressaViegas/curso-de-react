import { useState } from "react"
import Input from "./Input"

function AddTasks({ onAddTaskSubmit }) {
    let [title, setTitle] = useState("")
    let [description, setDescription] = useState("")
 
    return ( 
   <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
   
    <Input type="text" placeholder="Digite o título da tarefa" 
    value={title}
    onChange={(event) => setTitle(event.target.value)}
    />
    <Input type="text" placeholder="Digite a descrição da tarefa" 
    value={description}
    onChange={(event) => setDescription(event.target.value)}
    />
    
    <button onClick={() => {
        // verificar se o título e a descrição estão preenchidos
        if (!title.trim() || !description.trim() ){
            alert("Por favor, preencha o título e a descrição da tarefa.")
            return
        }
        onAddTaskSubmit(title, description)
        setTitle("")
        setDescription("")
        
        }} className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Adicionar</button>
   </div>
   )
}
export default AddTasks 