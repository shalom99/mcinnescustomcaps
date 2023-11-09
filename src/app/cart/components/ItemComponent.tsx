"use client";
import { useCartStore } from "@/libs/store";
import { CartItem } from "@/libs/types";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillCartXFill } from "react-icons/bs";
import { LuView } from "react-icons/lu";
type ItemComponentProps = {
  item: CartItem;
  setRemoveItemModal: any;
  index: number;
  setSelectedRemoveItem: Dispatch<SetStateAction<null | number>>;
  setPreviewItem: Dispatch<
    SetStateAction<{
      front: string;
      back: string;
      left: string;
      right: string;
      bottom: string;
    }>
  >;
  setShowItemPreview: Dispatch<SetStateAction<boolean>>;
};

const ItemComponent: FC<ItemComponentProps> = ({
  item,
  setRemoveItemModal,
  setSelectedRemoveItem,
  index,
  setPreviewItem,
  setShowItemPreview,
}) => {
  const { setMockQuantity } = useCartStore();

  console.log(item);

  return (
    <>
      <div className="col-span-3 flex">
        <div
          id="left"
          className="w-[50%] flex items-center justify-center px-5 gap-x-5"
        >
          <AiFillCloseCircle
            onClick={handleRemoveItem}
            size={30}
            className="cursor-pointer"
          />
          <img src={item.views.front} alt="" width={150} />
          <LuView
            onClick={handleShowPreview}
            size={30}
            className="cursor-pointer mb-1"
          />
        </div>
        <div key={item.id} id="right" className="w-[50%]">
          <p className="text-activeOrange font-bold text-lg">
            Custom Hat Design - Request A Quote {index + 1}
          </p>
          <ul className="text-start list-disc list-inside font-bold">
            <li>
              Front Panel:{" "}
              <span style={{ color: item.configuration.capParts[0].hexcode }}>
                {item.configuration.capParts[0].colorId
                  ? "Color  #" + item.configuration.capParts[0].colorId
                  : "N/A"}
              </span>
            </li>
            <li>
              Peak:{" "}
              <span style={{ color: item.configuration.capParts[1].hexcode }}>
                {item.configuration.capParts[1].colorId
                  ? "Color  #" + item.configuration.capParts[1].colorId
                  : "N/A"}
              </span>
            </li>
            <li>
              Under Brim:{" "}
              <span style={{ color: item.configuration.capParts[2].hexcode }}>
                {item.configuration.capParts[2].colorId
                  ? "Color  #" + item.configuration.capParts[2].colorId
                  : "N/A"}
              </span>
            </li>
            <li>
              Upper Stripe:{" "}
              <span style={{ color: item.configuration.capParts[3].hexcode }}>
                {item.configuration.capParts[3].colorId
                  ? "Color  #" + item.configuration.capParts[3].colorId
                  : "N/A"}
              </span>
            </li>
            <li>
              Lower Stripe:{" "}
              <span style={{ color: item.configuration.capParts[4].hexcode }}>
                {item.configuration.capParts[4].colorId
                  ? "Color  #" + item.configuration.capParts[4].colorId
                  : "N/A"}
              </span>
            </li>
            <li>
              Back Mesh:{" "}
              <span style={{ color: item.configuration.capParts[5].hexcode }}>
                {item.configuration.capParts[5].colorId
                  ? "Color  #" + item.configuration.capParts[5].colorId
                  : "N/A"}
              </span>
            </li>
            <li>
              Snap Back:{" "}
              <span style={{ color: item.configuration.capParts[6].hexcode }}>
                {item.configuration.capParts[6].colorId
                  ? "Color  #" + item.configuration.capParts[6].colorId
                  : "N/A"}
              </span>
            </li>

            <li>
              Front Branding:{" "}
              {item.configuration.brandings[0].imageURL ? "With (+$2)" : "N/A"}
            </li>
            <li>
              Side Left Branding:{" "}
              {item.configuration.brandings[1].imageURL ? "With (+$2)" : "N/A"}{" "}
            </li>
            <li>
              Side Right Branding:{" "}
              {item.configuration.brandings[2].imageURL ? "With (+$2)" : "N/A"}
            </li>
            <li>
              Back Branding:{" "}
              {item.configuration.brandings[3].imageURL ? "With (+$2)" : "N/A"}
            </li>
            {/* <li>
              Under Brim Branding:{" "}
              {item.configuration.brandings[4].imageURL ? "IMG" : "N/A"}
            </li> */}
            <li>Hat Profile: {item.configuration.hatProfile} </li>
            <li>Cap Fabric Material: </li>
            <li>
              Front Label: {item.configuration.labels[0].show ? "With (+$2)" : "N/A"}{" "}
            </li>
            <li>
              Side Left Label:{" "}
              {item.configuration.labels[2].show ? "With (+$2)" : "N/A"}{" "}
            </li>
            <li>
              Side Right Label:{" "}
              {item.configuration.labels[1].show ? "With (+$2)" : "N/A"}{" "}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-sm font-bold">${(item.mockBasePrice + item.addonPrice).toFixed(2)+ " "} 
            (${item.mockBasePrice} + add-ons)
        </p>
      </div>
      <div>
        <select
          value={item.mockQuantity}
          onChange={(e) => setMockQuantity(item.id, Number(e.target.value))}
          className="text-sm"
        >
          <option value="25" className="text-sm">
            25 pcs. - $27 per pc.
          </option>
          <option value="50">50 pcs. - $18.95 per pc.</option>
          <option value="100">100 pcs. - $15.95 per pc.</option>
          <option value="200">200 pcs. - $14 per pc.</option>
        </select>
      </div>
      <div>
        <p>${((item.mockBasePrice + item.addonPrice) * item.mockQuantity).toFixed(2)}</p>
      </div>
    </>
  );


  function handleShowPreview() {
    setPreviewItem(item.views);
    setShowItemPreview(true);
  }

  function handleRemoveItem() {
    setSelectedRemoveItem(item.id);
    setRemoveItemModal(true);
  }
};

export default ItemComponent;
