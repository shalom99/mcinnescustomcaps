"use client";

import { useCapItemStore, useLabelStore, usePreviewImgStore, useSideStore } from "@/libs/store";
import localFont from "next/font/local";
// import {makeDraggable, makeResizable, makeRotatable} from '@/libs/config/helpers'
import { FC, useRef, useEffect, useState } from "react";




import { CgArrowsExpandLeft } from "react-icons/cg";
import { FiRotateCw } from "react-icons/fi";
import CapSideSelector from "./CapSideSelector";

const myLocalFont = localFont({
  src: "../../../fonts/VenusRising.otf",
});

type DesignerProps = {
  
};

const DesignerContainer: FC<DesignerProps> = () => {
  const canvasRef = useRef(null);
  const { capItems } = useCapItemStore();
  const { side, setSelectedSide, setNextSide, setPrevSide } = useSideStore();
  const { labels } = useLabelStore();
  const { previewImg, showPreview } = usePreviewImgStore();
  // console.log(labels);
  const [fLogo, setFLogo] = useState({
    top: 0,
    left: 0,
    width: 200,
    height: 200,
  });


  useEffect(() => {
    const container = document.querySelector("#fPanelContainer")!;
    const element = document.querySelector("#fPanelElement")!;
    const middleCanvas = document.querySelector('#middleCanvas')!;
    const img = document.querySelector("#fPanelImg")!;

    makeDraggable(element, container);
    makeResizable(element, container, img, middleCanvas)
    makeRotatable(element)
  }, []);

 
  return (
    <div className="relative w-full h-[450px] lg:w-[600px] lg:h-[600px] p-5">
      {/* front */}

      <div className="" style={{ display: side === 0 ? "block" : "none" }}>
        {/* <FrontCanvas /> */}

        <div
          id="fPanelContainer"
          className="z-30 border-2 border-dashed border-red-700 select-none overflow-hidden"
          style={{
            display: showPreview ? "block" : "none",
            position: "absolute",
            top: "13.3%",
            bottom: "200px",
            left: "15.5%",
            right: "14.3%",
            borderRadius: "170px 170px 0px 0px",
           
          }}
          draggable={false}
        >
          <div
            id="fPanelElement"
            className="select-none border-2 border-blue-700"
            draggable={false}
            style={{
              position: "absolute",
              top: fLogo.top,
              left: fLogo.left,
              width: fLogo.width + "px",
              height: fLogo.height + "px",
            }}
          >
            <img
              id="fPanelImg"
              src={previewImg ? previewImg : ""}
              alt=""
              className="absolute object-cover border select-none z-50"
              style={{
                width: '100%',
                height: '100%',
              }}
              draggable={false}
            />

            <CgArrowsExpandLeft
              id="resizer"
              className="absolute bottom-[-30px] right-[-20px] select-none cursor-se-resize"
              size={20}
        
            />

            <FiRotateCw
            id="rotater"
              size={20}
              className="absolute bottom-[-30px] left-0 right-0 mx-auto cursor-crosshair"
            />
          </div>
        
        </div>

        <img src="/cap/1.png" className="absolute inset-0 z-10" alt="" />
        <img
          src="/cap/2.png"
          className="absolute inset-0 z-5"
          alt=""
          style={{ filter: capItems[5].selectedColorFilter }}
        />
        <img
          src="/cap/4.png"
          className="absolute inset-0"
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

      {side === 0 && labels[0].show === true ? (
        <>
          <img id="flag1" src="/cap/8.png" className="absolute inset-0" />
          <img
            id="flag2"
            src="/cap/9.png"
            className="absolute inset-0"
            style={{ filter: labels[0].selectedColorFilter }}
          />
        </>
      ) : (
        ""
      )}

      {/* back */}

      <div style={{ display: side === 1 ? "block" : "none" }}>
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

      {/* left */}
      {side === 2 && (
        <>
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

          {side === 2 && labels[0].show === true ? (
            <>
              <img
                src="/cap/frontlabelfill.png"
                className="absolute inset-0"
                alt=""
                style={{ filter: labels[0].selectedColorFilter }}
              />

              <img
                src="/cap/frontlabel.png"
                className="absolute inset-0"
                alt=""
              />
              <div className="absolute top-[51%] left-[33.5%] right-[55%] lg:left-[201px] lg:right-[330px] lg:top-[350px] -rotate-[76deg] text-[4px] lg:text-[6px] text-center">
              <p className={`${myLocalFont.className} `}>
                {labels[0].text.length > 0 ? labels[0].text : "0000 000 000"}
              </p>
              </div>
       
            </>
          ) : (
            ""
          )}
        </>
      )}

      {side === 2 && labels[1].show === true ? (
        <>
          <img
            src="/cap/leftlabel.png"
            className="absolute inset-0 z-20"
            alt=""
          />
          <img
            src="/cap/leftlabelfill.png"
            className="absolute inset-0 z-10"
            alt=""
            style={{ filter: labels[1].selectedColorFilter }}
          />
        </>
      ) : (
        ""
      )}

      {/* right */}
      {side === 3 && (
        <>
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
        </>
      )}

      {side === 3 && labels[2].show === true ? (
        <>
          <img src="/cap/46.png" className="absolute inset-0 z-20" alt="" />
          <img
            src="/cap/45.png"
            className="absolute inset-0 z-10"
            alt=""
            style={{ filter: labels[2].selectedColorFilter }}
          />
        </>
      ) : (
        ""
      )}

    <CapSideSelector />
   
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


  function makeResizable(element: any, container: any, img: any, middleCanvas: any) {
    const resizeHandle = document.querySelector("#resizer")!;
    let isResizing = false;
    let startWidth: number, startHeight: number;

    if(element && container && img && resizeHandle && middleCanvas){
      resizeHandle.addEventListener("mousedown", resizeMouseDown);
      
    }

    function resizeMouseDown(e: any){
      e.stopPropagation();
      isResizing = true;
      startWidth = fLogo.width;
      startHeight = fLogo.height;
      document.addEventListener("mousemove", resizeMouseMove);
    
    }

    function resizeMouseUp(){
      isResizing = false;
      document.removeEventListener('mousemove', resizeMouseMove)
      document.removeEventListener('mouseup', resizeMouseUp)
    }

    function resizeMouseMove(e: any){
      if (isResizing) {
        const newWidth = e.clientX - (startWidth + element.offsetLeft + container.offsetLeft + middleCanvas.offsetLeft) 

         const newHeight = e.clientY - (startHeight + element.offsetTop + container.offsetTop  ) 
  
        // const newWidth = e.clientX - containerRect.left - element.offsetLeft;
        // const newHeight = e.clientY - containerRect.top - element.offsetTop;
        setFLogo(fLogo => ({...fLogo, width: newWidth, height: newHeight}))

      }
      document.addEventListener("mouseup", resizeMouseUp);
    }
   
  }

  function makeRotatable(element: any) {
    const rotateHandle = document.querySelector("#rotater")!;
    let isRotating = false;
    let startAngle = 0;

    if(rotateHandle){

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


    function rotateMouseMove(e:any){
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

    function rotateMouseUp(){
      isRotating = false;

    }
    
  }

};

export default DesignerContainer;
