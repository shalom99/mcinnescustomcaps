"use client";
import { useCartStore } from "@/libs/store";
import { CartItem } from "@/libs/types";
import { FC, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillCartXFill } from "react-icons/bs";
import { LuView } from 'react-icons/lu'
type ItemComponentProps = {
  item: CartItem;
  setRemoveItemModal: any;
  index: number
};

const ItemComponent: FC<ItemComponentProps> = ({
  item,
  setRemoveItemModal,
  index
}) => {
  const { cartItems,setMockQuantity} = useCartStore()

  return (
    <>
      <div className="col-span-3 flex">
        <div id="left" className="w-[50%] flex items-center justify-center px-5 gap-x-5">
          <AiFillCloseCircle
            onClick={() => {
              setRemoveItemModal(true);
            }}
            size={30}
            className="cursor-pointer"
          />
          <img src={item.views.front} alt="" width={150} />
          <LuView 
          onClick={() => {

          }} 
          size={30} 
          className="cursor-pointer mb-1"/>
        </div>
        <div key={item.id} id="right" className="w-[50%]">
          <p className="text-activeOrange font-bold text-lg">
            Custom Hat Design - Request A Quote {index + 1}
          </p>
          <ul className="text-start list-disc list-inside font-bold">
            <li>Front Panel: {item.configuration.capParts[0].hexcode ? item.configuration.capParts[0].hexcode : 'N/A'}</li>
            <li>Peak: {item.configuration.capParts[1].hexcode ? item.configuration.capParts[1].hexcode : 'N/A'} </li>
            <li>Under Brim: {item.configuration.capParts[2].hexcode ? item.configuration.capParts[2].hexcode : 'N/A'} </li>
            <li>Upper Stripe: {item.configuration.capParts[3].hexcode ? item.configuration.capParts[3].hexcode : 'N/A'} </li>
            <li>Lower Stripe: {item.configuration.capParts[4].hexcode ? item.configuration.capParts[4].hexcode : 'N/A'}</li>
            <li>Back Mesh: {item.configuration.capParts[5].hexcode ? item.configuration.capParts[5].hexcode : 'N/A'}</li>
            <li>Snap Back: {item.configuration.capParts[6].hexcode ? item.configuration.capParts[6].hexcode : 'N/A'} </li>
            <li>Front Branding: </li>
            <li>Side Left Branding: </li>
            <li>Side Right Branding: </li>
            <li>Back Branding: </li>
            <li>Under Brim Branding: </li>
            <li>Hat Profile:  </li>
            <li>Cap Fabric Material:  </li>
            <li>Front Label:  </li>
            <li>Side Left Label:  </li>
            <li>Side Right Label:  </li>
          </ul>
        </div>
      </div>
      <div>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <div>
        <input
          type="number"
          value={item.mockQuantity}
          className="border text-black w-[100px] text-center"
          min={25}
          onChange={(e) => setMockQuantity(item.id,Number(e.target.value))}
          max={1000}
        />
      </div>
      <div>
        <p>${(item.price * item.mockQuantity).toFixed(2)}</p>
      </div>
    </>
  );
};

export default ItemComponent;
