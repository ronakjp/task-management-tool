import React from "react";
import { DiGitCompare } from "react-icons/di";

const Header = () => {
  return (
    <div className=" flex h-40 w-full p-1 border-b-2 border-solid border-slate-700 ">
      <div className="flex items-center justify-between w-full">
        <div className=" flex items-center gap-2">
          <div>
            <DiGitCompare size={50} />
          </div>
          <div>
            <h1 className="text-xl text-orange-900 ">Task Management Tool</h1>
          </div>
        </div>
        <div className="w-80">
          <ul className="flex justify-evenly gap-3  text-base text-orange-500 ">
            <li>Home</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
