"use client";
import cn from "@/libs/cn";

import { FC, useState, useEffect } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

type DesignerProps = {
  selectedColor1: any;
  selectedColor2: any;
  selectedColor3: any;
  selectedColor4: any;
  selectedColor5: any;
  selectedColor6: any;
};

const DesignerContainer: FC<DesignerProps> = ({
  selectedColor1,
  selectedColor2,
  selectedColor3,
  selectedColor4,
  selectedColor5,
  selectedColor6,
}) => {
  const [side, setSide] = useState(0);
  const [filter1, setFilter1] = useState("");


  return (
    <div className="relative w-[500px] h-[500px] p-5">

      {/* front */}
      {side === 0 && (
        <>
          <img src="/cap/1.png" className="absolute inset-0 z-5" alt="" />
          <img src="/cap/4.png" className="absolute inset-0" alt=""  style={{ filter: selectedColor3.filter  }} />
          <img src="/cap/5.png" className="absolute inset-0" alt=""  style={{ filter: selectedColor4.filter  }}/>
          <img src="/cap/6.png" className="absolute inset-0" alt=""  style={{ filter: selectedColor1.filter  }}/>

          <img
            id="peakFront"
            src="/cap/7.png"
            className="absolute inset-0 z-10"
            style={{ filter: selectedColor2.filter }}
          />
        </>
      )}
         {/* back */}
      {side === 1 && (
     
        <>
          <img src="/cap/11.png" className="absolute inset-0 z-10" alt="" />
          <img src="/cap/12.png" className="absolute inset-0" alt=""  style={{ filter: selectedColor5.filter  }} />
          <img src="/cap/13.png" className="absolute inset-0" alt=""  style={{ filter: selectedColor3.filter  }}/>
          <img src="/cap/14.png" className="absolute inset-0" alt=""  style={{ filter: selectedColor4.filter  }} />
          <img src="/cap/15.png" className="absolute inset-0" alt=""  style={{ filter: selectedColor6.filter  }} />
          <img src="/cap/16.png" className="absolute inset-0" alt=""  style={{ filter: selectedColor1.filter  }} />
        </>
      )}

      {/* left */}
      {side === 2 && (
        <>
          <img src="/cap/21.png" className="absolute inset-0 z-10" alt="" />
          <img src="/cap/22.png" className="absolute inset-0" alt=""  style={{ filter: selectedColor5.filter  }} />
          <img src="/cap/23.png" className="absolute inset-0" alt=""  style={{ filter: selectedColor3.filter  }} />
          <img src="/cap/24.png" className="absolute inset-0" alt=""  style={{ filter: selectedColor4.filter  }} />

          <img src="/cap/26.png" className="absolute inset-0" alt=""  style={{ filter: selectedColor1.filter  }}/>
          <img
            id="peakLeft"
            src="/cap/27.png"
            className="absolute inset-0"
            alt=""
            style={{ filter: selectedColor2.filter  }}
          />
        </>
      )}

      {/* right */}
      {side === 3 && (
        <>
          <img src="/cap/31.png" className="absolute inset-0 z-10" alt="" />
          <img src="/cap/32.png" className="absolute inset-0" alt="" style={{ filter: selectedColor5.filter  }}/>
          <img src="/cap/33.png" className="absolute inset-0" alt=""  style={{ filter: selectedColor3.filter  }} />
          <img src="/cap/34.png" className="absolute inset-0" alt=""  style={{ filter: selectedColor4.filter  }} />
          <img src="/cap/35.png" className="absolute inset-0" alt=""  style={{ filter: selectedColor1.filter  }}/>
          <img
            id="peakRight"
            src="/cap/36.png"
            className="absolute inset-0"
            alt=""
            style={{ filter: selectedColor2.filter }}
          />
        </>
      )}

      <div className="absolute left-0 right-0 -bottom-10 flex justify-center gap-x-6 z-20 shadow-2xl bg-gray-300 rounded-full py-2">
        <button onClick={() => handleStepper('prev')} className="">
          <MdArrowBackIosNew className="text-activeOrange rounded-full border-activeOrange border-2 p-2" size={40} />
        </button>
        <div
          onClick={() => setSide(0)}
          className="flex items-center justify-center cursor-pointer"
        >
          <div className={cn(side === 0 ? "border-activeOrange scale-125": "border-primaryGreen", "w-[40px] border-b-4 ")}></div>
        </div>
        <div
          onClick={() => setSide(1)}
          className="flex items-center justify-center cursor-pointer"
        >
          <div className={cn(side === 1 ? "border-activeOrange scale-125": "border-primaryGreen", "w-[40px] border-b-4")}></div>
        </div>
        <div
          onClick={() => setSide(2)}
          className="flex items-center justify-center cursor-pointer"
        >
          <div className={cn(side === 2 ? "border-activeOrange scale-125": "border-primaryGreen", "w-[40px] border-b-4")}></div>
        </div>
        <div
          onClick={() => setSide(3)}
          className="flex items-center justify-center cursor-pointer"
        >
          <div className={cn(side === 3 ? "border-activeOrange scale-125": "border-primaryGreen", "w-[40px] border-b-4 ")}></div>
        </div>
        <button onClick={() => handleStepper('next')} className="">
          <MdArrowForwardIos className="text-activeOrange rounded-full border-activeOrange border-2 p-2" size={40} />
        </button>
      </div>
    </div>
  );


      function handleStepper(direction: string){
            if(direction === 'prev'){
                  if(side === 0){
                        setSide(3)
                  }else{
                        setSide(prev => prev -1) 
                  }       
            }

            if(direction === 'next'){
                  if(side === 3){
                        setSide(0)
                  }else{
                        setSide(prev => prev +1) 
                  }       
            }
      }

};

export default DesignerContainer;
