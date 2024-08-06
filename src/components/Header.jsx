import React from "react";
import { DiGitCompare } from "react-icons/di";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { loginStatusActions } from "../store/loginStatusSlice";

const Header = () => {
  const dispatch = useDispatch();

  const loginStatus = useSelector((state) => state.reducer2.isLoggedIn);

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
            {loginStatus && (
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-black" + " underline" : ""
                }
              >
                Home
              </NavLink>
            )}

            {loginStatus && (
              <NavLink
                to={"/addtask"}
                className={({ isActive }) =>
                  isActive ? "text-black" + " underline" : ""
                }
              >
                Add Task
              </NavLink>
            )}

            {loginStatus && (
              <NavLink
                to={"/viewtask"}
                className={({ isActive }) =>
                  isActive ? "text-black" + " underline" : ""
                }
              >
                View Task
              </NavLink>
            )}

            {loginStatus ? (
              <button
                onClick={() => {
                  dispatch(loginStatusActions.doLogout());
                }}
              >
                Logout
              </button>
            ) : (
              <NavLink
                to={"/login"}
                className={({ isActive }) =>
                  isActive ? "text-black" + " underline" : ""
                }
              >
                Login
              </NavLink>
            )}

            {!loginStatus && (
              <NavLink
                to={"/signup"}
                className={({ isActive }) =>
                  isActive ? "text-black" + " underline" : ""
                }
              >
                SignUp
              </NavLink>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
