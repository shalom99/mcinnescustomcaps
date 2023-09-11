"use client";
import { FC, useState, useEffect } from "react";
import Toolbar from "./Toolbar";
import DesignerContainer from "./DesignerContainer";

type DesignerCanvasProps = {};

const DesignerCanvas: FC<DesignerCanvasProps> = ({}) => {

  return (
    <div id="mainDesigner" className="w-full flex flex-col gap-y-5 lg:flex-row h-full">
      <div
        id="middleCanvas"
        className="grow bg-gray-300 flex items-center justify-center "
      >
        <DesignerContainer  />
      </div>

      <div
        id="toolbar"
        className="w-full lg:w-[270px] bg-gray-300 h-full py-2 lg:flex flex-col"
      >
        <Toolbar />
      </div>
    </div>
  );
};

export default DesignerCanvas;
