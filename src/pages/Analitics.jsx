import axios from 'axios'
import React, { useState, useEffect } from 'react'



function Analitics() {
  const [data, setData] = useState([])

  useEffect(()=> {
    axios.get("https://backend-restaurant-zeta.vercel.app/Company/getAdminInformation").then((res) => {
      console.log(res.data.data)
      setData(res.data.data)
    }).catch((err) => {
      console.log(err)
    })
  
  }, [])
  return (
    <div>
      <h1 className="text-center text-8xl font-extrabold mb-6 bg-gradient-to-r from-cyan-300 to-indigo-700 bg-clip-text text-transparent">Análisis</h1>
      <div className='rounded-lg grid grid-cols-4 shadow-2xl pt-28 mt-12 pb-24'>
        <div className="col-span-1 grid grid-rows-2">
          <div className='flex justify-center font-extrabold row-span-1 text-center text-indigo-500 sm:text-7xl leading-5 text-5xl'>
          {data.cant_customers ? data.cant_customers : "#"}
          </div>
          <div className='flex justify-center row-span-1 font-medium text-2xl pt-6'>
            Clientes Atendidos
          </div>
        </div>
        <div className="col-span-1 grid grid-rows-2">
          <div className='flex justify-center font-extrabold row-span-1 text-center text-rose-400 sm:text-7xl leading-5 text-5xl'>
          {data.cant_orders ? data.cant_orders : "#"}
          </div>
          <div className='flex justify-center row-span-1 font-medium text-2xl pt-6'>
            Ordenes Atendidas
          </div>
        </div>
        <div className="col-span-1 grid grid-rows-2">
          <div className='flex justify-center font-extrabold row-span-1 text-center text-emerald-400 sm:text-6xl leading-5 text-xl'>
          ${data.profit ? data.profit : "0"}, 00
          </div>
          <div className='flex justify-center row-span-1 font-medium text-2xl pt-6'>
            Ganancias
          </div>
        </div>
        <div className="col-span-1 grid grid-rows-2">
          <div className='flex justify-center font-extrabold row-span-1 text-center text-amber-400 sm:text-7xl leading-5 text-5xl'>
          {data.saucer_most_selling ? data.saucer_most_selling : "Cargando..."}
          </div>
          <div className='flex justify-center row-span-1 font-medium text-2xl pt-6'>
            Platillo Más Vendido
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analitics