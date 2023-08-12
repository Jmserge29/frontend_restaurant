import React from "react";
import User from '../assets/usuario.png'
function CardProfile() {
  return (
    <>
      <div className="col-span-1 mx-2 py-4">
        <div className="rounded-xl shadow-2xl shadow-indigo-500/40  pt-4 bg-white">
            <div className="flex justify-center pt-4">
                <img className="rounded-full mx-4 w-32 h-32 bg-cover" src={User} alt="Drake" />
            </div>
            <h4 className="text-md leading-3 font-semibold text-center py-4">Drake</h4>
            <p className="text-center text-sm mx-5 pb-12 font-medium"> Pedidos: </p>
        </div>
      </div>
    </>
  );
}

export default CardProfile;
