import React from "react";
import { Form } from "react-router-dom";
const Login = () => {
  return (
    <div className=" flex flex-col bg-orange-50  border-orange-300 border-1 shadow-lg rounded-xl w-1/2">
      <div className="p-11 flex flex-col h-full items-center justify-center mb-12">
        <div className="flex w-full justify-center ">
          <h1 className="text-xl font-bold">Login</h1>
        </div>
        <div className="w-full">
          <Form className="flex flex-col mt-9 " method="post">
            <div className="font-light flex p-6 flex-col ">
              <label className="mt-2" htmlFor="email">
                Email
              </label>
              <input
                className="rounded-md mt-2 h-10  placeholder:text-slate-200 placeholder:italic"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />

              <label className="mt-6" htmlFor="password">
                Password
              </label>
              <input
                className=" rounded-md mt-2 h-10 placeholder:text-slate-200 placeholder:italic"
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex justify-center">
              <button
                className="mt-10 mx-11 h-10 bg-orange-400 bg-opacity-70 rounded-lg w-full font-bold  active:bg-opacity-35 "
                type="submit"
              >
                Login
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
