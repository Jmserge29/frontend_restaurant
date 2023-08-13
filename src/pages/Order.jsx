import axios from "axios";
import React, { useEffect, useState } from "react";

function Order() {
  const [orders, setOrders ] = useState([])

  useEffect(() => {
    axios.get("https://backend-restaurant-zeta.vercel.app/Order/getsOrdersPending").then((res) => {
      console.log(res.data.data)
      setOrders(res.data.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <>
      <h1 className="text-center text-8xl font-extrabold mb-6 bg-gradient-to-t from-indigo-500  bg-clip-text text-transparent">Listado De Ordenes</h1>
      <div className="grid grid-cols-1 pt-12 sm:grid-cols-4 items-center">
        {orders.map((data,i) => {
          return(
            <div key={i} className="col-span-1 my-2 mx-4 relative z-1 bg-white rounded shadow-lg overflow-hidden">
            <div className="text-lg font-medium text-green-500 uppercase p-8 text-center border-b border-gray-200 tracking-wide">{data._id}</div>
            <div className="block sm:flex md:block lg:flex items-center justify-center">
              <div className="mt-8 sm:m-8 md:m-0 md:mt-8 lg:m-8 text-center">
                <div className="inline-flex items-center">
                  <span className="text-5xl font-medium">$ {data.final_value}</span>
                  <span className="text-xl text-gray-600 ml-2">,00</span>
                  <span className="text-xl ml-2">COP</span>
                </div>
                <span className="block text-sm text-gray-600 mt-2">Valor con IVA incluido</span>
              </div>
            </div>
            <div className="flex justify-center mt-3">
              <ul>
                {data.order.map((orderData) => {
                  return(
                    <li className="flex items-center">
                      <div className="bg-green-200 rounded-full p-2 fill-current text-green-700"> </div>
                      <span className="text-gray-700 text-lg ml-3">{orderData.saucer} ➔ <span className="mx-2 font-medium text-stone-900"> {orderData.customer}</span></span>
                    </li>  
                  )
                })}
              </ul>
            </div>
            <a className=" flex items-center justify-center bg-gray-200 hover:bg-gray-300 p-8 text-md font-semibold text-gray-800 uppercase mt-16" href="#">
              <span>Entregar</span>
              <span className="font-medium text-gray-700 ml-2">➔</span>
            </a>
          </div>
          )
        })}
    </div>
    </>
  );
}

export default Order;
