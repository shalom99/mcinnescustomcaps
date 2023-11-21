"use client";
import { FC } from "react";
import { BsCart3 } from "react-icons/bs";

import { BiSolidUpArrow } from "react-icons/bi";
import { MdAddShoppingCart } from "react-icons/md";
import { useRouter } from 'next/navigation'
import CartItem from "./CartItem";
import { useCartStore } from "@/libs/store";

type CartProps = {};

const CartHeader: FC<CartProps> = ({}) => {
  const { cartItems } = useCartStore();
  const router = useRouter();

  return (
    <div className="ml-4 flex gap-x-3 relative group">
          
      <BsCart3 size={25} className="cursor-pointer" onClick={() => router.push('/cart')}/>

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
        absolute top-5 right-[-3px] w-[300px] z-50"
      >
        {cartItems.length === 0 ? (
          <div className="flex flex-col">
            <div className="flex justify-end mr-1">
              <div
                className="w-[30px] h-[15px] bg-activeOrange"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              ></div>
            </div>
            <div className="flex flex-col items-center pt-12 pb-5 bg-activeOrange justify-center rounded-lg">
         
            <MdAddShoppingCart size={100} className="text-gray-100" />
            <p className="mt-12 text-center font-bold text-md">Your Cart is empty.</p>
            <p className="text-sm font-light text-gray-100">Start filling it up with your favourites.</p>
              <div className="text-sm flex gap-x-5">
                <button className="mt-3 outline outline-1 p-2 rounded-lg bg-white text-activeOrange text-md">Design your own</button>
                {/* <button className="outline outline-1 p-1">Visit Store</button> */}
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
