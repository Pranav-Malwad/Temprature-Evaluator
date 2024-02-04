import React from "react";

const Temprature = ({ cel, temp, handleOnClick, handleOnChange }) => {
  return (
    <>
      <div className="border-black border-2 py-4 my-10 flex ">
        <div className=" flex items-center justify-center m-auto">
          <label className="mr-4"> Celsius</label>
          <input
            type="number"
            className="border-2 border-black p-2 "
            placeholder="Enter Temp in Celsius"
            onChange={handleOnChange}
            defaultValue={0}
          />
        </div>
        <div className="flex items-center justify-center m-auto">
          <label className="mr-4"> Farenheit</label>
          <input
            type="number"
            className="border-2 border-black p-2 "
            value={temp}
          />
        </div>
        <button
          className="mr-4 border-blue-700 border-2 w-40 hover:shadow-lg shadow-black"
          onClick={handleOnClick}
        >
          Click
        </button>
      </div>
    </>
  );
};

export default Temprature;
