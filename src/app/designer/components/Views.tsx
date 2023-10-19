"use client";
import {
  useCapItemStore,
  useLabelStore,
  useSideStore,
} from "@/libs/store";
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
        <img src="/cap/11.png" className="absolute inset-0 z-10" alt="" />
        <img
          src="/cap/12.png"
          className="absolute inset-0"
          alt=""
          style={{ filter: capItems[5].selectedColorFilter }}
        />
        <img
          src="/cap/13.png"
          className="absolute inset-0"
          alt=""
          style={{ filter: capItems[3].selectedColorFilter }}
        />
        <img
          src="/cap/14.png"
          className="absolute inset-0"
          alt=""
          style={{ filter: capItems[4].selectedColorFilter }}
        />
        <img
          src="/cap/15.png"
          className="absolute inset-0"
          alt=""
          style={{ filter: capItems[6].selectedColorFilter }}
        />
        <img
          src="/cap/16.png"
          className="absolute inset-0"
          alt=""
          style={{ filter: capItems[0].selectedColorFilter }}
        />
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
            <img
              src="/cap/frontlabelfill.png"
              className="absolute inset-0 z-10"
              alt=""
              style={{ filter: labels[0].selectedColorFilter }}
              
            />
            <img
              src="/cap/frontlabel.png"
              className="absolute inset-0 z-10"
              alt=""
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
              alt=""
              style={{ filter: labels[1].selectedColorFilter }}
              
            />
            <img
              src="/cap/rlabel.png"
              className="absolute inset-0 z-10"
              alt=""
            />
          </div>
        ) : (
          ""
        )}

        <img src="/cap/21.png" className="absolute inset-0 z-10" alt="" />
        <img
          src="/cap/22.png"
          className="absolute inset-0"
          alt=""
          style={{ filter: capItems[5].selectedColorFilter }}
        />
        <img
          src="/cap/23.png"
          className="absolute inset-0"
          alt=""
          style={{ filter: capItems[3].selectedColorFilter }}
        />
        <img
          src="/cap/24.png"
          className="absolute inset-0"
          alt=""
          style={{ filter: capItems[4].selectedColorFilter }}
        />

        <img
          src="/cap/26.png"
          className="absolute inset-0"
          alt=""
          style={{ filter: capItems[0].selectedColorFilter }}
        />
        <img
          id="peakLeft"
          src="/cap/27.png"
          className="absolute inset-0"
          alt=""
          style={{ filter: capItems[1].selectedColorFilter }}
        />
      </div>
    </div>
  );
};

const LeftView: FC = ({}) => {
  const { side} = useSideStore();
  const { capItems } = useCapItemStore();
  const { labels } = useLabelStore();

  return (
    <div className={cn(side == 2 ? "" : "opacity-0", "absolute inset-0")}>
      <div id="LeftV" className="relative w-full h-full">

      {labels[2].show ? (
          <div className="absolute inset-0">
          
            <img
              src="/cap/llabelfill.png"
              className="absolute inset-0 z-20"
              alt=""
              style={{ filter: labels[2].selectedColorFilter }}
            />
              <img
              src="/cap/llabel.png"
              className="absolute inset-0 z-20"
              alt=""
            />
          </div>
        ) : (
          ""
        )}
     
        <img src="/cap/31.png" className="absolute inset-0 z-10" alt="" />
        <img
          src="/cap/32.png"
          className="absolute inset-0"
          alt=""
          style={{ filter: capItems[5].selectedColorFilter }}
        />
        <img
          src="/cap/33.png"
          className="absolute inset-0"
          alt=""
          style={{ filter: capItems[3].selectedColorFilter }}
        />
        <img
          src="/cap/34.png"
          className="absolute inset-0"
          alt=""
          style={{ filter: capItems[4].selectedColorFilter }}
        />
        <img
          src="/cap/35.png"
          className="absolute inset-0"
          alt=""
          style={{ filter: capItems[0].selectedColorFilter }}
        />
        <img
          id="peakRight"
          src="/cap/36.png"
          className="absolute inset-0"
          alt=""
          style={{ filter: capItems[1].selectedColorFilter }}
        />
      </div>
    </div>
  );
};
