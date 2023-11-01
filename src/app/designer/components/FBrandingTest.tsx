"use client";
import cn from "@/libs/cn";
import { useBrandingStore, useSideStore } from "@/libs/store";
import { FC, useEffect, useState } from "react";
import { CgArrowsExpandLeft } from "react-icons/cg";
import { FiRotateCw } from "react-icons/fi";

const FBrandingTest: FC = ({}) => {
  useEffect(() => {
    // const draggableImage = document.getElementById('draggableImage')!;
    // let isDragging = false;
    // draggableImage.addEventListener('mousedown', (event) => {
    //   isDragging = true;
    //   const offsetX = event.clientX - draggableImage.offsetLeft;
    //   const offsetY = event.clientY - draggableImage.offsetTop;
    //   document.addEventListener('mousemove', onMouseMove);
    //   document.addEventListener('mouseup', onMouseUp);
    //   function onMouseMove(event) {
    //     if (isDragging) {
    //       const x = event.clientX - offsetX;
    //       const y = event.clientY - offsetY;
    //       draggableImage.style.transform = `translate(${x}px, ${y}px)`;
    //     }
    //   }
    //   function onMouseUp() {
    //     isDragging = false;
    //     document.removeEventListener('mousemove', onMouseMove);
    //     document.removeEventListener('mouseup', onMouseUp);
    //   }
    // });
  }, []);

  return (
    <>
      <div
        id="parent"
        className="relative w-[600px] h-[500px] z-50 border-4 border-red-500"
      >
        <div
          className="border-4 border-green-500 absolute inset-0 right-20 w-[300px] h-[300px]"
          id="border"
        >
        </div>

        <div id="imgBorder" className="absolute w-[300px] h-[300px]">
        <img
          id="draggableImage"
          src="/cap/1.png"
          className=" absolute w-full h-full object-contain  border-4 border-blue-700 z-50 box-border"
          alt=""
        />
        </div>


   
      </div>
    </>
  );
};

export default FBrandingTest;
