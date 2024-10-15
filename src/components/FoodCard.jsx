import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/CartSlice";

const FoodCard = ({ foodItems,handleToast }) => {
  const {id, img, name, price, desc, category, rating } = foodItems;
  
  const dispatch = useDispatch();
  return (
    <div className="m-5  w-[260px] bg-white overflow-hidden rounded-lg">
      <img
        src={img}
        alt=""
        className="hover:scale-110 h-[180px]  w-full object-fill cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="flex justify-between p-2">
        <h3 className="font-bold">{name}</h3>
        <h3 className="pr-2 text-green-500 font-bold">₹{price}</h3>
      </div>
      <p className="p-2">{desc.slice(0,60)}...</p>
      <div className="p-2 flex justify-between">
        <span className="flex items-center font-bold">
          <IoStarSharp className="text-yellow-400" />
          {rating}
        </span>
        <button onClick={()=>{
          dispatch(addToCart({id,name,img,price,desc,category,rating, qty:1}))
          handleToast(name);
        }} className="bg-green-400 text-white rounded-lg px-2 py-1">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
