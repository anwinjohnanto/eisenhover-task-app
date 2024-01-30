import React, { useContext, useState } from 'react'
import TaskCard from '../Componenet/TaskCard'
import { Task, TaskDispatch } from '../API/TaskContext'
import { ACTION } from '../API/Reducer'

const Home = () => {

  const[editingId,setEditingId]=useState("")
  const isEditing=false;
  const tasks=useContext(Task)
  const dispatch=useContext(TaskDispatch)
  function handleEdit(currentId){
    setEditingId(currentId)
  }
  function submitEdit(editedTask){
    dispatch({
      type:ACTION.EDITTASK,
      payload:{
          id:editingId,
          name: editedTask,
      }
  })
  setEditingId("")
  }
  function handleDelete(deleteId){
    dispatch({
      type:ACTION.DELETETASK,
      payload:{
          id:deleteId,
      }
  })
  }
  return (
    <div className='grid w-screen md:grid-cols-2 md:grid-rows-2 gap-4 bg-gray-50 grid-cols-1 grid-rows-4 p-5'>
        <div className='p-2'>
            <h1>Important and Urgent</h1>
            {tasks.map((t,i)=>{
              if(t.category==1){
                
                return <TaskCard key={t.id} props={{t, handleEdit, isEditing:t.id===editingId, submitEdit, handleDelete}}/>
              }
            })}
        </div>
        <div className='p-2'>
            <h1>Important and Not Urgent</h1>
            {tasks.map((t,i)=>{
              if(t.category==2){
                
                return <TaskCard key={t.id} props={{t, handleEdit, isEditing:t.id===editingId, submitEdit, handleDelete}}/>
              }
            })}
        </div>
        <div className='p-2'>
          <h1>Not Important and Urgent</h1>
          {tasks.map((t,i)=>{
                if(t.category==3){
                  
                  return <TaskCard key={t.id} props={{t, handleEdit, isEditing:t.id===editingId, submitEdit, handleDelete}}/>
                }
              })}
        </div>
          <h1>Not Important and Not Urgent</h1>
          <div className='p-2'>
          {tasks.map((t,i)=>{
                if(t.category==4){
                  
                  return <TaskCard key={t.id} props={{t, handleEdit, isEditing:t.id===editingId, submitEdit, handleDelete}}/>
                }
              })}
        </div>
        {console.log(tasks)}
    </div>
  )
}

export default Home