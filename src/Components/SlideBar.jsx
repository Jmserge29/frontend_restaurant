import React from 'react'
import { NewspaperIcon, HomeIcon, ListBulletIcon, PresentationChartBarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

function SlideBar() {

    const navigation = [
        {
            name: "Inicio",
            url: "/",
            icon: <HomeIcon/>,
        },
        {
            name: "Menu",
            url: "/menu",
            icon: <NewspaperIcon/>,
        },

        {
            name: "Ordenes",
            url: "/order",
            icon: <ListBulletIcon/>,
        },

        {
            name: "Analisis",
            url: "/dashboard",
            icon: <PresentationChartBarIcon/>,
        },

    ]
  return (
    <div className='hidden lg:flex fixed top-0 left-0 h-screen w-24 justify-center flex-col bg-white text-white drop-shadow-2xl'>
        <div className='flex justify-center '>
            <nav>
                <ul className=' space-y-12'>
                    <li className='shadow-2xl hover:cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-80 hover:text-white text-indigo-500 h-16 drop-shadow-xl w-16 p-2 rounded-xl bg-white shadow-indigo-500/50'>
                        <a href="/"><HomeIcon/></a>
                    </li>
                    <li className='shadow-2xl hover:cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-80 hover:text-white text-indigo-500 h-16 drop-shadow-xl w-16 p-2 rounded-xl bg-white shadow-indigo-500/50'>
                        <a href="/Menu"><NewspaperIcon/></a>

                    </li>
                    <li className='shadow-2xl hover:cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-80 hover:text-white text-indigo-500 h-16 drop-shadow-xl w-16 p-2 rounded-xl bg-white shadow-indigo-500/50'>
                        <a href="Order"><ListBulletIcon/> </a>
                    </li>
                    <li className='shadow-2xl hover:cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-80 hover:text-white text-indigo-500 h-16 drop-shadow-xl w-16 p-2 rounded-xl bg-white shadow-indigo-500/50'>
                        <a href="Analitics"><PresentationChartBarIcon/> </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default SlideBar