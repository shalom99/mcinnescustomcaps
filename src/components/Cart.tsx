"use client";
import { FC } from "react";
import { BsCart3, BsCartX } from "react-icons/bs";
import CartModal from "./modals/CartModal";
import { useCartStore } from "@/libs/store/index";
import { BiSolidUpArrow } from "react-icons/bi";
import Link from "next/link";
type CartProps = {};

const Cart: FC<CartProps> = ({}) => {
  const { cart } = useCartStore();
  return (
    <div className="ml-4 relative group">
      <BsCart3 size={25} />
      {cart === 0 ? (
        ""
      ) : (
        <div className="absolute top-[-5px] right-[-10px] bg-white rounded-full w-[17px] h-[17px] flex justify-center items-center">
          <p className="text-xs text-activeOrange font-bold">{cart}</p>
        </div>
      )}

      <div
        id="cartModal"
        className="
        hidden group-hover:block 
        absolute right-0 w-[350px] z-50"
      >
        {cart === 0 ? (
          <div className="flex flex-col">
            <div className="flex justify-end">
              <BiSolidUpArrow size={30} className="text-activeOrange" />
            </div>

            <p className="text-center bg-activeOrange">Your cart is empty</p>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="flex justify-end">
              <BiSolidUpArrow size={30} className="text-activeOrange" />
            </div>
            <div id="modalHeader" className="bg-activeOrange py-2 px-3">
              <p className="text-xs">MY CART {cart} ITEM</p>
            </div>

            <div
              id="modalBody"
              className="bg-white flex px-5 py-5 justify-between gap-x-5"
            >
              <div className="border w-[100px] h-auto">
                <img src="./cap/1.png" alt="" />
              </div>
              <div>
                <h3 className="text-black text-sm font-bold">
                  Custom Hat Design - Request A Quote
                </h3>
                <ul className="grid grid-cols-2 text-black text-sm">
                  <li>Quantity</li>
                  <li>{25}</li>
                  <li>Price / cap</li>
                  <li>$AUD {parseFloat("20.15")}</li>
                </ul>
              </div>
            </div>

            <div
              id="modalFooter"
              className="p-3 bg-white text-black flex flex-col items-end"
            >
              <p className="text-xs mb-2">
                SUB TOTAL AUD {(20.15 * 25).toFixed(2)}
              </p>
              <div className="w-full flex justify-between">
                <Link
                  href="/cart"
                  className="w-[35%] border-2 border-activeOrange px-2 py-3 text-sm text-activeOrange text-center"
                >
                  View Cart
                </Link>
                <button className="w-[55%] bg-primaryGreen py-3 px-2 text-sm text-white text-center">
                  Go to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
