"use client";
import { FC } from "react";
import { BsCart3 } from "react-icons/bs";

import { BiSolidUpArrow } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import CartItem from "./CartItem";
import { useCartStore } from "@/libs/store";



const ProfileHeader: FC= ({}) => {
  const { cartItems } = useCartStore();

  return (
    <div className="ml-4 flex gap-x-3 relative group">
          
      <GoPerson size={25} />

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
        absolute top-5 right-0 w-[200px] z-50"
      >
        {cartItems.length === 0 ? (
          <div className="flex flex-col">
            <div className="flex justify-end">
              <div
                className="w-[30px] h-[15px] bg-activeOrange"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              ></div>
            </div>
            <div className="flex flex-col item-center py-2 bg-activeOrange justify-center">
         
              <div className="flex justify-center gap-x-5">
                <button>Login</button>
                <button>Register</button>
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


export default ProfileHeader