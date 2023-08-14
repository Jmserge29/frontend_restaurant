import React, {Fragment, useState} from "react";
import User from "../assets/usuario.png";
import { Dialog, Transition } from '@headlessui/react'
import CardSaurcer from '../Components/CardSaurcer'
import SkeletonCardSaurce from "./SkeletonCardSaurce";
function CardProfile({ order, setOrder, menu, handlerClick, isOpen, closeModal, selectionSaucer, getOrderItemsForClient }) {


  const removeItemFromOrder = (itemId) => {
    setOrder((prevOrder) => prevOrder.filter((item) => item.name !== itemId));
  };
  return (
    <>
      {order.map((data, i) => { 
          const clientOrderItems = getOrderItemsForClient(data.name);
          console.log("CUSTOMER MONDA (",data.name,") Pidió: ", clientOrderItems)

        return (
          <div key={data.name} className="col-span-1 mx-2 py-4 " >
              <button onClick={() => removeItemFromOrder(data.name)} className="bg-rose-500 py-3 px-5 ml-40 text-white font-bold rounded-full absolute">X</button>
            <div className="rounded-xl shadow-2xl shadow-indigo-500/40 cursor-pointer pt-4 bg-white" onClick={() => selectionSaucer(data)}>
              <div className="flex justify-center pt-4">
                <img
                  className="rounded-full mx-4 w-12 sm:w-32 H-12 sm:h-32 bg-cover"
                  src={User}
                  alt="Drake"
                />
              </div>
              <h4 className="mt-4 text-3xl italic text-stone-700 leading-3 font-semibold text-center py-4">
                {data.name}
              </h4>
              <p className="text-center text-md mx-5 mt-2 pb-12 font-medium">
                {" "}
                Pedidos:
                <div className="mt-2">
                  {clientOrderItems.map((data, i) => {
                    return(
                      <li className=" text-md text-indigo-600">{data}</li>
                    )
                  })}
                </div>
              </p>
            </div>
          </div>
        );
      })}
      <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-2/3 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-center text-4xl font-bold leading-6 pt-8 text-gray-900"
                  >
                    Elige Tu Mejor Opcion! 🍛🍽
                  </Dialog.Title>

                  <div className="mt-4">
                    <div className='mx-auto mt-8 grid grid-cols-1 sm:grid-cols-3 container justify-around px-5'>        
                        {menu ? <CardSaurcer handlerClick={handlerClick} menu={menu}/> : <SkeletonCardSaurce/>}
                    </div>
                  </div>

                  <div className="mt-8 mb-4 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-md font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Finalizar Pedido, Gracias!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      </div>
    </>
  );
}

export default CardProfile;
