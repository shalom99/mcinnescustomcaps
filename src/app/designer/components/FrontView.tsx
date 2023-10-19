"use client";
import { useCapItemStore, useLabelStore, useSideStore } from "@/libs/store";
import { FC, useState, useEffect } from "react";

import cn from "@/libs/cn";
import FBranding from "./FBranding";
type FrontViewProps = {};

const FrontView: FC<FrontViewProps> = ({}) => {
  const { side } = useSideStore();
  const { capItems } = useCapItemStore();
  const { labels } = useLabelStore();

 
  return (
    <div className={cn(side == 0 ? "" : "opacity-0", "absolute inset-0")}>
      <div id="FrontV" className="relative w-full h-full">
        <FBranding />
        {labels[0].show ? (
          <div className="absolute inset-0">
            <img
              src="/cap/9.png"
              className="absolute inset-0 z-10"
              alt=""
              style={{ filter: labels[0].selectedColorFilter }}
            />
            <img src="/cap/8.png" className="absolute inset-0 z-10" alt="" />
          </div>
        ) : (
          ""
        )}

        <img
          id="cap1"
          src="/cap/1.png"
          className="absolute inset-0 z-10"
          alt=""
        />
        <img
          src="/cap/2.png"
          className="absolute inset-0 z-5"
          alt=""
          style={{ filter: capItems[5].selectedColorFilter }}
        />
        <img
          src="/cap/4.png"
          className="absolute inset-0 "
          alt=""
          style={{ filter: capItems[3].selectedColorFilter }}
        />
        <img
          src="/cap/5.png"
          className="absolute inset-0"
          alt=""
          style={{ filter: capItems[4].selectedColorFilter }}
        />
        <img
          src="/cap/6.png"
          className="absolute inset-0"
          alt=""
          style={{ filter: capItems[0].selectedColorFilter }}
        />

        <img
          id="peakFront"
          src="/cap/7.png"
          className="absolute inset-0  select-none"
          draggable={false}
          style={{ filter: capItems[1].selectedColorFilter }}
        />
      </div>
    </div>
  );

  
};

export default FrontView;
