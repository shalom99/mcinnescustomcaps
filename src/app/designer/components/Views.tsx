"use client";
import { useCapItemStore, useLabelStore, useSideStore } from "@/libs/store";
import { FC } from "react";
import FrontView from "./FrontView";
import cn from "@/libs/cn";
import BBranding from "./BBranding";

type ViewsProps = {};

const Views: FC<ViewsProps> = ({}) => {
  return (
    <div className="w-full h-full">
      <FrontView />
      <BackView />
      <LeftView />
      <RightView />
    </div>
  );
};

export default Views;

const BackView: FC = ({}) => {
  const { capItems } = useCapItemStore();
  const { side } = useSideStore();

  return (
    <div className={cn(side == 1 ? "" : "opacity-0", "absolute inset-0")}>
      <div id="BackV" className="w-full h-full relative">
        <BBranding />
        <div
          id="backCap1"
          className="absolute inset-0"
          style={{
            backgroundColor: capItems[5].hexcode,
          }}
        ></div>

        <div
          id="backCap2"
          className="absolute inset-0"
          style={{
            backgroundColor: capItems[3].hexcode,
          }}
        ></div>
        <div
          id="backCap3"
          className="absolute inset-0"
          style={{
            backgroundColor: capItems[4].hexcode,
          }}
        ></div>
        <div
          id="backCap4"
          className="absolute inset-0"
          style={{
            backgroundColor: capItems[6].hexcode,
          }}
        ></div>
        <div
          id="backCap5"
          className="absolute inset-0"
          style={{
            backgroundColor: capItems[0].hexcode,
          }}
        ></div>

        <div
          id="backCapBase"
          className="absolute inset-0"
          style={{
            backgroundColor: "black",
          }}
        ></div>
      </div>
    </div>
  );
};

const RightView: FC = ({}) => {
  const { side } = useSideStore();
  const { capItems } = useCapItemStore();
  const { labels } = useLabelStore();

  return (
    <div className={cn(side == 3 ? "" : "opacity-0", "absolute inset-0")}>
      <div id="RightV" className="relative w-full h-full">


        {labels[0].show ? (
          <div className="absolute inset-0">
            <div
              id="rightFLabel1"
              className="absolute inset-0 z-10"
              style={{
                backgroundColor: labels[0].filterHexColor
                  ? labels[0].filterHexColor
                  : "white",
              }}
            ></div>
            <div
              id="rightFLabel2"
              className="absolute inset-0 z-10"
              style={{ backgroundColor: "black" }}
            ></div>
          </div>
        ) : (
          ""
        )}

        {labels[1].show ? (
          <div className="absolute inset-0">
            <div
              id="rightLabel1"
              className="absolute inset-0 z-10"
              style={{
                backgroundColor: labels[1].filterHexColor
                  ? labels[1].filterHexColor
                  : "white",
              }}
            ></div>
            <div
              id="rightLabel2"
              className="absolute inset-0 z-10"
              style={{ backgroundColor: "black" }}
            ></div>
          </div>
        ) : (
          ""
        )}

        <div
          id="rightCap1"
          className="absolute inset-0"
          style={{
            backgroundColor: capItems[5].hexcode,
          }}
        ></div>

        <div
          id="rightCap2"
          className="absolute inset-0"
          style={{
            backgroundColor: capItems[3].hexcode,
          }}
        ></div>
        <div
          id="rightCap3"
          className="absolute inset-0"
          style={{
            backgroundColor: capItems[4].hexcode,
          }}
        ></div>
        <div
          id="rightCap4"
          className="absolute inset-0"
          style={{
            backgroundColor: capItems[0].hexcode,
          }}
        ></div>
        <div
          id="rightCap5"
          className="absolute inset-0"
          style={{
            backgroundColor: capItems[1].hexcode,
          }}
        ></div>

        <div
          id="rightCapBase"
          className="absolute inset-0"
          style={{
            backgroundColor: "black",
          }}
        ></div>
      </div>
    </div>
  );
};

const LeftView: FC = ({}) => {
  const { side } = useSideStore();
  const { capItems } = useCapItemStore();
  const { labels } = useLabelStore();

  return (
    <div className={cn(side == 2 ? "" : "opacity-0", "absolute inset-0")}>
      <div id="LeftV" className="relative w-full h-full">
        {labels[2].show ? (
          <div className="absolute inset-0">
            <div
              id="leftLabel1"
              className="absolute inset-0 z-10"
              style={{
                backgroundColor: labels[2].filterHexColor
                  ? labels[2].filterHexColor
                  : "white",
              }}
            ></div>
            <div
              id="leftLabel2"
              className="absolute inset-0 z-10"
              style={{ backgroundColor: "black" }}
            ></div>
          </div>
        ) : (
          ""
        )}

        <div
          id="leftCap1"
          className="absolute inset-0"
          style={{
            backgroundColor: capItems[5].hexcode,
          }}
        ></div>

        <div
          id="leftCap2"
          className="absolute inset-0"
          style={{
            backgroundColor: capItems[3].hexcode,
          }}
        ></div>
        <div
          id="leftCap3"
          className="absolute inset-0"
          style={{
            backgroundColor: capItems[4].hexcode,
          }}
        ></div>
        <div
          id="leftCap4"
          className="absolute inset-0"
          style={{
            backgroundColor: capItems[0].hexcode,
          }}
        ></div>
        <div
          id="leftCap5"
          className="absolute inset-0"
          style={{
            backgroundColor: capItems[1].hexcode,
          }}
        ></div>

        <div
          id="leftCapBase"
          className="absolute inset-0"
          style={{
            backgroundColor: "black",
          }}
        ></div>
      </div>
    </div>
  );
};
