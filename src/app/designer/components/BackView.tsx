"use client";
import cn from "@/libs/cn";
import {
  useCapItemStore,
  useCartStore,
  useLabelStore,
  usePreviewImgStore,
  useSideStore,
} from "@/libs/store";
import { FC, useState } from "react";
import { CgArrowsExpandLeft } from "react-icons/cg";
import { FiRotateCw } from "react-icons/fi";

type BackViewProps = {};

const BackView: FC<BackViewProps> = ({}) => {
  const { previewImg, showPreview } = usePreviewImgStore();
  const { capItems } = useCapItemStore();
  const { side} = useSideStore();

  return (
    <div  className={cn(side == 1 ? ''  : 'opacity-0','absolute inset-0')}>
      <div id="BackV" className="w-full h-full relative">
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

export default BackView;
