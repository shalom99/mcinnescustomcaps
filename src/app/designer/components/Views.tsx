"use client";
import { useCapItemStore, useLabelStore, useSideStore } from "@/libs/store";
import { FC } from "react";
import cn from "@/libs/cn";
import BBranding from "./BBranding";
import FBranding from "./FBranding";
import RBranding from "./RBranding";
import LBranding from "./LBranding";



export const FrontView: FC = () => {
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


export const BackView: FC = () => {
  const { capItems } = useCapItemStore();
  const { side } = useSideStore();

  return (
    <div className={cn(side == 1 ? "" : "opacity-0", "absolute inset-0")}>
      <div id="BackV" className="w-full h-full relative">
        <BBranding />
        <img
          src="/cap/12.png"
          className="absolute inset-0"
          alt="Back Cap 1"
          style={{
            filter: capItems[5].selectedColorFilter,
          }}
        />
        <img
          src="/cap/13.png"
          className="absolute inset-0"
          alt="Back Cap 2"
          style={{
            filter: capItems[3].selectedColorFilter,
          }}
        />
        <img
          src="/cap/14.png"
          className="absolute inset-0"
          alt="Back Cap 3"
          style={{
            filter: capItems[4].selectedColorFilter,
          }}
        />
        <img
          src="/cap/15.png"
          className="absolute inset-0"
          alt="Back Cap 4"
          style={{
            filter: capItems[6].selectedColorFilter,
          }}
        />
        <img
          src="/cap/16.png"
          className="absolute inset-0"
          alt="Back Cap 5"
          style={{
            filter: capItems[0].selectedColorFilter,
          }}
        />

        <img
          src="/cap/11.png"
          className="absolute inset-0"
          alt="Back Cap Base"
        />
      </div>
    </div>
  );
};

export const RightView: FC = () => {
  const { side } = useSideStore();
  const { capItems } = useCapItemStore();
  const { labels } = useLabelStore();

  return (
    <div className={cn(side == 3 ? "" : "opacity-0", "absolute inset-0")}>
      <div id="RightV" className="relative w-full h-full">
        <RBranding />
        {labels[0].show ? (
          <div className="absolute inset-0">
            <img
              src="/cap/frontlabelfill.png"
              className="absolute inset-0 z-20"
              alt="Front Right Label 1"
              style={{
                filter: labels[0].selectedColorFilter,
              }}
            />
            <img
              src="/cap/frontlabel.png"
              className="absolute inset-0 z-20"
              alt="Front Right Label 2"
            />
          </div>
        ) : (
          ""
        )}

        {labels[1].show ? (
          <div className="absolute inset-0">
            <img
              src="/cap/rlabelfill.png"
              className="absolute inset-0 z-20"
              alt="Right Label 1"
              style={{
                filter: labels[1].selectedColorFilter,
              }}
            />
            <img
              src="/cap/rlabel.png"
              className="absolute inset-0 z-20"
              alt="Right Label 2"
            />
          </div>
        ) : (
          ""
        )}

        <img
          src="/cap/22.png"
          className="absolute inset-0"
          alt="Right Cap 1"
          style={{
            filter: capItems[5].selectedColorFilter,
          }}
        />
        <img
          src="/cap/23.png"
          className="absolute inset-0"
          alt="Right Cap 2"
          style={{
            filter: capItems[3].selectedColorFilter,
          }}
        />
        <img
          src="/cap/24.png"
          className="absolute inset-0"
          alt="Right Cap 3"
          style={{
            filter: capItems[4].selectedColorFilter,
          }}
        />
        <img
          src="/cap/26.png"
          className="absolute inset-0"
          alt="Right Cap 4"
          style={{
            filter: capItems[0].selectedColorFilter,
          }}
        />
        <img
          src="/cap/27.png"
          className="absolute inset-0"
          alt="Right Cap 5"
          style={{
            filter: capItems[1].selectedColorFilter,
          }}
        />

        <img
          src="/cap/21.png"
          className="absolute inset-0"
          alt="Right Cap Base"
        />
      </div>
    </div>
  );
};

export const LeftView: FC = () => {
  const { side } = useSideStore();
  const { capItems } = useCapItemStore();
  const { labels } = useLabelStore();

  return (
    <div className={cn(side == 2 ? "" : "opacity-0", "absolute inset-0")}>
      <div id="LeftV" className="relative w-full h-full">
        <LBranding />
        {labels[2].show ? (
          <div className="absolute inset-0">
            <img
              src="/cap/llabelfill.png"
              className="absolute inset-0 z-20"
              alt="Left Label 1"
              style={{
                filter: labels[2].selectedColorFilter,
              }}
            />
            <img
              src="/cap/llabel.png"
              className="absolute inset-0 z-20"
              alt="Left Label 2"
            />
          </div>
        ) : (
          ""
        )}

        <img
          src="/cap/32.png"
          className="absolute inset-0"
          alt="Left Cap 1"
          style={{
            filter: capItems[5].selectedColorFilter,
          }}
        />
        <img
          src="/cap/33.png"
          className="absolute inset-0"
          alt="Left Cap 2"
          style={{
            filter: capItems[3].selectedColorFilter,
          }}
        />
        <img
          src="/cap/34.png"
          className="absolute inset-0"
          alt="Left Cap 3"
          style={{
            filter: capItems[4].selectedColorFilter,
          }}
        />
        <img
          src="/cap/35.png"
          className="absolute inset-0"
          alt="Left Cap 4"
          style={{
            filter: capItems[0].selectedColorFilter,
          }}
        />
        <img
          src="/cap/36.png"
          className="absolute inset-0"
          alt="Left Cap 5"
          style={{
            filter: capItems[1].selectedColorFilter,
          }}
        />

        <img
          src="/cap/31.png"
          className="absolute inset-0"
          alt="Left Cap Base"
        />
      </div>
    </div>
  );
};
