import React from "react";
import Agregar from '../assets/agregar.png'
import CardProfile from "../Components/CardProfile";

function Order() {
  return (
    <>
      <div className="rounded-lg shadow-lg w-full p-5">
        <div className="flex justify-center my-4">
          <button className="bg-sky-500 py-4 px-3 rounded-xl font-semibold text-white">
            Add Order
          </button>
        </div>
        <div className="grid grid-cols-4 m-5 content-center items-center text-center ">
          <CardProfile />
          <CardProfile />
          <CardProfile />
          <CardProfile />
          <CardProfile />
          <CardProfile />
          <CardProfile />
          <CardProfile />
          <CardProfile />
          <CardProfile />
          <CardProfile />
          <div className="col-span-1">
            <div className="rounded-xl shadow-2xl shadow-indigo-500/40  pt-4 bg-white">
              <div className="flex justify-center pt-4">
                <img
                  className="rounded-full mx-4 w-32 h-32 bg-cover"
                  src={Agregar}
                  alt="Drake"
                />
              </div>
              <h4 className="text-md leading-3 font-semibold text-center py-4">
                Drake
              </h4>
              <p className="text-center text-sm mx-5 pb-12 font-medium">
                {" "}
                Pedidos:{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
