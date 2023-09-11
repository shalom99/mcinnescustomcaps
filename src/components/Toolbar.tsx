"use client";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import ColorPicker from "./ColorPicker";
import LabelColorPicker from "./LabelColorPicker";
import { useLabelStore, useCapItemStore } from "@/libs/store";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { usePreviewImgStore } from "@/libs/store/previewStore";
import BrandingPicker from "./BrandingPicker";

type ToolbarProps = {};

const Toolbar: FC<ToolbarProps> = ({}) => {
  const labels = useLabelStore();
  const capItems = useCapItemStore();




  return (
    <>
      <div className="h-full overflow-y-auto overflow-hidden px-5 lg:px-0">

        {/* START CAP PARTS */}
        {capItems.capItems.map((capItem) => (
          <div key={capItem.id}>
            <div
              onClick={() => capItems.setShowPicker(capItem.id)}
              className="flex items-center justify-between gap-x-3 cursor-pointer border-y-2 py-4 lg:px-2"
            >
              <h3 className="text-md text-slate-600 select-none">
                {capItem.name}
              </h3>
              <p style={{ color: capItem.hexcode }}>{capItem.hexcode}</p>
            </div>

            <div className="flex items-center flex-col gap-x-5 relative">
              {capItem.showColorPicker && 
              <><ColorPicker title={capItem.name} capItemId={capItem.id} />
                    <BrandingPicker />
                    </>
              
              }

            </div>
          
      

            
          </div>
        ))}
          {/* END CAP PARTS */}

        {/* START CAP LABELS */}  
        {labels.labels.map((label) => (
          <div key={label.id} className="">
            <div
              onClick={() => labels.setShowPicker(label.id)}
              className="flex items-center justify-between gap-x-3 cursor-pointer border-y-2 py-4 px-2"
            >
              <h3 className="text-md text-slate-600 select-none">
                {label.name}
              </h3>

             {!label.showColorPicker ? <MdOutlineKeyboardArrowDown /> :
             <MdOutlineKeyboardArrowUp /> }
            </div>

            <div className="flex items-center gap-x-5 relative">
              {label.showColorPicker && (
                <LabelColorPicker
                  title={label.name}
                  label={label}
                />
              )}
            </div>

            
          </div>
        ))}
        {/* END CAP LABELS */}

        {/* <h1>{JSON.stringify(labels.labels[0].text)}</h1> */}

 
      </div>
    </>
  );

  function handleSelected(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.currentTarget.files);
  }

  function checkTool() {}
};

export default Toolbar;
