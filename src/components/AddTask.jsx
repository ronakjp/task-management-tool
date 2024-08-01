import React from "react";
import { Form } from "react-router-dom";

const AddTask = () => {
  return (
    <div className=" flex flex-col bg-orange-50  border-orange-300 border-1 rounded-xl shadow-lg w-2/3">
      <div className="p-11 flex flex-col h-full  mb-12">
        <div className="flex w-full justify-center ">
          <h1 className="text-xl font-bold">Add New Task</h1>
        </div>
        <div className="w-full">
          <Form className="flex flex-col mt-9 " method="post">
            <div className="font-light flex p-6 flex-col ">
              <label className="mt-2" htmlFor="title">
                Title
              </label>
              <input
                className="rounded-md mt-2 h-10  placeholder:text-slate-200 placeholder:italic"
                type="text"
                id="title"
                name="title"
                placeholder="Enter task's title"
              />
              <label className="mt-2" htmlFor="description">
                Description
              </label>
              <textarea
                className="rounded-md mt-2   placeholder:text-slate-200 placeholder:italic"
                name="description"
                id="description"
                rows={8}
                cols={40}
                placeholder="Enter task's description"
              />

              <label className="mt-7" htmlFor="cars">
                Task Status:
              </label>

              <select
                className="rounded-md mt-2 h-10 "
                name="status"
                id="status"
              >
                <option selected value="To Do">
                  To Do
                </option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="flex justify-center">
              <button
                className="mt-10 mx-11 h-10 bg-orange-400 bg-opacity-70 rounded-lg w-full font-bold  active:bg-opacity-35"
                type="submit"
              >
                Add Task
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
