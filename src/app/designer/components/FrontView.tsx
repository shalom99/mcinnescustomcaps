"use client";
import { useCapItemStore, useLabelStore, useSideStore } from "@/libs/store";
import { FC, useState, useEffect } from "react";
import frontBase from "../../../../public/cap/1.png";
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
        {/* <FBranding /> */}
        {labels[0].show ? (
          <div className="absolute inset-0">
            <div
              id="fLabel1"
              className="absolute inset-0 z-10"
              style={{
                backgroundColor: labels[0].filterHexColor
                  ? labels[0].filterHexColor
                  : "white",
              }}
            ></div>
            <div
              id="fLabel2"
              className="absolute inset-0 z-10"
              style={{ backgroundColor: "black" }}
            ></div>
          </div>
        ) : (
          ""
        )}

        <div
          id="frontCap2"
          className="absolute inset-0 text-black"
          style={{
            // backgroundColor: capItems[5].hexcode,
            backgroundColor: 'white',
          }}
        >
          {" "}
        </div>
        <div
          id="frontCap4"
          className="absolute inset-0"
          style={{
            backgroundColor: capItems[3].hexcode,
          }}
        ></div>
        <div
          id="frontCap5"
          className="absolute inset-0"
          style={{
            backgroundColor: capItems[4].hexcode,
          }}
        ></div>
        <div
          id="frontCap6"
          className="absolute inset-0"
          style={{
            backgroundColor: capItems[0].hexcode,
          }}
        ></div>
        <div
          id="frontCap7"
          className="absolute inset-0"
          style={{
            backgroundColor: capItems[1].hexcode,
          }}
        ></div>

        {/* <div
        id="frontCapBase"
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'black',
            maskSize: 'cover',
            maskMode: 'alpha',
 
          }}
        ></div> */}

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
