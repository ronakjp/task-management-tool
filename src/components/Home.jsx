import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl m-3 p-2 text-cyan-700">
        Welcome to the Task Management App
      </h1>
      <span className="text-lg m-3 p-2 text-orange-500">
        Click login to get started ...
      </span>
    </div>
  );
};

export default Home;
