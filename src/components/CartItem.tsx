"use client";
import { calculateTotal } from "@/libs/config/helpers";
import { useLoaderStore } from "@/libs/store";
import { CartItem } from "@/libs/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";

type CartItemProps = {
  cartItems: any;
};

const CartItem: FC<CartItemProps> = ({ cartItems }) => {
  const { isLoading, setIsLoading } = useLoaderStore();
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        <div
          className="w-[30px] h-[15px] bg-activeOrange"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        ></div>
      </div>
      <div id="modalHeader" className="bg-activeOrange py-2 px-3">
        <p className="text-xs">MY CART {cartItems.length} ITEM </p>
      </div>

      <div
        id="modalBody"
        className="max-h-[300px] bg-yellow-300 overflow-y-auto"
      >
        {cartItems.map(function (item: CartItem) {
          return (
            <>
              <div className="bg-white flex px-5 py-5 justify-between gap-x-5">
                <div className="border w-[100px] h-auto">
                  <img src={item.views.front} alt="" />
                </div>
                <div className="grow">
                  <h3 className="text-black text-sm font-bold">{item.name}</h3>
                  <ul className="grid grid-cols-2 text-black text-sm">
                    <li>Quantity</li>
                    <li className="text-center">{item.quantity}</li>
                    <li>Price / cap</li>
                    <li className="text-center">$ {item.price}</li>
                    <li>Item Total</li>
                    <li className="text-center">$ {item.subtotal}</li>
                  </ul>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/* <p className="bg-red-700">{JSON.stringify(cartItems[0])}</p> */}
      <div
        id="modalFooter"
        className="p-3 bg-white text-black flex flex-col items-end"
      >
        <p className="text-xs mb-2 font-bold">
          SUB TOTAL {calculateTotal(cartItems).toFixed(2)}
        </p>
        <div className="w-full flex justify-between">
          <button
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false)
                router.push("/cart");
              }, 2000);
            }}
            className="w-[35%] border-2 border-activeOrange px-2 py-3 text-sm text-activeOrange text-center"
          >
            View Cart
          </button>
          <button
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false)
                router.push("/checkout");
              }, 2000);
            }}
            className="w-[55%] bg-primaryGreen py-3 px-2 text-sm text-white text-center"
          >
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
