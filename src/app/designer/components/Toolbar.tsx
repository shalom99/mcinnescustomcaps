"use client";
import { CSSProperties, FC, useState } from "react";
import ColorPicker from "./ColorPicker";
import LabelColorPicker from "./LabelColorPicker";
import { useLabelStore, useCapItemStore, useCartStore } from "@/libs/store";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import BrandingPicker from "./BrandingPicker";
import { ClipLoader } from "react-spinners";
import { useRouter } from 'next/navigation'
 

type ToolbarProps = {};

const Toolbar: FC<ToolbarProps> = ({}) => {
  const labels = useLabelStore();
  const {cart, addToCart} = useCartStore()
  const capItems = useCapItemStore();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  return (
    <>
      <div className="hidden lg:block h-full overflow-y-auto overflow-hidden px-5 lg:px-0">
        <div className="flex justify-center items-center">
          <h2 className="w-full text-center font-bold border-b-2 py-4">
            Custom Cap Designer
          </h2>
        </div>
        {/* START CAP PARTS */}
        {capItems.capItems.map((capItem) => (
          <div key={capItem.id}>
            <div
              onClick={() => capItems.setShowPicker(capItem.id)}
              className="flex items-center justify-between gap-x-3 cursor-pointer border-b-2 py-4 lg:px-2"
            >
              <h3 className="text-md text-slate-600 select-none">
                {capItem.name}
              </h3>
              <p style={{ color: capItem.hexcode }}>{capItem.hexcode}</p>
            </div>

            <div className="flex items-center flex-col gap-x-5 relative">
              {capItem.showColorPicker && (
                <div>
                  <ColorPicker title={capItem.name} capItemId={capItem.id} />
                </div>
              )}
            </div>
          </div>
        ))}
        {/* END CAP PARTS */}

        {/* START CAP LABELS */}
        {labels.labels.map((label) => (
          <div key={label.id} className="">
            <div
              onClick={() => labels.setShowPicker(label.id)}
              className="flex items-center justify-between gap-x-3 cursor-pointer border-b-2 py-4 px-2"
            >
              <h3 className="text-md text-slate-600 select-none">
                {label.name}
              </h3>

              {!label.showColorPicker ? (
                <MdOutlineKeyboardArrowDown />
              ) : (
                <MdOutlineKeyboardArrowUp />
              )}
            </div>

            <div className="flex items-center gap-x-5 relative">
              {label.showColorPicker && (
                <LabelColorPicker title={label.name} label={label} />
              )}
            </div>
          </div>
        ))}
        {/* END CAP LABELS */}

        <div className="lg:hidden w-full bg-yellow-200 grid grid-cols-4 gap-x-4 items-center">
          START CAP LABELS
          {capItems.capItems.map((capItem) => (
            <div key={capItem.id}>
              <div
                onClick={() => capItems.setShowPicker(capItem.id)}
                className="h-[75px] flex flex-col items-center justify-center bg-blue-200"
              >
                <h3 className="text-md text-slate-600 select-none text-center">
                  {capItem.name}
                </h3>
              </div>
            </div>
          ))}
          END CAP LABELS
        </div>

        <div className="flex justify-center py-4">
          <button
            onClick={addToCartHandler}
            className="bg-activeOrange rounded-full w-[170px] py-2 text-white flex items-center justify-center"
          >
            {isLoading ? (
              <ClipLoader
                color="white"
                loading={isLoading}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              "Add to Cart"
            )}
          </button>
        </div>
      </div>
    </>
  );

  function addToCartHandler() {
    setIsLoading(prev => (!prev))
    addToCart()
    router.push('/cart')
    


  }
};

export default Toolbar;
