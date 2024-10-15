import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slice/CartSlice";
import {increamentQty} from '../redux/slice/CartSlice'
import {decreamentQty} from '../redux/slice/CartSlice'
import toast from "react-hot-toast";

const ItemCard = ({ cartItems }) => {
  const dispatch = useDispatch();

  const { id, img, name, price, des, category, rating, qty } = cartItems;
  return (
    <div className="flex shadow-md mx-3 p-3">
      <span className="absolute right-5">
        <MdDelete onClick={()=>{
          dispatch(removeFromCart({id},img,name,price,des));
          toast(`${name} Removed`, {
            icon: '',
          });
        }} />
      </span>
      <img src={img} alt="" className="w-[50px] h-[50px]" />
      <div className="flex flex-col ml-2">
        <span className="">{name}</span>
        <span className="text-green-500 font-bold">₹{price}</span>
      </div>
      <div className="flex items-center justify-evenly gap-2 absolute right-7 mr-4 mt-8 ">
        <AiOutlineMinus onClick={()=>{
          qty > 1 ? dispatch(decreamentQty({id})) : ""
        }} className="border-2 border-gray-400 hover:text-orange-500 hover:border-orange-500 rounded-md" />
        <span>{qty}</span>
        <AiOutlinePlus onClick={()=>{
          dispatch(increamentQty({id}))
        }} className="border-2 border-gray-400 hover:text-green-500 hover:border-green-400 hover:font-bold hover:border-r-green-500 rounded-md transition-all duration-200 ease-in-out" />
      </div>
    </div>
  );
};

export default ItemCard;
