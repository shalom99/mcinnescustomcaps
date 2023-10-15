"use client";
import { useCapItemStore, useLabelStore, usePreviewImgStore, useSideStore } from "@/libs/store";
import { FC } from "react";
import FrontView from "./FrontView";
import cn from "@/libs/cn";

type ViewsProps = {};

const Views: FC<ViewsProps> = ({}) => {
  const { side } = useSideStore();
  // switch (side) {
  //   case 0:
  //     return <FrontView />;
  //   case 1:
  //     return <BackView />;
  //   case 2:
  //     return <LeftView />;
  //   case 3:
  //     return <RightView />;
  //   default:
  //     return  <FrontView />;
  // }

  return (
    <div className="w-full h-full">
      <FrontView />
      <BackView />
      <LeftView />
      <RightView />
    </div>
  )
};

export default Views


const BackView: FC = ({}) => {
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


const LeftView: FC= ({}) => {
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

const RightView: FC = ({}) => {
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



