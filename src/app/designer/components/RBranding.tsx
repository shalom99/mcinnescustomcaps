"use client";
import cn from "@/libs/cn";
import { useBrandingStore } from "@/libs/store";
import { FC, useEffect, useState } from "react";
import { CgArrowsExpandLeft } from "react-icons/cg";
import { FiRotateCw } from "react-icons/fi";

const RBranding: FC = ({}) => {
  const { brandings } = useBrandingStore();

  const [rLogo, setRLogo] = useState({
    top: 0,
    left: 0,
    width: 200,
    height: 200,
  });

  useEffect(() => {
    const container = document.querySelector("#rPanelContainer")!;
    const element = document.querySelector("#rPanelElement")!;
    const img = document.querySelector("#rPanelImg")!;
    const capcanvasinterior = document.querySelector("#CapCanvasInner")!;
    const capcanvasouter = document.querySelector("#CapCanvasOuter")!;

    makeDraggable(element, container);
    makeResizable(element, container, img, capcanvasinterior, capcanvasouter);
    makeRotatable(element);
  }, [brandings[3].imageURL]);

  return (
    <div
      id="rPanelContainer"
      className={cn(
        brandings[3].showBrandingPicker
          ? "border-2 border-dashed border-red-700  "
          : "overflow-hidden",
        "z-30 "
      )}
      style={{
        position: "absolute",
        top: "29%",
        bottom: "38%",
        left: "44%",
        right: "3%",
        borderRadius: "190px 300px 0px 0px",
        rotate: '9deg'
      }}
      draggable={false}
    >
      {brandings[3].imageURL ? (
        <div
          id="rPanelElement"
          className={cn(
            brandings[3].imageURL ? "block" : "hidden",
            brandings[3].showBrandingPicker
              ? "border-2 border-blue-700"
              : "pointer-events-none",
            "select-none"
          )}
          draggable={false}
          style={{
            position: "absolute",
            top: rLogo.top,
            left: rLogo.left,
            width: rLogo.width + "px",
            height: rLogo.height + "px",
          }}
        >
          <img
            id="rPanelImg"
            src={brandings[3].imageURL ? brandings[3].imageURL : ""}
            alt=""
            className="absolute object-cover select-none z-50"
            style={{
              width: "100%",
              height: "100%",
            }}
            draggable={false}
          />
          <CgArrowsExpandLeft
            id="rightResizer"
            className={cn(
              brandings[3].showBrandingPicker
                ? ""
                : "hidden pointer-events-none",
              "absolute bottom-[-30px] right-[-20px] select-none cursor-se-resize rounded-full bg-activeOrange p-1"
            )}
            size={25}
          />
          <FiRotateCw
            id="rightRotater"
            size={25}
            className={cn(
              brandings[3].showBrandingPicker
                ? ""
                : "hidden pointer-events-none",
              "absolute bottom-[-30px] left-0 right-0 mx-auto cursor-crosshair rounded-full bg-activeOrange p-1"
            )}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );

  function makeDraggable(element: any, container: any) {
    let isDragging = false;
    let offsetX: number, offsetY: number;

    if (element && container) {
      element.addEventListener("mousedown", (e: MouseEvent) => {
        e.stopPropagation();
        isDragging = true;
        offsetX = e.clientX - element.offsetLeft;
        offsetY = e.clientY - element.offsetTop;
        document.addEventListener("mousemove", drag);
      });
    }

    function drag(e: any) {
      if (isDragging) {
        setRLogo((rLogo) => ({
          ...rLogo,
          top: e.clientY - offsetY,
          left: e.clientX - offsetX,
        }));
      } else {
        console.log("dragging = false");
      }

      document.addEventListener("mouseup", mouseUp);
    }

    function mouseUp() {
      //reposition element inside container if goes outside parent container
      if (rLogo.top < parseInt(element.style.height) * 0.8 * -1) {
        console.log("out of bounds top or left");
        element.style.top = "0px";
        element.style.left = "0px";

        setRLogo((rLogo) => ({ ...rLogo, top: 0, left: 0 }));
      } else {
        console.log("not out of bounds left or top");
        console.log(container.getBoundingClientRect());
        console.log(element.getBoundingClientRect());
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
    capcanvasinterior: any,
    capcanvasouter: any
  ) {
    const resizeHandle = document.querySelector("#rightResizer")!;
    let isResizing = false;
    let startWidth: number, startHeight: number;

    if (element && container && img && resizeHandle) {
      resizeHandle.addEventListener("mousedown", resizeMouseDown);
    }

    function resizeMouseDown(e: any) {
      e.stopPropagation();
      isResizing = true;
      startWidth = rLogo.width;
      startHeight = rLogo.height;
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
            capcanvasinterior.offsetLeft +
            capcanvasouter.offsetLeft) +
          20;

        const newHeight =
          e.clientY -
          (startHeight + element.offsetTop + container.offsetTop) -
          20;

        // const newWidth = e.clientX - containerRect.left - element.offsetLeft;
        // const newHeight = e.clientY - containerRect.top - element.offsetTop;
        setRLogo((rLogo) => ({ ...rLogo, width: newWidth, height: newHeight }));
      }
      document.addEventListener("mouseup", resizeMouseUp);
    }
  }

  function makeRotatable(element: any) {
    const rotateHandle = document.querySelector("#rightRotater")!;
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

export default RBranding;

