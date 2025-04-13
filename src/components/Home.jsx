// import React, { useState } from 'react';
// import { RiDeleteBin6Line } from "react-icons/ri";
// import Completed from './Completed';
// import { useNavigate } from 'react-router-dom';

// const Home = ({setCompletedTasks}) => {

//   const [newTask, setNewTask] = useState("");
//   const [showInput, setShowInput] = useState(false);
//   const [addTime, setAddTime] = useState(false);
//   const [editingTaskId, setEditingTaskId] = useState(null);
//   //const [completedTasks, setCompletedTasks] = useState([]); 
//   const navigate = useNavigate(); 
  
//   const[items,setItems] = useState(
//     [
//       {
//         id:1,
//         checked: true,
//         item: "Study React",
//         time:"0:00"
//       },
//       {
//         id:2,
//         checked: true,
//         item: "Study AI",
//         time:"0:00"
//       },
//       {
//         id:3,
//         checked: true,
//         item: "Play BB",
//         time:"0:00"
//       }
//     ])

//   const handleCheck = (id) => {
//     setItems(items.map((item) => 
//       item.id === id ? { ...item, checked: !item.checked } : item
//     ));
//   };

//   const handleDelete = (id) => {
//     setItems(items.filter((item) => item.id !== id));
//   };

//   const handleNewTask = (taskName) => {
//     const newTask = {
//       id: items.length + 1, // Assign a unique ID based on the current list length
//       checked: false,
//       item: taskName
//     };
  
//     setItems([...items, newTask]); // Add the new task to the existing list
//   };

//   const handleNewTime = (id, time) => {
//     setItems(items.map((item) =>
//       item.id === id ? { ...item, time: time } : item // Properly update the time for the matching id
//     ));
//   };
  
//   const handleComplete = (id) => {
//     const completedTask = items.find((item) => item.id === id);
  
//     if (completedTask && completedTask.checked) {
//       setItems(items.filter((item) => item.id !== id));
//       setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, completedTask]);
//     } else {
//       alert("Task must be marked as completed to move!");
//     }
//   };
  


//   return (
//     <div className="bg-blue-400 flex-rows min-h-screen items-center text-center justify-center">
//           <h1 className="bg-white flex text-3xl font-bold p-4 ">Taskr</h1>

//           <h2 className='mt-10 bg-white text-2xl font-bold p-1'>Orgainze your daily tasks !!</h2>

//           <div className="flex flex-row items-center justify-center text-xl font-bold text-white mt-5 space-x-5">
//   {!showInput && (
//     <button
//       className="rounded-lg shadow-lg p-4 bg-blue-600 hover:bg-blue-800"
//       onClick={() => setShowInput(true)}
//     >
//       + Add New Task
//     </button>
//   )}

//     <button className="bg-green-600 hover:bg-green-700 p-4 rounded-lg shadow-lg" 
//     onClick={() => {
//     if (completedTasks.length > 0) {
//       navigate("/completed");
//     } else {
//       alert("No tasks have been completed yet!");
//     }
//   }}>View Completed Tasks</button>

//     <button className="bg-red-500 hover:bg-red-700 p-4 rounded-lg shadow-lg">View Incompleted Tasks</button>

//   {showInput && (
//     <div className="flex flex-row items-center space-x-7">
//       <input
//         type="text"
//         placeholder="Enter task name"
//         className="border rounded bg-slate-400 px-3 py-2"
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//       />
//       <button
//         className="mt-3 rounded-lg  bg-green-600 hover:bg-green-800 text-white rounded px-5 py-2"
//         onClick={() => {
//           handleNewTask(newTask); // Add the new task
//           setNewTask(""); // Clear the input field
//           setShowInput(false); // Hide the input box
//         }}
//       >
//         + Add Task
//       </button>
//     </div>
//   )}
// </div>


//           <h2 className='rounded-lg shadow-lg p-3 bg-red-500 font-bold text-2xl text-white mt-4 ml-20 mr-20'>List of Tasks to complete!!</h2>

//           {/* <ul className="flex flex-col mt-15 py-10 rounded-lg bg-white  space-y-5 text-xl font-bold"> */}
            
//           <div className="mt-10 space-y-7 ml-30 mr-30">
//           {items.map((item) => (
//   <li
//     key={item.id}
//     className="mt-10 ml-25 mr-25 flex items-center justify-between px-4 py-4 bg-gray-100 rounded-lg shadow-lg"
//   >
//     <input
//       type="checkbox"
//       checked={item.checked}
//       onChange={() => handleCheck(item.id)}
//       className="w-10 h-10 cursor-pointer"
//     />

//       <button
//         className="bg-green-600 text-white font-bold text-xl rounded-lg shadow-lg px-5 py-3"
//         onClick={() => handleComplete(item.id)}
//       >
//         Completed??
//       </button>


//     <label className="text-xl font-bold">{item.item}</label>

//     <span className="text-gray-600">{item.time}</span> {/* Display due time */}

//     {editingTaskId === item.id ? (
//       <div className="flex">
//         <input
//           type="text"
//           placeholder="Enter due time"
//           className="border rounded px-3 py-2"
//           onChange={(e) => handleNewTime(item.id, e.target.value)} // Update due time
//         />
//         <button
//           className="ml-3 bg-green-600 font-bold text-white rounded px-5 py-2"
//           onClick={() => setEditingTaskId(null)} // Close the input field
//         >
//           + Fix Due Time
//         </button>
//       </div>
//     ) : (
//       <button
//         className="rounded-lg px-7 py-4 bg-blue-600 text-white font-bold"
//         onClick={() => setEditingTaskId(item.id)} // Show the input field
//       >
//         + Add Due Time
//       </button>
//     )}

//     <button
//       className="bg-red-600 rounded-lg shadow-lg px-5 py-3"
//       onClick={() => handleDelete(item.id)}
//     >
//       <RiDeleteBin6Line className="text-3xl" />
//     </button>
//   </li>
// ))}

//           </div>
      

//     </div>
//   )
// }

// export default Home

import React, { useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Home = ({ setCompletedTasks }) => {
  const [newTask, setNewTask] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);

  const [items, setItems] = useState([
    { id: 1, checked: true, item: "Study React", time: "0:00" },
    { id: 2, checked: true, item: "Study AI", time: "0:00" },
    { id: 3, checked: true, item: "Play BB", time: "0:00" }
  ]);

  const navigate = useNavigate();

  const handleCheck = (id) => {
    setItems(items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleNewTask = (taskName) => {
    const newTask = {
      id: items.length + 1,
      checked: false,
      item: taskName,
      time: "0:00"
    };

    setItems([...items, newTask]);
  };

  const handleNewTime = (id, timeString) => {
    const parsedTime = new Date(timeString);
  
    // Optional: Check if it's a valid date
    if (isNaN(parsedTime)) {
      alert("Invalid date format! Please enter a valid date and time.");
      return;
    }
  
    setItems(items.map((item) =>
      item.id === id ? { ...item, time: parsedTime.toISOString() } : item
    ));
  };
  

  const handleComplete = (id) => {
    const completedTask = items.find((item) => item.id === id);

    if (completedTask && completedTask.checked) {
      setItems(items.filter((item) => item.id !== id));
      setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, completedTask]);
    } else {
      alert("Task must be marked as completed to move!");
    }
  };

  return (
    <div className="bg-blue-400 flex-rows min-h-screen items-center text-center justify-center">
      <h1 className="bg-white flex text-3xl font-bold p-4">Taskr</h1>

      <h2 className='mt-10 bg-white text-2xl font-bold p-1'>Organize Your Daily Tasks!</h2>

      <div className="flex flex-row items-center justify-center text-xl font-bold text-white mt-5 space-x-5">
        {!showInput && (
          <button
            className="rounded-lg shadow-lg p-4 bg-blue-600 hover:bg-blue-800"
            onClick={() => setShowInput(true)}
          >
            + Add New Task
          </button>
        )}

        <button
          className="bg-green-600 hover:bg-green-700 p-4 rounded-lg shadow-lg"
          onClick={() => {
            navigate("/completed");
          }}
        >
          View Completed Tasks
        </button>

        <button className="bg-red-500 hover:bg-red-700 p-4 rounded-lg shadow-lg">
          View Incomplete Tasks
        </button>
      </div>

      {showInput && (
        <div className="flex flex-row items-center space-x-7 mt-5">
          <input
            type="text"
            placeholder="Enter task name"
            className="border rounded bg-slate-400 px-3 py-2"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="mt-3 rounded-lg bg-green-600 hover:bg-green-800 text-white px-5 py-2"
            onClick={() => {
              handleNewTask(newTask);
              setNewTask("");
              setShowInput(false);
            }}
          >
            + Add Task
          </button>
        </div>
      )}

      <h2 className='rounded-lg shadow-lg p-3 bg-red-500 font-bold text-2xl text-white mt-4 ml-30 mr-30'>
        List of Tasks to Complete
      </h2>

      <div className="ml-30 mr-30 mt-10 space-y-7">
        {items.map((item) => (
          <li
            key={item.id}
            className="mt-10 flex items-center justify-between px-4 py-4 bg-gray-100 rounded-lg shadow-lg"
          >
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
              className="w-10 h-10 cursor-pointer"
            />

            <button
              className="bg-green-600 text-white font-bold text-xl rounded-lg shadow-lg px-5 py-3"
              onClick={() => handleComplete(item.id)}
            >
              Completed??
            </button>

            <label className="text-xl font-bold">{item.item}</label>

            <span className="text-gray-600">{item.time}</span>

            {editingTaskId === item.id ? (
              <div className="flex">
                <input
                  type="datetime-local"
                  className="border rounded px-3 py-2"
                  onChange={(e) => handleNewTime(item.id, e.target.value)}
                />
                <button
                  className="ml-3 bg-green-600 font-bold text-white rounded px-5 py-2"
                  onClick={() => setEditingTaskId(null)}
                >
                  Save Time
                </button>
              </div>
            ) : (
              <button
                className="rounded-lg px-7 py-4 bg-blue-600 text-white font-bold"
                onClick={() => setEditingTaskId(item.id)}
              >
                + Add Due Time
              </button>
            )}

            <button
              className="bg-red-600 rounded-lg shadow-lg px-5 py-3"
              onClick={() => handleDelete(item.id)}
            >
              <RiDeleteBin6Line className="text-3xl" />
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Home;
