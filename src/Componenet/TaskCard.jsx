import React, { useState } from 'react'
import { FaEdit,FaTrash  } from "react-icons/fa";
import { FaRightToBracket } from "react-icons/fa6";


const TaskCard = ({props}) => {
  const[name, setName]=useState(props.t.name)
  return (
    
    <div className=' border-[1px] border-gray-500 bg-white rounded-md p-2 flex items-center justify-between mt-2 shadow-sm'>
        {props.isEditing?(<input className='outline-none p-1' onChange={(e)=>setName(e.target.value)} value={name}/>):<p>{name}</p>}
        <div className='flex items-center gap-4'>
            {props.isEditing?<FaRightToBracket onClick={()=>props.submitEdit(name)} className='cursor-pointer  text-blue-600'/>:<FaEdit onClick={()=>props.handleEdit(props.t.id)} className='cursor-pointer  text-blue-600'/>}
            <FaTrash onClick={()=>props.handleDelete(props.t.id)} className='cursor-pointer text-red-700'/>
        </div>
    </div>
  )
}

export default TaskCard