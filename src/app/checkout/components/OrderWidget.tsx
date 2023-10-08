'use client'
import { calculateTotal } from "@/libs/config/helpers";
import { useCartStore } from "@/libs/store";
import { CartItem } from "@/libs/types";
import { FC } from "react";

type OrderWidgetProps = {};

const OrderWidget: FC<OrderWidgetProps> = ({}) => {
    const { cartItems } = useCartStore()
  return (
    <>
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
    </>
  );
};

export default OrderWidget;
