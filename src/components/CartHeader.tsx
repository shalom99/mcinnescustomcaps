"use client";
import { FC } from "react";
import { BsCart3 } from "react-icons/bs";

import { BiSolidUpArrow } from "react-icons/bi";
import { MdAddShoppingCart } from "react-icons/md";

import CartItem from "./CartItem";
import { useCartStore } from "@/libs/store";

type CartProps = {};

const CartHeader: FC<CartProps> = ({}) => {
  const { cartItems } = useCartStore();

  return (
    <div className="ml-4 flex gap-x-3 relative group">
          
      <BsCart3 size={25} />

      {
        // START HIDE/SHOW CART NUMBER
        cartItems.length === 0 ? (
          ""
        ) : (
          <div className="absolute top-[-5px] right-[-10px] bg-white rounded-full w-[17px] h-[17px] flex justify-center items-center">
            <p className="text-xs text-activeOrange font-bold">
              {cartItems.length}
            </p>
          </div>
          // END HIDE/SHOW CART NUMBER
        )
      }

      <div
        id="cartModal"
        className="
        hidden group-hover:block 
        absolute top-5 right-[-3px] w-[200px] z-50"
      >
        {cartItems.length === 0 ? (
          <div className="flex flex-col">
            <div className="flex justify-end">
              <div
                className="w-[30px] h-[15px] bg-activeOrange"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              ></div>
            </div>
            <div className="flex flex-col items-center gap-y-5 py-2 bg-activeOrange justify-center">
            <p className="text-center ">Your cart is empty</p>
            <MdAddShoppingCart size={70} />
              <div className="text-sm flex gap-x-5">
                <button className="outline outline-1">Design</button>
                <button className="outline outline-1">Visit Store</button>
              </div>
            </div>
          </div>
        ) : (
          <CartItem cartItems={cartItems} />
        )}
      </div>
    </div>
  );
};

export default CartHeader;
