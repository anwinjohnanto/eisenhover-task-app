import { useReducer } from "react"
import  {Task}  from "./TaskContext"
import { TaskDispatch } from "./TaskContext"
import tasks from './Data'
import reducer from "./Reducer"

const TaskState=(props)=>{

    const[task, dispatch]=useReducer(reducer, tasks)

    return(
        <Task.Provider value={task}>
            <TaskDispatch.Provider value={dispatch}>
                {props.children}
            </TaskDispatch.Provider>
        </Task.Provider>
    )
}

export default TaskState;