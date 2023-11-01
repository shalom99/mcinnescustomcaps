"use client";
import { useBrandingStore, useCapItemStore, useLabelStore, useSideStore } from "@/libs/store";
import { FC, useState, useEffect } from "react";
import frontBase from "../../../../public/cap/1.png";
import cn from "@/libs/cn";
import FBranding from "./FBranding";
import FBrandingTest from "./FBrandingTest";


type FrontViewProps = {};

const FrontView: FC<FrontViewProps> = ({}) => {
  const { side } = useSideStore();
  const { capItems } = useCapItemStore();
  const { labels } = useLabelStore();
  const { brandings} = useBrandingStore()

  return (
    <div className={cn(side == 0 ? "" : "opacity-0", "absolute inset-0")}>
      <div id="FrontV" className="relative w-full h-full">
       
        <FBranding />
        {labels[0].show ? (
          <div className="absolute inset-0">
            <img
              src="/cap/9.png"
              className="absolute inset-0 z-20"
              alt="Front Label 1"
              style={{
                filter: labels[0].selectedColorFilter,
              }}
            />
            <img
              src="/cap/8.png"
              className="absolute inset-0 z-20"
              alt="Front Label 2"
            />
          </div>
        ) : (
          ""
        )}
        <img
          src="/cap/2.png"
          className="absolute inset-0"
          alt="Front Cap Base"
          style={{
            filter: capItems[5].selectedColorFilter,
          }}
        />
        <img
          src="/cap/4.png"
          className="absolute inset-0"
          alt="Front Cap Base"
          style={{
            filter: capItems[3].selectedColorFilter,
          }}
        />
        <img
          src="/cap/5.png"
          className="absolute inset-0"
          alt="Front Cap Base"
          style={{
            filter: capItems[4].selectedColorFilter,
          }}
        />
        <img
          src="/cap/6.png"
          className="absolute inset-0"
          alt="Front Cap Base"
          style={{
            filter: capItems[0].selectedColorFilter,
          }}
        />
        <img
          src="/cap/7.png"
          className="absolute inset-0"
          alt="Front Cap Base"
          style={{
            filter: capItems[1].selectedColorFilter,
          }}
        />

        <img
          src="/cap/1.png"
          className="absolute inset-0"
          alt="Front Cap Base"
        />
      </div>
    </div>
  );
};

export default FrontView;



