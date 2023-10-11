"use client";
import {
  useCapItemStore,
  useCartStore,
  useLabelStore,
  usePreviewImgStore,
  useSideStore,
} from "@/libs/store";
import { FC, useState, useEffect } from "react";

import cn from "@/libs/cn";
type FrontViewProps = {};

const FrontView: FC<FrontViewProps> = ({}) => {
  const { side, setSelectedSide, setNextSide, setPrevSide } = useSideStore();
  const { previewImg, showPreview } = usePreviewImgStore();
  const { capItems } = useCapItemStore();
  const { labels } = useLabelStore();

  const [fLogo, setFLogo] = useState({
    top: 0,
    left: 0,
    width: 200,
    height: 200,
  });

  useEffect(() => {
    const container = document.querySelector("#fPanelContainer")!;
    const element = document.querySelector("#fPanelElement")!;
    const middleCanvas = document.querySelector("#middleCanvas")!;
    const img = document.querySelector("#fPanelImg")!;

    makeDraggable(element, container);
    makeResizable(element, container, img, middleCanvas);
    makeRotatable(element);
  }, []);

  return (
    <div className={cn(side == 0 ? ''  : 'opacity-0','absolute inset-0')} >
      <div id="FrontV" className="relative w-full h-full">
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

  function makeDraggable(element: any, container: any) {
    let isDragging = false;
    let offsetX: number, offsetY: number;

    if (element && container) {
      element.addEventListener("mousedown", (e: MouseEvent) => {
        isDragging = true;
        offsetX = e.clientX - element.offsetLeft;
        offsetY = e.clientY - element.offsetTop;
        document.addEventListener("mousemove", drag);
      });
    }

    function drag(e: any) {
      if (isDragging) {
        setFLogo((fLogo) => ({
          ...fLogo,
          top: e.clientY - offsetY,
          left: e.clientX - offsetX,
        }));

        // element.style.left = e.clientX - offsetX + 'px';
        // element.style.top = e.clientY - offsetY + 'px';

        // console.log("element style top" + element.style.top);
        // console.log(
        //   "container style top" + container.getBoundingClientRect().height
        // );
      } else {
        console.log("dragging = false kanu");
      }

      document.addEventListener("mouseup", mouseUp);
    }

    function mouseUp() {
      //reposition element inside container if goes outside parent container
      if (fLogo.top < parseInt(element.style.height) * 0.8 * -1) {
        console.log("out of bounds top or left");
        // element.style.top = '0px'
        // element.style.left = '0px'

        // setFLogo(fLogo => ({...fLogo, top: 0, left:0}))
      } else {
        // console.log("not out of bounds left or top");
        // console.log(container.getBoundingClientRect());
        // console.log(element.getBoundingClientRect());
      }

      isDragging = false;
      document.removeEventListener("mousemove", drag);
      document.removeEventListener("mouseup", mouseUp);
    }
  }

  function makeResizable(
    element: any,
    container: any,
    img: any,
    middleCanvas: any
  ) {
    const resizeHandle = document.querySelector("#resizer")!;
    let isResizing = false;
    let startWidth: number, startHeight: number;

    if (element && container && img && resizeHandle && middleCanvas) {
      resizeHandle.addEventListener("mousedown", resizeMouseDown);
    }

    function resizeMouseDown(e: any) {
      e.stopPropagation();
      isResizing = true;
      startWidth = fLogo.width;
      startHeight = fLogo.height;
      document.addEventListener("mousemove", resizeMouseMove);
    }

    function resizeMouseUp() {
      isResizing = false;
      document.removeEventListener("mousemove", resizeMouseMove);
      document.removeEventListener("mouseup", resizeMouseUp);
    }

    function resizeMouseMove(e: any) {
      if (isResizing) {
        const newWidth =
          e.clientX -
          (startWidth +
            element.offsetLeft +
            container.offsetLeft +
            middleCanvas.offsetLeft);

        const newHeight =
          e.clientY - (startHeight + element.offsetTop + container.offsetTop);

        // const newWidth = e.clientX - containerRect.left - element.offsetLeft;
        // const newHeight = e.clientY - containerRect.top - element.offsetTop;
        setFLogo((fLogo) => ({ ...fLogo, width: newWidth, height: newHeight }));
      }
      document.addEventListener("mouseup", resizeMouseUp);
    }
  }

  function makeRotatable(element: any) {
    const rotateHandle = document.querySelector("#rotater")!;
    let isRotating = false;
    let startAngle = 0;

    if (rotateHandle) {
      rotateHandle.addEventListener("mousedown", (e: any) => {
        e.stopPropagation();
        isRotating = true;
        const startX = e.clientX;
        const startY = e.clientY;
        const startMouseAngle = Math.atan2(
          startY - element.offsetTop,
          startX - element.offsetLeft
        );
        startAngle =
          (startMouseAngle * 180) / Math.PI -
          (parseInt(element.style.transform.split("rotate(")[1]) || 0);
      });

      document.addEventListener("mousemove", rotateMouseMove);
      document.addEventListener("mouseup", rotateMouseUp);
    }

    function rotateMouseMove(e: any) {
      if (isRotating) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const angle = Math.atan2(
          mouseY - element.offsetTop,
          mouseX - element.offsetLeft
        );
        element.style.transform = `rotate(${
          (angle * 180) / Math.PI - startAngle
        }deg)`;
      }
    }

    function rotateMouseUp() {
      isRotating = false;
    }
  }
};

export default FrontView;
