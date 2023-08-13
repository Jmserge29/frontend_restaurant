import React, { useState, useEffect } from "react";
import CardProfile from "./Components/CardProfile";
import AddProfile from "./Components/AddProfile";
import axios from "axios";
import Orden from './assets/nota.png'
function App() {
  const [finished, setFinished] = useState(false)
  const [customer, setCustomer]= useState([])

  const [menu, setMenu] = useState(null)
  const getSaucers = async() => {
    await axios.get("https://backend-restaurant-zeta.vercel.app/Saucer/getSaucers")
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

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }


  function selectionSaucer(data) {
    openModal()
    setCustomer(data)
    console.log(data)
  }

  function openModal() {
    setIsOpen(true)
  }


  const [order, setOrder] = useState([])

  function handlerClick(data){
    const newItem = { saucer: data.name, price: data.price };
    addItemToSpecificOrder(customer.name, newItem);
   }

   const addItemToSpecificOrder = (itemName, newItem) => {
    setOrder((prevOrder) =>
      prevOrder.map((item) =>
        item.name === itemName
          ? { ...item, order: [...item.order, newItem] }
          : item
      )
    );
  };

  function getOrderItemsForClient(clientName) {
    const client = order.find((item) => item.name === clientName);
    if (client) {
      return client.order.map((orderItem) => orderItem.saucer);
    } else {
      return [];
    }
  }

  function FinishedOrder(){
    setFinished(!finished)
    setOrder([])
  }

  const totalValue = order.reduce((total, customer) => {
    return total + customer.order.reduce((subtotal, item) => subtotal + item.price, 0);
  }, 0);

  return (
    <>
    {!finished?<div className="sm:flex sm:justify-center items-center  mt-4 grid grid-cols-1">
      <div className="grid grid-rows-2">
        <div className=" row-span-1">
          <h1 class="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            ¡Bienvenido!
          </h1>
        </div>
        <div className=" row-span-1">
          <h2 className="flex justify-center pt-5 pb-8 text-4xl font-bold leading-6">
            Atender Nueva Orden ➡
          </h2>
        </div>
      </div>
        <button className=" py-4 px-3 rounded-xl font-semibold text-white items-center flex justify-center content-center" onClick={()=>setFinished(!finished)}>
          <img className="animate-bounce items-center " src={Orden} alt="orden" />
        </button>
      </div>:
      
      <div className="rounded-lg shadow-lg w-full p-5 shadow-purple-200">
        <h2 className=" flex justify-center pt-12 pb-8  text-2xl sm:text-6xl font-bold  leading-6">Nueva Orden 👨‍🍳</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 m-5 content-center items-center text-center ">
          <AddProfile setOrder={setOrder} order={order}/>
          <CardProfile getOrderItemsForClient={getOrderItemsForClient} isOpen={isOpen} closeModal={closeModal} selectionSaucer={selectionSaucer} handlerClick={handlerClick} menu={menu} setOrder={setOrder} order={order}/>
        </div>
        <div className="text-center font-medium text-4xl text-stone-700 pb-20 pt-12">
          Valor Total De Orden: <span className="text-4xl pl-2 sm:pl-24 bg-gradient-to-t from-teal-500 to-emerald-600 font-extrabold text-transparent bg-clip-text">${totalValue},00 COP</span>
        </div>
        <div className="flex justify-center pb-4">
          <button className="rounded-md border border-transparent bg-blue-100 px-8 py-4 text-xl font-semibold text-blue-900 hover:bg-blue-200" onClick={() => FinishedOrder()}>Finalizar Orden</button>
        </div>
        {/* Control de Información */}
        {/* <div className="rounded-lg shadow-xl bg-slate-300 relative">
          <div className="text-4xl text-center font-semibold pt-2 sm:pt-8 pb-2 sm:pb-7">
            <h2>Data User </h2>
          </div>
          <div className="flex w-full pb-8 items-center justify-center">
          <div className="rounded-md  shadow-lg bg-slate-900 text-white w-2/3 h-2/3 md:px-8 md:py-8">
            <pre>
            {order? <>{JSON.stringify(order,null,2)}</>:  "cargando"}
            
            </pre>
          </div>
          </div>
        </div> */}



      </div>
      }
    </>
  );
}

export default App;
