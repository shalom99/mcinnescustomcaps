'use client'
import { calculateTotal } from "@/libs/config/helpers";
import { useCartStore } from "@/libs/store";
import { CartItem } from "@/libs/types";
import { FC } from "react";

type OrderWidgetProps = {};

const OrderWidget: FC<OrderWidgetProps> = ({}) => {
    const { cartItems } = useCartStore()
  return (
    <div
      id="orderDetails"
      className="w-full lg:w-[40%] grid grid-cols-3 border auto-rows-min py-5 px-5"
    >
      <h2 className="col-span-3 font-bold text-xl">YOUR ORDER</h2>
      <div className="col-span-3 pt-3 pb-2 flex justify-between border-b font-bold">
        <p>Product</p>
        <p>Subtotal</p>
      </div>

    {
        cartItems.map(function(item: CartItem){
            return(
                <div key={item.id} className="col-span-3 py-3 grid grid-cols-3 text-center items-center gap-x-5">
                <div className="">
                  <p>{item.name}</p>
                </div>
        
                <ul className="text-start list-disc list-inside">
                  <li>Front Panel: {item.configuration.capParts[0].hexcode}</li>
                  <li>Peak:{item.configuration.capParts[1].hexcode} </li>
                  <li>Under Brim:{item.configuration.capParts[2].hexcode} </li>
                  <li>Upper Stripe:{item.configuration.capParts[3].hexcode} </li>
                  <li>Lower Stripe:{item.configuration.capParts[4].hexcode} </li>
                  <li>Back Mesh:{item.configuration.capParts[5].hexcode} </li>
                  <li>Snap Back:{item.configuration.capParts[6].hexcode} </li>
                </ul>
        
                <div className="flex justify-between">
                  <p>x {item.quantity}</p>
                  <p className="">${item.subtotal.toFixed(2)}</p>
                </div>
              </div>
            )
        })
    }

     

      <div className="col-span-3 flex justify-between border-y py-2">
        <p className="font-bold">Subtotal</p>
        <p>${calculateTotal(cartItems).toFixed(2)}</p>
      </div>
      <div className="col-span-3 flex justify-between border-b py-2">
        <p className="font-bold">Total</p>
        <p>${calculateTotal(cartItems).toFixed(2)}</p>
      </div>
      <div className="col-span-3 py-5">
        <p>
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our <span className="text-activeOrange">privacy policy.</span>{" "}
        </p>
      </div>
      <div className="col-span-3 mb-4">
        <input type="checkbox" className="" />

        <p className="ml-3 inline">
          I have read and agree to the website
          <span className="text-activeOrange"> terms and conditions </span>{" "}
          <span> * </span>
        </p>
      </div>
      <button className="col-span-3 rounded-full bg-activeOrange font-bold py-2">
        PLACE ORDER
      </button>
    </div>
  );
};

export default OrderWidget;
