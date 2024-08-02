import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";

import ViewModal from "../Modal/ViewModal";
import EditTask from "./EditTask";
import { useSelector } from "react-redux";

const ViewTask = () => {
  const [open, setOpen] = useState(false);

  const tasks = useSelector((state) => state.reducer1.tasks);

  function handleOnClose() {
    setOpen(false);
  }

  console.log(tasks);

  //This function retuns the Tailwind CSS bg colour property depending on the status passed
  function getColor(statusType) {
    if (statusType === "Completed") {
      return "bg-green-400";
    } else if (statusType === "To Do") {
      return "bg-red-400";
    } else if (statusType === "In Progress") {
      return "bg-yellow-400";
    }
  }

  return (
    <>
      <ViewModal isOpen={open}>
        <EditTask onClose={handleOnClose} />
      </ViewModal>

      <div className="flex flex-col bg-orange-50 border border-orange-300 rounded-xl shadow-lg w-3/4 h-3/4 mx-auto my-40 p-4">
        <ul className="flex flex-col overflow-hidden overflow-y-scroll h-full overflow-x-auto">
          <li className="w-full bg-orange-400 rounded-md mb-1 p-2 sticky top-0 text-lg">
            <div className="flex justify-around font-bold text-center">
              <div>Task Title</div>
              <div>Task Description</div>
              <div>Status</div>
            </div>
          </li>

          {tasks.map((eachTask) => (
            <li className="mt-3 hover:cursor-pointer hover:shadow-2xl hover:border hover:rounded hover:opacity-80 font-thin w-full rounded-sm bg-orange-100 shadow-md mb-5 p-7 border-b-[1px] border-black">
              <div className="flex justify-between p-2">
                <div className="w-1/3 text-justify m-2">{eachTask.title}</div>
                <div className="w-1/3 text-justify m-2">
                  {eachTask.description}
                </div>
                <div className="flex items-center">
                  <div
                    className={`flex justify-center items-center font-medium mt-2 h-10 rounded-md placeholder:font-thin opacity-80 w-32 pb-2 italic ${getColor(
                      eachTask.status
                    )} `}
                  >
                    <span>{eachTask.status}</span>
                  </div>

                  <MdDelete size={32} className="ml-3  hover:text-red-600 " />
                  <MdEditSquare
                    size={28}
                    className="ml-3 hover:text-indigo-400"
                    onClick={() => {
                      setOpen(true);
                    }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ViewTask;
