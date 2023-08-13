import React from 'react'
import { NewspaperIcon, HomeIcon, ListBulletIcon, PresentationChartBarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

export const IconSideBar = ({ icon, text = "tooltip 💡" }) => {
    return (
      <>
        <div className="sidebar-icon group">
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
        </div>
      </>
    );
  };  


function SideBar() {

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
            url: "/analitics",
            icon: <PresentationChartBarIcon/>,
        },

    ]

    
  return (
    <div className='hidden lg:flex fixed top-0 left-0 h-screen w-40 justify-center flex-col bg-white text-white drop-shadow-2xl'>
        <div className='flex justify-center '>
            <nav>
                <ul className=' space-y-12'>
                    {navigation.map((data, i) => {
                        return(
                            <div key={i}>
                                <a href={data.url}>
                                    <IconSideBar icon={data.icon} text={data.name}/>
                                </a>
                            </div>
                        )
                    })}
                    {/* <li className='shadow-2xl hover:cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-80 hover:text-white text-indigo-500 h-20 drop-shadow-xl w-20 p-3 rounded-xl bg-white shadow-indigo-500/50'>
                        <a href="/"><HomeIcon/></a>
                        <span className='absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md scale-0 text-white bg-gray-900 text-base font-bold transition-all duration-100 origin-left ml-8 group-hover:scale-100'>Inicio</span>
                    </li>
                    <li className='shadow-2xl hover:cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-80 hover:text-white text-indigo-500 h-20 drop-shadow-xl w-20 p-3 rounded-xl bg-white shadow-indigo-500/50'>
                        <a href="/Menu"><NewspaperIcon/></a>

                    </li>
                    <li className='shadow-2xl hover:cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-80 hover:text-white text-indigo-500 h-20 drop-shadow-xl w-20 p-3 rounded-xl bg-white shadow-indigo-500/50'>
                        <a href="Order"><ListBulletIcon/> </a>
                    </li>
                    <li className='shadow-2xl hover:cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-80 hover:text-white text-indigo-500 h-20 drop-shadow-xl w-20 p-3 rounded-xl bg-white shadow-indigo-500/50'>
                        <a href="Analitics"><PresentationChartBarIcon/> </a>
                    </li> */}
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default SideBar