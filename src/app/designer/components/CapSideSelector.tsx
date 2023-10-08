'use client'
import { FC } from "react";

import { useSideStore } from "@/libs/store";
import cn from "@/libs/cn";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
type CapSideSelectorProps = {};

const CapSideSelector: FC<CapSideSelectorProps> = ({}) => {
  const { side, setSelectedSide, setNextSide, setPrevSide } = useSideStore();

  return (
    <div className="absolute left-0 right-0 bottom-0 lg:-bottom-5 flex justify-center gap-x-6 z-20 shadow-lg shadow-primaryGreen  rounded-full py-2">
      <button onClick={() => setPrevSide()} className="">
        <MdArrowBackIosNew
          className="text-activeOrange rounded-full border-activeOrange border-2 p-2"
          size={40}
        />
      </button>
      <div
        onClick={() => setSelectedSide(0)}
        className="flex items-center justify-center cursor-pointer"
      >
        <div
          className={cn(
            side === 0
              ? "border-activeOrange scale-125"
              : "border-primaryGreen",
            "w-[40px] border-b-4 "
          )}
        ></div>
      </div>
      <div
        onClick={() => setSelectedSide(1)}
        className="flex items-center justify-center cursor-pointer"
      >
        <div
          className={cn(
            side === 1
              ? "border-activeOrange scale-125"
              : "border-primaryGreen",
            "w-[40px] border-b-4"
          )}
        ></div>
      </div>
      <div
        onClick={() => setSelectedSide(2)}
        className="flex items-center justify-center cursor-pointer"
      >
        <div
          className={cn(
            side === 2
              ? "border-activeOrange scale-125"
              : "border-primaryGreen",
            "w-[40px] border-b-4"
          )}
        ></div>
      </div>
      <div
        onClick={() => setSelectedSide(3)}
        className="flex items-center justify-center cursor-pointer"
      >
        <div
          className={cn(
            side === 3
              ? "border-activeOrange scale-125"
              : "border-primaryGreen",
            "w-[40px] border-b-4 "
          )}
        ></div>
      </div>
      <button onClick={() => setNextSide()} className="">
        <MdArrowForwardIos
          className="text-activeOrange rounded-full border-activeOrange border-2 p-2"
          size={40}
        />
      </button>
    </div>
  );
};

export default CapSideSelector;
