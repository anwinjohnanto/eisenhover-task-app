import { CiSearch } from "react-icons/ci"

export const ACTION={
    ADDTASK:"addTask",
    EDITTASK:"editTask",
    DELETETASK:"deleteTask"
}

const reducer=(task,action)=>{
    switch(action.type){
        case ACTION.ADDTASK:
            return [...task, {
                id:task.length+1,
                name:action.payload.name,
                category:action.payload.category,
                complete:false
            }]
        case ACTION.EDITTASK:
            return task.map((t,i)=>{
                if(t.id===action.payload.id){
                    return {
                        ...t, name:action.payload.name
                    }
                }
                else{
                    return t;
                }
            })
        case ACTION.DELETETASK:
            return task.filter((t,i)=>{
                return(t.id!=action.payload.id)
            })
    }
}

export default reducer;