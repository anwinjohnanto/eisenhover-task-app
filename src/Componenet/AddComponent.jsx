import React, { useContext, useState } from 'react'
import {Select} from 'antd';
import { IoAddSharp } from "react-icons/io5";
import { TaskDispatch } from '../API/TaskContext';
import { ACTION } from '../API/Reducer';

const AddComponent = () => {
const dispatch=useContext(TaskDispatch)
const [taskName, setTaskName]=useState("");
const [category,setCategory]=useState()
const[error, setError]=useState(false)
const handleSubmit=(e)=>{
    e.preventDefault()
    if (category!="select category"||taskName!="") {
        dispatch({
            type:ACTION.ADDTASK,
            payload:{
                name: taskName,
                category:category
            }
        })
    }
    else{
        setError(true)
    }
    
}
  return (
    <div >
        <form>
            <div className='flex gap-4 max-sm:flex-col'>
                <input onChange={e=>setTaskName(e.target.value)}
                value={taskName} className='rounded-md w-60 h-8 border border-gray-300 p-2 outline-none' type="text" placeholder='Task' />
                <Select defaultValue={"select category"}
                    options={[
                        {
                            value:1,
                            label:"Important and Urgent"
                        },
                        {
                            value:2,
                            label:"Important and Not Urgent"
                        },
                        {
                            value:3,
                            label:"Not Important and Urgent"
                        },
                        {
                            value:4,
                            label:"Not Important and Not Urgent"
                        }
                    ]}
                    className={`w-60 ${error&&'outline-red-600'}`}
                    onChange={e=>setCategory(e)}
                    value={category}
                />
            </div>
            <div className='mt-3 flex justify-end p-2 border-b'>
            <IoAddSharp onClick={handleSubmit}
            className={`text-right text-2xl cursor-pointer bg-blue-400 hover:bg-blue-500 rounded-md p-1`}/>
            </div>
        </form>
    </div>
  )
}

export default AddComponent