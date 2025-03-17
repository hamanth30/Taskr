import React, { useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

const Home = () => {

  const[items,setItems] = useState(
    [
      {
        id:1,
        checked: true,
        item: "Study React"
      },
      {
        id:2,
        checked: true,
        item: "Study AI"
      },
      {
        id:3,
        checked: true,
        item: "Play BB"
      }
    ])

  const handleCheck = (id) => {
    setItems(items.map((item) => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };


 


  return (
    <div className="bg-blue-400 flex-rows min-h-screen items-center text-center justify-center">
          <h1 className="bg-white flex text-3xl font-bold p-4 ">Taskr</h1>

          <h2 className='mt-10 bg-white text-2xl font-bold p-1'>Orgainze your daily tasks !!</h2>

          {/* <ul className="flex flex-col mt-15 py-10 rounded-lg bg-white  space-y-5 text-xl font-bold"> */}
            {items.map((item) =>(
                <li key={item.id} className="mt-10 ml-25 mr-25 flex items-center justify-between px-4 py-4 bg-gray-100 rounded-lg shadow-lg">

                  <input type="checkbox"
                          checked={item.checked}
                          onChange={() => handleCheck(item.id)}
                          className="w-10 h-10 cursor-pointer " />

                  <label className="text-xl font-bold" >{item.item}</label>

                  <button className="bg-red-600 rounded-lg shadow-lg px-5 py-3"  onClick={() => handleDelete(item.id)}>
                      <RiDeleteBin6Line className="text-3xl"/>
                  </button>

                </li>
                ))
            }
          {/* </ul> */}

    </div>
  )
}

export default Home