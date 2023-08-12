import React, { useState } from 'react'
import CardSaurcer from '../Components/CardSaurcer'
import axios from 'axios'

function Menu() {
  const [menu, setMenu] = useState([])
  axios.get("https://backend-restaurant-zeta.vercel.app/Saucer/getSaucers")
  .then((response)=> {
    console.log(response.data)
    setMenu(response.data.data)
  }).catch((error) => {
    console.log(error)
  })
  return (
    <div className='rounded-md w-full'>
      <div className='flex justify-center'>
        <div className=' py-5 px-8 shadow-md rounded-xl bg-white text-3xl leading-3 font-semibold'>
          Menú
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-4 mx-8 py-4'>
        {menu ? <CardSaurcer menu={menu}/> : "Cargando"}
      </div>
    </div>
  )
}

export default Menu