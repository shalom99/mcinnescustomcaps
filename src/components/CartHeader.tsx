"use client";
import { FC } from "react";
import { BsCart3 } from "react-icons/bs";

import { BiSolidUpArrow } from "react-icons/bi";


import CartItem from "./CartItem";
import { useCartStore } from "@/libs/store";
type CartProps = {};

const CartHeader: FC<CartProps> = ({}) => {
  const { cartItems } = useCartStore();



  return (
    <div className="ml-4 relative group">
      <BsCart3 size={25} />

     
      {
      // START HIDE/SHOW CART NUMBER  
      cartItems.length === 0 ? (
        ""
      ) : (
        <div className="absolute top-[-5px] right-[-10px] bg-white rounded-full w-[17px] h-[17px] flex justify-center items-center">
          <p className="text-xs text-activeOrange font-bold">{cartItems.length}</p>
        </div>
        // END HIDE/SHOW CART NUMBER  
      )}

      <div
        id="cartModal"
        className="
        hidden group-hover:block 
        absolute right-0 w-[350px] z-50"
      >

        {cartItems.length === 0 ? (
      
          <div className="flex flex-col">
            <div className="flex justify-end">
              <BiSolidUpArrow size={30} className="text-activeOrange" />
            </div>

            <p className="text-center bg-activeOrange">Your cart is empty</p>
          </div>

        ) : (
            
          <CartItem cartItems={cartItems}/>
          
        )}


      </div>
    </div>
  );
};

export default CartHeader;