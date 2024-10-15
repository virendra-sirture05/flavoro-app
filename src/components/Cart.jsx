import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
// import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalqty, item)=> totalqty + item.qty ,0);
  const totalPrice = cartItems.reduce((total, item)=> total + item.qty * item.price ,0)
  return (
    <>
      <div
        className={`fixed top-0 right-0 w-[22vw] bg-white h-full max-sm:w-full ${
          active ? "translate-x-0" : "translate-x-full"
        } transition-all duration-400 ease-in z-50`}
      >
        <div className="flex justify-between items-center my-3 p-4">
          <span className="font-bold text-xl">My Order</span>
          <MdCancel
            onClick={() => {
              setActive(!active);
            }}
            className="text-2xl hover:text-red-500 cursor-pointer"
          />
        </div>

        {
         cartItems.length > 0 ? cartItems.map((cartItems)=>{
            return(
              <ItemCard key={cartItems.id} cartItems={cartItems} />
            )
          }): <h2 className="text-center font-bold text-xl m-8">Your cart is empty</h2>
        }
        
        <div className="absolute bottom-0 p-2  max-sm:px-24">
          <h3 className="font-bold">Items : {totalQty}</h3>
          <h3 className="font-bold">Total Amount: {totalPrice}</h3>
          <hr />
         <button onClick={()=>{
          navigate('/success')
         }} className="bg-green-500 text-white px-2 py-2 rounded-lg w-[20vw] max-sm:w-[50vw] ">
            Check Out
          </button>
        </div>
      </div>
      <FaShoppingCart  onClick={()=>{
        setActive(!active)
      }} className={`bg-white rounded-lg p-2 text-5xl fixed right-0 bottom-0 m-4 shadow-md ${totalQty >= 1 ? "animate-bounce delay-500 transition-all": ""}` } />
    </>
  );
};

export default Cart;
