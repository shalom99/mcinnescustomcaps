"use client";
import { FC } from "react";
import { IoEnterOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import CartItem from "./CartItem";
import { useCartStore } from "@/libs/store";
import { PiPackageLight } from "react-icons/pi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Link from "next/link";

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
                <div className="text-start flex items-center gap-x-5 ">
                  <IoEnterOutline size={25} />
                  <div className="flex gap-x-2">
                    <Link href="/customer/account/login" className="hover:border-b-2"> Login </Link> /
                    <Link href="/customer/account/register" className="hover:border-b-2"> Register</Link>
                  </div>
                </div>

                <div className="text-start flex items-center gap-x-5">
                  <PiPackageLight size={25} />
                  <Link href="/customer/account/login" className="hover:border-b-2">Orders</Link>
                </div>

                <div className="text-start flex items-center gap-x-5 ">
                  <AiOutlineQuestionCircle ne size={25} />
                  <button className="hover:border-b-2"> FAQ</button>
                </div>
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
