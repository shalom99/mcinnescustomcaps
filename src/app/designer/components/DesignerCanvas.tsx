"use client";
import { FC, useState, useEffect } from "react";

import DesignerContainer from "./DesignerContainer";
import Toolbar from "./Toolbar";

type DesignerCanvasProps = {};

const DesignerCanvas: FC<DesignerCanvasProps> = ({}) => {
  return (
    <div
      id="mainDesigner"
      className="w-full flex flex-col gap-y-5 lg:flex-row h-full"
    >
      <div
        id="middleCanvas"
        className="grow bg-white flex items-center justify-center "
      >
        <DesignerContainer />
      </div>

      <div
        id="toolbar"
        className="w-full lg:w-[270px] bg-white h-full lg:flex flex-col"
      >
        <Toolbar />
      </div>
    </div>
  );
};

export default DesignerCanvas;
