import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom"
import Title from "../components/Title";

function TaskPage() {
    let navigate = useNavigate()
    let [searcParams] = useSearchParams()
    let title = searcParams.get("title")
    let description = searcParams.get("description")
    return (
    <div className="h-screen w-screen bg-slate-500  p-6">
        <div>
            <div className="w-[500px] space-y-4">
            <div className="flex justify-center relative mb-6 text-slate-100">
                <button onClick={() =>navigate(-1)} className="absolute left-0 top-0 bottom-0">
                    <ChevronLeftIcon/>
                </button>
                <Title> Detalhes da Tarefa</Title>
            
            </div>
        </div>
        <div className=" bg-slate-200 p-4 rounded-md l">
            <h2 className="text-xl font-bold text-slate-600">{title}</h2>
            <p className="text-slate-600">{description}</p>
     
      
    </div>

    </div>
    </div>


);

}
export default TaskPage