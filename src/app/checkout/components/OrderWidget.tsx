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
                  <li>Front Panel: <span style={{color: item.configuration.capParts[0].hexcode}}>{item.configuration.capParts[0].colorId ? "Color: #"+ item.configuration.capParts[0].colorId : "" }</span></li>

                  <li>Peak:<span style={{color: item.configuration.capParts[1].hexcode}}>{item.configuration.capParts[1].colorId ? "Color: #"+ item.configuration.capParts[1].colorId : "" }</span> </li>

                  <li>Under Brim:<span style={{color: item.configuration.capParts[2].hexcode}}>{item.configuration.capParts[2].colorId ? "Color: #"+ item.configuration.capParts[2].colorId : "" }</span> </li>

                  <li>Upper Stripe:<span style={{color: item.configuration.capParts[3].hexcode}}>{item.configuration.capParts[3].colorId ? "Color: #"+ item.configuration.capParts[3].colorId : "" }</span> </li>

                  <li>Lower Stripe:
                    <span style={{color: item.configuration.capParts[4].hexcode}}>{item.configuration.capParts[4].colorId ? "Color: #"+ item.configuration.capParts[4].colorId : "" }</span>
                  </li>

                  <li>Back Mesh:<span style={{color: item.configuration.capParts[5].hexcode}}>{item.configuration.capParts[5].colorId ? "Color: #"+ item.configuration.capParts[5].colorId : "" }</span> </li>

                  <li>Snap Back:<span style={{color: item.configuration.capParts[6].hexcode}}>{item.configuration.capParts[6].colorId ? "Color: #"+ item.configuration.capParts[6].colorId : "" }</span> </li>
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
