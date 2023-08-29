"use client";
import { FC, useState } from "react";
import Toolbar from "./Toolbar";
import DesignerContainer from "./DesignerContainer";

type DesignerCanvasProps = {};

const DesignerCanvas: FC<DesignerCanvasProps> = ({}) => {
  return (
    <div id="mainDesigner" className=" flex h-full">
      <div
        id="middle"
        className="grow bg-gray-300 flex items-center justify-center "
      >
        <DesignerContainer />
      </div>

      <div
        id="toolbar"
        className="w-[270px] bg-gray-300 h-full py-2 flex flex-col"
      >
        <Toolbar />
      </div>
    </div>
  );
};

export default DesignerCanvas;
