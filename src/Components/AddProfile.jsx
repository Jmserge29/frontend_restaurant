import React, { useState } from 'react'
import Agregar from '../assets/agregar.png'
function AddProfile({setOrder, order}) {
    console.log(order)
    const [name, setName] = useState([])
    const addItemToOrder = (newItem) => {
        setOrder((prevOrder) => [...prevOrder, newItem]);
    };

    const handlerAddUser = () => {
        addItemToOrder({
            name: name,
            order: [],
        })
        setName([])
    }

  return (
    <div className="col-span-1">
    <div className="rounded-xl hover:shadow-indigo-600 mx-2 py-4 shadow-2xl shadow-indigo-500/40  pt-4 bg-white">
        <label className='font-semibold text-md pb-2'>Nombre del cliente</label>
      <div className='mx-8'>
        <input value={name} placeholder='Juan Valdéz' onChange={(e) => setName(e.target.value)} type="text" className=' border-b-2 text-2xl font-medium text-center w-full rounded-md py-1.5 text-gray-900 sm:leading-6'/>
      </div>
      <div className="flex justify-center py-4">
        {!name.length==0? <button onClick={handlerAddUser} className='cursor-pointer rounded-xl py-3 px-5 bg-blue-500 text-white font-semibold text-md'>Añadir Cliente</button> : <button onClick={handlerAddUser} className='rounded-xl py-3 px-5 bg-blue-200 text-white font-semibold text-md' disabled>Añadir Cliente</button>}
      </div>
    </div>
  </div>

  )
}

export default AddProfile