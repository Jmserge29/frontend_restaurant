import React, { useEffect, useState } from 'react'
import CardSaurcer from '../Components/CardSaurcer'
import axios from 'axios'
import SkeletonCardSaurce from '../Components/SkeletonCardSaurce'

function Menu() {
  const [menu, setMenu] = useState(null)
  const getSaucers = async() => {
    axios.get("https://backend-restaurant-zeta.vercel.app/Saucer/getSaucers")
    .then((response)=> {
      console.log(response.data)
      setMenu(response.data.data)
    }).catch((error) => {
      console.log(error)
    })  
  }

  useEffect(() => {
    getSaucers()
  }, [])
  return (
    <div className='rounded-md w-full'>
      <div className='flex justify-center'>
        <div className=' py-5 px-8 shadow-md rounded-xl bg-white text-3xl leading-3 font-semibold'>
          Menú
        </div>
      </div>
      <div className='mx-auto mt-8 flex flex-wrap container justify-around px-5'>        
        {menu ? <CardSaurcer menu={menu}/> : <SkeletonCardSaurce/>}
      </div>
    </div>
  )
}

export default Menu