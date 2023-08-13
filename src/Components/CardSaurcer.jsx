import React from "react";

function CardSaurcer({ menu, handlerClick }) {



  return (
    <>
      {menu.map((data, i) => {
        return (
          <div key={i} onClick={()=> handlerClick(data)} className="max-w-md mx-2 my-2 bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
            <div className="p-4 flex justify-center">
              <img
                className="rounded-xl max-h-64"
                src={data.picture}
                alt="Saurce"
              />
            </div>
            <div className="flex justify-center px-6 pt-3">
              <div className="flex justify-center space-x-4">
                <h1 className="text-2xl text-gray-900 font-bold capitalize italic">{data.name}</h1>
              </div>

            </div>
			        <div className="flex justify-center pt-1 space-x-4 pb-6">
                <h3 className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-lg font-medium text-red-900 hover:bg-red-200 ">$ {data.price} COP</h3>
              </div>

          </div>
        );
      })}
    </>
  );
}

export default CardSaurcer;
