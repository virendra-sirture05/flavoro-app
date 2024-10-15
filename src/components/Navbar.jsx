import React from "react";
import { useDispatch } from "react-redux";
import {setSearch} from '../redux/slice/SearchSlice'
const Navbar = () => {

  const dispatch = useDispatch();
  return (
    <div className="flex justify-between p-4 items-center max-sm:flex-col">
      <div className="max-sm:py-4">
        <h2 className="text-gray-500 text-xl">
          {new Date().toUTCString().slice(0, 16)}
        </h2>
        <h1 className="font-bold text-2xl">Flavoro Foods</h1>
      </div>
      <div>
        <input
          className="border border-gray-400 p-2 rounded-lg outline-none w-96"
          type="text"
          placeholder="search items"
          autoComplete="off"
          onChange={(e)=> dispatch(setSearch(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Navbar;
