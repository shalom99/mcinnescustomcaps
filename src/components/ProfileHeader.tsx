"use client";
import { FC } from "react";
import { BsCart3 } from "react-icons/bs";
import { IoEnterOutline } from "react-icons/io5";
import { BiSolidUpArrow } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import CartItem from "./CartItem";
import { useCartStore } from "@/libs/store";
import { PiPackageLight } from "react-icons/pi";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const ProfileHeader: FC = ({}) => {
  const { cartItems } = useCartStore();

  return (
    <div className="ml-4 flex items-center gap-x-1 relative group cursor-pointer">
      <GoPerson size={25} className="rounded-full " />
      <p className="text-xs font-bold">Login / Register</p>

      <div
        id="cartModal"
        className="
        hidden group-hover:block 
        absolute top-5 right-[-70px] z-50 w-[270px]"
      >
        {cartItems.length === 0 ? (
          <div className="flex flex-col">
            <div className="flex justify-center">
              <div
                id="modalTriangle"
                className="w-[30px] h-[15px] bg-activeOrange"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              ></div>
            </div>
            <div className="flex flex-col py-2 px-2 bg-activeOrange rounded-lg ">
              <div className="flex flex-col gap-y-4 text-sm text-start">
                <button className="text-start flex items-center gap-x-5 hover:border-b-2">
                  <IoEnterOutline size={25} />
                  <p>     Login / Register</p>
             
                </button>

                <button className="text-start flex items-center gap-x-5 hover:border-b-2">
                  <PiPackageLight size={25} />
                  Orders
                </button>

                <button className="text-start flex items-center gap-x-5 hover:border-b-2">
                  <AiOutlineQuestionCircle ne size={25} />
                  FAQ
                </button>
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

export default ProfileHeader;
