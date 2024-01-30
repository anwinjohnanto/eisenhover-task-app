import { useState } from 'react'
import Sidebar from './Componenet/Sidebar'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Add from './Pages/Add'
import TaskState from './API/TaskState'
function App() {

  return (
    <div className='flex'>
      <Sidebar/>
      <TaskState>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
      </TaskState>
    </div>
  )
}

export default App
