"use client";
import { FC} from "react";
import ColorPicker from "./ColorPicker";
import LabelColorPicker from "./LabelColorPicker";
import { useLabelStore, useCapItemStore } from "@/libs/store";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import BrandingPicker from "./BrandingPicker";

type ToolbarProps = {};

const Toolbar: FC<ToolbarProps> = ({}) => {
  const labels = useLabelStore();
  const capItems = useCapItemStore();

  return (
    <>
      <div
      className="hidden lg:block h-full overflow-y-auto overflow-hidden px-5 lg:px-0">
        {/* START CAP PARTS */}
        {capItems.capItems.map((capItem) => (
          < div key={capItem.id}>
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
              { capItem.showColorPicker && 
          
                < div>
                  <ColorPicker title={capItem.name} capItemId={capItem.id} />
                  <BrandingPicker />
                </div>
            
              }
            </div>
          </div>
        ))}
          {/* END CAP PARTS */}

        {/* START CAP LABELS */}  
        { labels.labels.map((label) => (
          <div key={label.id} className="">
            <div
              onClick={() => labels.setShowPicker(label.id)}
              className="flex items-center justify-between gap-x-3 cursor-pointer border-y-2 py-4 px-2"
            >
              <h3 className="text-md text-slate-600 select-none">
                {label.name}
              </h3>

             {!label.showColorPicker 
              ? <MdOutlineKeyboardArrowDown /> 
              : <MdOutlineKeyboardArrowUp /> 
              }
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
    

      <div className="lg:hidden w-full bg-yellow-200 grid grid-cols-4 gap-x-4 items-center">
      {
      capItems.capItems.map((capItem) => (
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
        
      </div>

      <div>
        <button>Submit</button>
      </div>
      </div>
    </>
  );

  function handleSelected(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.currentTarget.files);
  }

  function checkTool() {}
};

export default Toolbar;
