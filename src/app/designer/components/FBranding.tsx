"use client";
import cn from "@/libs/cn";
import { useBrandingStore } from "@/libs/store";
import { FC, useEffect, useState } from "react";
import { CgArrowsExpandLeft } from "react-icons/cg";
import { FiRotateCw } from "react-icons/fi";

const FBranding: FC = ({}) => {
  const { brandings } = useBrandingStore();

  const [fLogo, setFLogo] = useState({
    top: 0,
    left: 0,
    width: 200,
    height: 200,
  });

  useEffect(() => {
    const container = document.querySelector("#fPanelContainer")!;
    const element = document.querySelector("#fPanelElement")!;
    const img = document.querySelector("#fPanelImg")!;
    const capcanvasinterior = document.querySelector("#CapCanvasInner")!;
    const capcanvasouter = document.querySelector("#CapCanvasOuter")!;

    makeDraggable(element, container);
    makeResizable(element, container, img, capcanvasinterior, capcanvasouter);
    makeRotatable(element);
  }, [brandings[0].imageURL]);

  return (
    <div className="w-full h-full relative">
      <div
        id="fPanelContainer"
        className={cn(
          brandings[0].showBrandingPicker
            ? "border-2 border-dashed border-red-700"
            : "overflow-hidden",
          "z-20"
        )}
        style={{
          position: "absolute",
          top: "13.3%",
          bottom: "250px",
          left: "15.5%",
          right: "14.3%",
          borderRadius: "170px 170px 0px 0px",
        }}
        draggable={false}
      >
        {brandings[0].imageURL ? (
          <div
            id="fPanelElement"
            className={cn(
              brandings[0].imageURL ? "block" : "hidden",
              brandings[0].showBrandingPicker
                ? "border-2 border-blue-700"
                : "pointer-events-none",
              "select-none"
            )}
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
              src={brandings[0].imageURL ? brandings[0].imageURL : ""}
              alt=""
              className="absolute object-cover select-none z-50"
              style={{
                width: "100%",
                height: "100%",
              }}
              draggable={false}
            />
            <CgArrowsExpandLeft
              id="frontResizer"
              className={cn(
                brandings[0].showBrandingPicker
                  ? ""
                  : "hidden pointer-events-none",
                "absolute bottom-[-30px] right-[-20px] cursor-se-resize rounded-full bg-activeOrange p-1 z-[100]"
              )}
              size={25}
            />
            <FiRotateCw
              id="frontRotater"
              size={25}
              className={cn(
                brandings[0].showBrandingPicker
                  ? ""
                  : "hidden pointer-events-none",
                "absolute bottom-[-30px] left-0 right-0 mx-auto cursor-crosshair rounded-full bg-activeOrange p-1 z-50"
              )}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className={cn(
          brandings[0].showBrandingPicker
            ? "absolute left-0 right-0 top-[60%] flex flex-col items-center"
            : "hidden", "select-none z-20 pointer-events-none"
        )}
      >
        <div className="border-l-2 border-dashed border-red-700 h-[25px] z-40 select-none"></div>
        <p className="text-center text-sm text-red-700 font-bold select-none">Safe Area</p>
      </div>
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
        setFLogo((fLogo) => ({
          ...fLogo,
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
      if (fLogo.top < parseInt(element.style.height) * 0.8 * -1) {
        console.log("out of bounds top or left");
        element.style.top = "0px";
        element.style.left = "0px";

        setFLogo((fLogo) => ({ ...fLogo, top: 0, left: 0 }));
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

  function makeResizable(element: any, container: any, img: any, capcanvasinterior: any, capcanvasouter: any) {
    const resizeHandle = document.querySelector("#frontResizer")!;
    let isResizing = false;
    let startWidth: number, startHeight: number;

    if (element && container && img && resizeHandle) {
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
        // const newWidth =
        //   e.clientX -
        //   (startWidth +
        //     element.offsetLeft +
        //     container.offsetLeft);

        const newWidth =
          e.clientX - (startWidth + element.offsetLeft + container.offsetLeft+ capcanvasinterior.offsetLeft + capcanvasouter.offsetLeft) + 20;

        const newHeight =
          e.clientY - (startHeight + element.offsetTop + container.offsetTop) -20;

        // const newWidth = e.clientX - containerRect.left - element.offsetLeft;
        // const newHeight = e.clientY - containerRect.top - element.offsetTop;
        setFLogo((fLogo) => ({ ...fLogo, width: newWidth, height: newHeight }));
      }
      document.addEventListener("mouseup", resizeMouseUp);
    }
  }

  function makeRotatable(element: any) {
    const rotateHandle = document.querySelector("#frontRotater")!;
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
          ((angle * 180) / Math.PI - startAngle)
        }deg)`;
      }
    }

    function rotateMouseUp() {
      isRotating = false;
 
    }
  }
};

export default FBranding;

// return (
//   <div className="w-full h-full relative">
//     <div
//       id="fPanelContainer"
//       className={cn(
//         brandings[0].showBrandingPicker
//           ? "border-2 border-dashed border-red-700 overflow-clip "
//           : "",
//         "z-30"
//       )}
//       style={{
//         position: "absolute",
//         top: "13.3%",
//         bottom: "250px",
//         left: "15.5%",
//         right: "14.3%",
//         borderRadius: "170px 170px 0px 0px",
//       }}
//       draggable={false}
//     >
//       {brandings[0].imageURL ? (
//         <div
//           id="fPanelElement"
//           className={cn(
//             brandings[0].imageURL ? "block" : "hidden",
//             brandings[0].showBrandingPicker
//               ? "border-2 border-blue-700"
//               : "pointer-events-none",
//             "select-none"
//           )}
//           draggable={false}
//           style={{
//             position: "absolute",
//             top: fLogo.top,
//             left: fLogo.left,
//             width: fLogo.width + "px",
//             height: fLogo.height + "px",
//           }}
//         >
//           <img
//             id="fPanelImg"
//             src={brandings[0].imageURL ? brandings[0].imageURL : ""}
//             alt=""
//             className="absolute object-cover select-none z-50"
//             style={{
//               width: "100%",
//               height: "100%",
//             }}
//             draggable={false}
//           />
//           <CgArrowsExpandLeft
//             id="resizer"
//             className={cn(
//               brandings[0].showBrandingPicker
//                 ? ""
//                 : "hidden pointer-events-none",
//               "absolute bottom-[-30px] right-[-20px] select-none cursor-se-resize rounded-full bg-activeOrange p-1"
//             )}
//             size={25}
//           />
//           <FiRotateCw
//             id="rotater"
//             size={25}
//             className={cn(
//               brandings[0].showBrandingPicker
//                 ? ""
//                 : "hidden pointer-events-none",
//               "absolute bottom-[-30px] left-0 right-0 mx-auto cursor-crosshair rounded-full bg-activeOrange p-1"
//             )}
//           />
//         </div>
//       ) : (
//         ""
//       )}
//     </div>
//     <div
//       className={cn(
//         brandings[0].showBrandingPicker
//           ? "absolute left-0 right-0 top-[60%] z-50 flex flex-col items-center"
//           : "hidden"
//       )}
//     >
//       <div className="border-l-2 border-dashed border-red-700 h-[25px]"></div>
//       <p className="text-center text-sm text-red-700 font-bold">Safe Area</p>
//     </div>
//   </div>
// );

// function makeDraggable(element: any, container: any) {
//   let isDragging = false;
//   let offsetX: number, offsetY: number;

//   if (element && container) {
//     element.addEventListener("mousedown", (e: MouseEvent) => {
//       isDragging = true;
//       offsetX = e.clientX - element.offsetLeft;
//       offsetY = e.clientY - element.offsetTop;
//       document.addEventListener("mousemove", drag);
//     });
//   }

//   function drag(e: any) {
//     if (isDragging) {
//       setFLogo((fLogo) => ({
//         ...fLogo,
//         top: e.clientY - offsetY,
//         left: e.clientX - offsetX,
//       }));

//       // element.style.left = e.clientX - offsetX + 'px';
//       // element.style.top = e.clientY - offsetY + 'px';

//       // console.log("element style top" + element.style.top);
//       // console.log(
//       //   "container style top" + container.getBoundingClientRect().height
//       // );
//     } else {
//       console.log("dragging = false kanu");
//     }

//     document.addEventListener("mouseup", mouseUp);
//   }

//   function mouseUp() {
//     //reposition element inside container if goes outside parent container
//     if (fLogo.top < parseInt(element.style.height) * 0.8 * -1) {
//       console.log("out of bounds top or left");
//       element.style.top = '0px'
//       element.style.left = '0px'

//       setFLogo(fLogo => ({...fLogo, top: 0, left:0}))
//     } else {
//       console.log("not out of bounds left or top");
//       console.log(container.getBoundingClientRect());
//       console.log(element.getBoundingClientRect());
//     }

//     isDragging = false;
//     document.removeEventListener("mousemove", drag);
//     document.removeEventListener("mouseup", mouseUp);
//   }
// }

// function makeResizable(
//   element: any,
//   container: any,
//   img: any,
//   middleCanvas: any
// ) {
//   const resizeHandle = document.querySelector("#resizer")!;
//   let isResizing = false;
//   let startWidth: number, startHeight: number;

//   if (element && container && img && resizeHandle && middleCanvas) {
//     resizeHandle.addEventListener("mousedown", resizeMouseDown);
//   }

//   function resizeMouseDown(e: any) {
//     e.stopPropagation();
//     console.log("resizer clicked")
//     isResizing = true;
//     startWidth = fLogo.width;
//     startHeight = fLogo.height;
//     document.addEventListener("mousemove", resizeMouseMove);
//   }

//   function resizeMouseUp() {
//     isResizing = false;
//     document.removeEventListener("mousemove", resizeMouseMove);
//     document.removeEventListener("mouseup", resizeMouseUp);
//   }

//   function resizeMouseMove(e: any) {
//     if (isResizing) {
//       const newWidth =
//         e.clientX -
//         (startWidth +
//           element.offsetLeft +
//           container.offsetLeft +
//           middleCanvas.offsetLeft);

//       const newHeight =
//         e.clientY - (startHeight + element.offsetTop + container.offsetTop);

//       // const newWidth = e.clientX - containerRect.left - element.offsetLeft;
//       // const newHeight = e.clientY - containerRect.top - element.offsetTop;
//       setFLogo((fLogo) => ({ ...fLogo, width: newWidth, height: newHeight }));
//     }
//     document.addEventListener("mouseup", resizeMouseUp);
//   }
// }

// function makeRotatable(element: any) {
//   const rotateHandle = document.querySelector("#rotater")!;
//   let isRotating = false;
//   let startAngle = 0;

//   if (rotateHandle) {
//     rotateHandle.addEventListener("mousedown", (e: any) => {
//       e.stopPropagation();
//       isRotating = true;
//       const startX = e.clientX;
//       const startY = e.clientY;
//       const startMouseAngle = Math.atan2(
//         startY - element.offsetTop,
//         startX - element.offsetLeft
//       );
//       startAngle =
//         (startMouseAngle * 180) / Math.PI -
//         (parseInt(element.style.transform.split("rotate(")[1]) || 0);
//     });

//     document.addEventListener("mousemove", rotateMouseMove);
//     document.addEventListener("mouseup", rotateMouseUp);
//   }

//   function rotateMouseMove(e: any) {
//     if (isRotating) {
//       const mouseX = e.clientX;
//       const mouseY = e.clientY;
//       const angle = Math.atan2(
//         mouseY - element.offsetTop,
//         mouseX - element.offsetLeft
//       );
//       element.style.transform = `rotate(${
//         (angle * 180) / Math.PI - startAngle
//       }deg)`;
//     }
//   }

//   function rotateMouseUp() {
//     isRotating = false;
//   }
// }
