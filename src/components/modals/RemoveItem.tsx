'use client'
import { FC } from "react";
import { useCartStore } from '@/libs/store'

type RemoveItemProps = {
  setRemoveItemModal: any
};

const RemoveItem: FC<RemoveItemProps> = ({setRemoveItemModal}) => {
  const { removeFromCart } = useCartStore()
  return (
    <>
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] z-50">
        <div className="bg-white flex flex-col justify-center items-center px-10 py-5">
          <p className="text-sm font-bold">Are you sure you want to remove this item?</p>
          <div className="flex gap-x-10 mt-5">
            <button onClick={handleOnRemove} className="bg-red-700 text-white px-3 py-1 rounded-full">Remove Item</button>
            <button onClick={() => {setRemoveItemModal(false)}} className="bg-green-700 px-5 py-1 text-white rounded-full">Back</button>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black z-40 opacity-70"></div>
    </>
  );

  function handleOnRemove(){
    removeFromCart()
    setRemoveItemModal(false)
  }
};

export default RemoveItem;
