import React, { useState } from 'react'
import { IoIosArrowBack, IoMdAnalytics } from "react-icons/io";
import { CiAlignLeft } from "react-icons/ci";
import { Link } from 'react-router-dom';



const Sidebar = () => {
    const[open,setOpen]=useState(true)
    const menus=[
        {
            name:'Add',
            to: '/add',
            src: 'add.png'
        },
        {
            name:'Grid View',
            to: 'GridView.jsx',
            src: 'grid.png'
        },
        {
            name:'List View',
            to: 'ListView.jsx',
            src: 'list.png'
        },
        {
            name:'All Tasks', 
            to: 'AllTasks.jsx',
            src: 'tasks.png',
            gap:true
        },
        {
            name:'Calender', 
            to: 'Calender.jsx',
            src: 'calender.png'
        }
    ]
  return (
    <div className={`${open?'w-[12.6rem]':'w-[66px]'} duration-300 h-screen bg-gray-900 relative shadow-2xl flex-shrink-0 max-sm:w-[66px]`}>
        <div className={`top-9 ${open?'left-[12.0rem]':'left-[3.4rem] rotate-180'} absolute duration-300 max-sm:w-[3.4rem] max-sm:hidden`}>
            <IoIosArrowBack
            className={`bg-white rounded-full border-2 border-gray-900 cursor-pointer w-5 h-5`}
            onClick={()=>setOpen(!open)}
        />
        </div>
     <Link to={'/'}>  
        <div className='flex gap-x-3 duration-300 items-center p-5 pt-8 text-xl text-white'>
            <CiAlignLeft className='bg-blue-500 rounded-md text-2xl p-[2px] min-w-max' />
            <h1 className={`${!open&&'scale-0'} duration-300 origin-left max-sm:scale-0`}>
                Eisenhover
            </h1>
        </div>
    </Link> 
    <div className=''>
        <ul className='p-3 '>
            {menus.map((menu, index)=>(
            <Link key={index} to={menu.to} className={`flex items-center gap-x-2 mb-4 text-gray-300 text-sm p-2 cursor-pointer
            hover:bg-gray-700 rounded-md h-[40px] ${menu.gap&&'mb-11'}`}>
                <img className='w-6 ' src={`./src/assets/${menu.src}`}/>
                <div className={`${!open&&'w-0 scale-0'} origin-left duration-300 max-sm:scale-0`}>{menu.name}</div>
                </Link>
            ))}
        </ul>
    </div>
    </div>
  )
}
 
export default Sidebar