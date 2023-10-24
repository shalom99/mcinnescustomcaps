"use client";
import { FC, useState } from "react";
import ColorPicker from "./ColorPicker";
import LabelColorPicker from "./LabelColorPicker";
import { useLabelStore, useCapItemStore, useBrandingStore } from "@/libs/store";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

import AddToCartButton from "./AddToCartButton";
import BrandingPicker from "./BrandingPicker";


type ToolbarProps = {};

const Toolbar: FC<ToolbarProps> = ({}) => {
  const labels = useLabelStore();
  const capItems = useCapItemStore();
  const {brandings, setShowBrandingPicker} = useBrandingStore()
  const [hatProfile, setHatProfile] = useState("");

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
              <div className="flex flex-col text-sm">
              <p style={{ color: capItem.hexcode }}>{capItem.colorId ? "Color #"+capItem.colorId : ""}</p>
              </div>
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
          <div key={"label"+label.id} className="">
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
                <LabelColorPicker label={label} />
              )}
            </div>
          </div>
        ))}
        {/* END CAP LABELS */}


        {/* START CAP BRANDINGS */}
        {brandings.map((branding) => (
          <div key={"branding"+branding.id} className="">
            <div
              onClick={() => setShowBrandingPicker(branding.id)}
              className="flex items-center justify-between gap-x-3 cursor-pointer border-b-2 py-4 px-2"
            >
              <h3 className="text-md text-slate-600 select-none">
                {branding.part} Branding
              </h3>

              {!branding.showBrandingPicker ? (
                <MdOutlineKeyboardArrowDown />
              ) : (
                <MdOutlineKeyboardArrowUp />
              )}
            </div>

            <div className="flex items-center gap-x-5 relative">
              {branding.showBrandingPicker && (
                <BrandingPicker brandingId={branding.id}/>
              )}
            </div>
          </div>
        ))}
        {/* END CAP BRANDINGS */}


        <div  className="">
            <div
              
              className="flex items-center justify-between gap-x-3 cursor-pointer border-b-2 py-4 px-2"
            >
              <h3 className="text-md text-slate-600 select-none">
            Select Hat Profile
              </h3>
                <select defaultValue={0} onChange={(e) => { setHatProfile(e.target.value)}} name="hatProfile" id="hatProfile" >
                <option value="0" disabled className="text-gray-300">Choose</option>
                  <option value="Low">Low</option>
                  <option value="Mid">Mid</option>
                  <option value="High">High</option>
                </select>
        
            </div>

           
          </div>



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
          <AddToCartButton />
        </div>
      </div>
    
    </>
  );
};

export default Toolbar;
