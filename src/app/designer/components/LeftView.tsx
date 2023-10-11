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

type LeftViewProps = {};

const LeftView: FC<LeftViewProps> = ({}) => {
  const { side, setSelectedSide, setNextSide, setPrevSide } = useSideStore();
  const { previewImg, showPreview } = usePreviewImgStore();
  const { capItems } = useCapItemStore();
  const { labels } = useLabelStore();

  return (
    <div  className={cn(side == 3 ? ''  : 'opacity-0','absolute inset-0')}>
        <div id="LeftV" className="relative w-full h-full">
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

export default LeftView;
