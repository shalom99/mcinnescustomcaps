"use client";
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
import domtoimage from "dom-to-image";
import * as htmlToImage from "html-to-image";
import cn from "@/libs/cn";

type RightViewProps = {};

const RightView: FC<RightViewProps> = ({}) => {
  const { side, setSelectedSide, setNextSide, setPrevSide } = useSideStore();
  const { previewImg, showPreview } = usePreviewImgStore();
  const { capItems } = useCapItemStore();
  const { labels } = useLabelStore();

  return (
    <div className={cn(side == 2 ? ''  : 'opacity-0','absolute inset-0')}>
       <div id="RightV" className="relative w-full h-full">
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

export default RightView;
