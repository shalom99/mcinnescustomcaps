"use client";
import { FC, useState } from "react";
import ColorPicker from "./ColorPicker";
import LabelColorPicker from "./LabelColorPicker";

type ToolbarProps = {
  selectedColor1: any;
  selectedColor2: any;
  selectedColor3: any;
  selectedColor4: any;
  selectedColor5: any;
  selectedColor6: any;
  setSelectedColor1: any;
  setSelectedColor2: any;
  setSelectedColor3: any;
  setSelectedColor4: any;
  setSelectedColor5: any;
  setSelectedColor6: any;
  frontFlag: any;
  setFrontFlag: any;
  leftLabel: any;
  setLeftLabel: any;
  side: any;
  setSide: any
};

const Toolbar: FC<ToolbarProps> = ({
  selectedColor1,
  selectedColor2,
  selectedColor3,
  selectedColor4,
  selectedColor5,
  selectedColor6,
  setSelectedColor1,
  setSelectedColor2,
  setSelectedColor3,
  setSelectedColor4,
  setSelectedColor5,
  setSelectedColor6,
  frontFlag,
  setFrontFlag,
  leftLabel,
  setLeftLabel,
  side,
  setSide,
}) => {
  const [showPicker1, setShowPicker1] = useState(false);
  const [showPicker2, setShowPicker2] = useState(false);
  const [showPicker3, setShowPicker3] = useState(false);
  const [showPicker4, setShowPicker4] = useState(false);
  const [showPicker5, setShowPicker5] = useState(false);
  const [showPicker6, setShowPicker6] = useState(false);
  const [showPicker7, setShowPicker7] = useState(false);
  const [showPicker8, setShowPicker8] = useState(false);
  const [showPicker9, setShowPicker9] = useState(false);

  return (
    <>
      <div className="h-full overflow-y-auto overflow-hidden">
        <div>
          <div
            onClick={() => setShowPicker1((prev) => !prev)}
            className="flex items-center justify-between gap-x-3 cursor-pointer border-y-2 py-4 px-2"
          >
            <h3 className="text-md text-slate-600 select-none">Front Panel</h3>
            <p style={{ color: selectedColor1.code }}>{selectedColor1.code}</p>
          </div>

          <div className="flex items-center gap-x-5 relative">
            {showPicker1 && (
              <ColorPicker
                title="Front Panel"
                setSelectColor={setSelectedColor1}
                setShowPicker={setShowPicker1}
              />
            )}
          </div>
        </div>

        <div className="bg-red-200">
          <div className="flex items-center justify-between gap-x-3 cursor-not-allowed border-b-2 py-4 px-2">
            <h3 className="text-md text-slate-600 select-none">
              Front Panel Branding
            </h3>
          </div>
          
        </div>

        <div>
          <div
            onClick={() => setShowPicker2((prev) => !prev)}
            className="flex items-center justify-between gap-x-3 cursor-pointer border-b-2 py-4 px-2"
          >
            <h3 className="text-md text-slate-600 select-none">Peak</h3>
            <p style={{ color: selectedColor2.code }}>{selectedColor2.code}</p>
          </div>

          <div className="flex items-center gap-x-5 relative">
            {showPicker2 && (
              <ColorPicker
                title="Peak"
                setSelectColor={setSelectedColor2}
                setShowPicker={setShowPicker2}
              />
            )}
          </div>
        </div>

        <div className="">
          <div   onClick={() => setShowPicker7((prev) => !prev)}  className="flex items-center justify-between gap-x-3 cursor-pointer border-b-2 py-4 px-2">
            <h3 className="text-md text-slate-600 select-none">
              Front Label
            </h3>
          </div>

          <div className="flex items-center gap-x-5 relative">
            {showPicker7 && (
              <LabelColorPicker
                title="Front Label"
                setSide={setSide}
                label={frontFlag}
                setLabel={setFrontFlag}
                setShowPicker={setShowPicker7}
              />
            )}
          </div>
        </div>


        <div className="">
          <div   onClick={() => setShowPicker8((prev) => !prev)}  className="flex items-center justify-between gap-x-3 cursor-pointer border-b-2 py-4 px-2">
            <h3 className="text-md text-slate-600 select-none">
              Side Label
            </h3>
          </div>

          <div className="flex items-center gap-x-5 relative">
            {showPicker8 && (
              <LabelColorPicker
                title="Left Label"
                setSide={setSide}
                label={leftLabel}
                setLabel={setLeftLabel}
                setShowPicker={setShowPicker8}
              />
            )}
          </div>
        </div>

        <div className="bg-red-200">
          <div className="flex items-center justify-between gap-x-3 cursor-not-allowed border-b-2 py-4 px-2">
            <h3 className="text-md text-slate-600 select-none">Under Brim</h3>
          </div>
        </div>



        <div>
          <div
            onClick={() => setShowPicker3((prev) => !prev)}
            className="flex items-center justify-between gap-x-3 cursor-pointer border-b-2 py-4 px-2"
          >
            <h3 className="text-md text-slate-600 select-none">Upper Stripe</h3>
            <p style={{ color: selectedColor3.code }}>{selectedColor3.code}</p>
          </div>

          <div className="flex items-center gap-x-5 relative">
            {showPicker3 && (
              <ColorPicker
                title="Upper Stripe"
                setSelectColor={setSelectedColor3}
                setShowPicker={setShowPicker3}
              />
            )}
          </div>
        </div>

        <div>
          <div
            onClick={() => setShowPicker4((prev) => !prev)}
            className="flex items-center justify-between gap-x-3 cursor-pointer border-b-2 py-4 px-2"
          >
            <h3 className="text-md text-slate-600 select-none">Lower Stripe</h3>
            <p style={{ color: selectedColor4.code }}>{selectedColor4.code}</p>
          </div>

          <div className="flex items-center gap-x-5 relative">
            {showPicker4 && (
              <ColorPicker
                title="Lower Stripe"
                setSelectColor={setSelectedColor4}
                setShowPicker={setShowPicker4}
              />
            )}
          </div>
        </div>

        <div>
          <div
            onClick={() => setShowPicker5((prev) => !prev)}
            className="flex items-center justify-between gap-x-3 cursor-pointer border-b-2 py-4 px-2"
          >
            <h3 className="text-md text-slate-600 select-none">Back Mesh</h3>
            <p style={{ color: selectedColor5.code }}>{selectedColor5.code}</p>
          </div>

          <div className="flex items-center gap-x-5 relative">
            {showPicker5 && (
              <ColorPicker
                title="Back Mesh"
                setSelectColor={setSelectedColor5}
                setShowPicker={setShowPicker5}
              />
            )}
          </div>
        </div>

        <div>
          <div
            onClick={() => setShowPicker6((prev) => !prev)}
            className="flex items-center justify-between gap-x-3 cursor-pointer border-b-2 py-4 px-2"
          >
            <h3 className="text-md text-slate-600 select-none">Snap Back</h3>
            <p style={{ color: selectedColor6.code }}>{selectedColor6.code}</p>
          </div>

          <div className="flex items-center gap-x-5 relative">
            {showPicker6 && (
              <ColorPicker
                title="Snap Back"
                setSelectColor={setSelectedColor6}
                setShowPicker={setShowPicker6}
              />
            )}
          </div>
        </div>

      

  



      </div>
    </>
  );

  function checkTool() {}
};

export default Toolbar;
