import React from 'react';

const Completed = ({ completedTasks }) => {
  return (
    <div className="min-h-screen p-5 items-center justify-center bg-blue-500">
      <div className="flex rounded-lg shadow-lg justify-center p-7 mt-5 bg-white font-bold text-2xl">
        View Completed Tasks
      </div>
      <ul className="mt-10 space-y-5">
        {completedTasks.map((task) => (
          <li
            key={task.id}
            className="bg-white px-4 py-7 text-xl rounded-lg shadow-lg font-bold text-center"
          >
            {task.item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Completed;
