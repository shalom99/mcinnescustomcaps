"use client";
import cn from "@/libs/cn";
import { FC, useState } from "react";
import { TwitterPicker } from "react-color";

type ToolbarProps = {
    selectedColor1: any
    selectedColor2: any
    selectedColor3: any
    selectedColor4: any
    selectedColor5: any
    selectedColor6: any
    setSelectedColor1: any
    setSelectedColor2: any
    setSelectedColor3: any
    setSelectedColor4: any
    setSelectedColor5: any
    setSelectedColor6: any

};

const Toolbar: FC<ToolbarProps> = ({selectedColor1, selectedColor2, selectedColor3, selectedColor4, selectedColor5, selectedColor6, setSelectedColor1, setSelectedColor2, setSelectedColor3, setSelectedColor4, setSelectedColor5, setSelectedColor6}) => {

    const [showPicker1, setShowPicker1] = useState(false)
    const [showPicker2, setShowPicker2] = useState(false)
    const [showPicker3, setShowPicker3] = useState(false)
    const [showPicker4, setShowPicker4] = useState(false)
    const [showPicker5, setShowPicker5] = useState(false)
    const [showPicker6, setShowPicker6] = useState(false)


  return (
    <>
      <div>
        <h2 className="text-center mb-5 font-bold">Toolbar </h2>
        <h3>Front Panel</h3>
        <div className="flex items-center gap-x-5 relative">
          <p className="text-sm text-red-600">Pick a Color:</p>
          <button onClick={() => setShowPicker1(prev => !prev)}  className={cn("w-[30px] h-[30px] border-black border-2")} style={{backgroundColor: selectedColor1}}></button>
          <div className="absolute -bottom-24 left-0 right-0 z-10">
            {showPicker1 &&
            <TwitterPicker color={selectedColor1} onChange={function(updatedColor){ setSelectedColor1(updatedColor.hex); setShowPicker1(false)}} />}
          </div>
        </div>
      </div>
      <div>
      <h3>Peak</h3>
        <div className="flex items-center gap-x-5 relative">
          <p className="text-sm text-red-600">Pick a Color:</p>
          <button onClick={() => setShowPicker2(prev => !prev)}  className={cn("w-[30px] h-[30px] border-black border-2")} style={{backgroundColor: selectedColor2}}></button>
          <div className="absolute -bottom-24 left-0 right-0 z-10">
            {showPicker2 &&
            <TwitterPicker color={selectedColor2} onChange={function(updatedColor){ setSelectedColor2(updatedColor.hex); setShowPicker2(false)}}/>}
          </div>
        </div>
      </div>
      <div>
      <h3>Upper Stripe</h3>
        <div className="flex items-center gap-x-5 relative">
          <p className="text-sm text-red-600">Pick a Color:</p>
          <button onClick={() => setShowPicker3(prev => !prev)}  className={cn("w-[30px] h-[30px] border-black border-2")} style={{backgroundColor: selectedColor3}}></button>
          <div className="absolute -bottom-24 left-0 right-0 z-10">
            {showPicker3 &&
            <TwitterPicker color={selectedColor3} onChange={function(updatedColor){ setSelectedColor3(updatedColor.hex); setShowPicker3(false)}}/>}
          </div>
        </div>
      </div>
      <div>
      <h3>Lower Stripe</h3>
        <div className="flex items-center gap-x-5 relative">
          <p className="text-sm text-red-600">Pick a Color:</p>
          <button onClick={() => setShowPicker4(prev => !prev)}  className={cn("w-[30px] h-[30px] border-black border-2")} style={{backgroundColor: selectedColor4}}></button>
          <div className="absolute -bottom-24 left-0 right-0 z-10">
            {showPicker4 &&
            <TwitterPicker color={selectedColor4} onChange={function(updatedColor){ setSelectedColor4(updatedColor.hex); setShowPicker4(false)}}/>}
          </div>
        </div>
      </div>
      <div>
      <h3>Back Mesh</h3>
        <div className="flex items-center gap-x-5 relative">
          <p className="text-sm text-red-600">Pick a Color:</p>
          <button onClick={() => setShowPicker5(prev => !prev)}  className={cn("w-[30px] h-[30px] border-black border-2")} style={{backgroundColor: selectedColor5}}></button>
          <div className="absolute -bottom-24 left-0 right-0 z-10">
            {showPicker5 &&
            <TwitterPicker color={selectedColor5} onChange={function(updatedColor){ setSelectedColor5(updatedColor.hex); setShowPicker5(false)}}/>}
          </div>
        </div>
      </div>
      <div>
      <h3>Snap Back</h3>
        <div className="flex items-center gap-x-5 relative">
          <p className="text-sm text-red-600">Pick a Color:</p>
          <button onClick={() => setShowPicker6(prev => !prev)}  className={cn("w-[30px] h-[30px] border-black border-2")} style={{backgroundColor: selectedColor6}}></button>
          <div className="absolute -bottom-24 left-0 right-0 z-10">
            {showPicker6 &&
            <TwitterPicker color={selectedColor6} onChange={function(updatedColor){ setSelectedColor6(updatedColor.hex); setShowPicker6(false)}}/>}
          </div>
        </div>
      </div>

      <div>
        <h3>Input Text</h3>
        <input type="text" className="w-full border" />
        <div className="flex items-center gap-x-2  mt-2">
          <button className="border text-red-400  py-2 px-1 text-xs">
            Pick Text Color
          </button>
          <button className="bg-black w-[30px] h-[30px]"></button>
          <button className="border text-xs py-2 px-1">Add Text</button>
        </div>
        <div className="mt-2">
          <input type="file" className="text-sm" />
        </div>
      </div>
    </>
  );
};

export default Toolbar;
