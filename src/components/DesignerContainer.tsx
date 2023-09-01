"use client";
import cn from "@/libs/cn";
import { useCapItemStore, useLabelStore, useSideStore } from "@/libs/store";
import localFont from "@next/font/local";

import { FC, useState, useEffect } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const myLocalFont = localFont({
  src: "../fonts/VenusRising.otf",
});

type DesignerProps = {};

const DesignerContainer: FC<DesignerProps> = ({}) => {
  const { capItems } = useCapItemStore();
  const { side, setSelectedSide, setNextSide, setPrevSide } = useSideStore();
  const { labels } = useLabelStore();
  // console.log(labels);

  return (
    <div className=" relative w-[600px] h-[600px] p-5">
      {/* front */}
      {side === 0 && (
        <>
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
            className="absolute inset-0 z-10"
            style={{ filter: capItems[1].selectedColorFilter }}
          />
        </>
      )}

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
      {side === 1 && (
        <>
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
        </>
      )}

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
              <p
                className={`${myLocalFont.className} absolute left-[201px] right-[330px] top-[350px]  -rotate-[76deg] text-[6px] rounded-lg text-center`}
              >
                {labels[0].text.length > 0 ? labels[0].text : '0000 000 000'}
              </p>
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

      <div className="absolute left-0 right-0 -bottom-5 flex justify-center gap-x-6 z-20 shadow-2xl bg-gray-300 rounded-full py-2">
        <button onClick={() => setPrevSide()} className="">
          <MdArrowBackIosNew
            className="text-activeOrange rounded-full border-activeOrange border-2 p-2"
            size={40}
          />
        </button>
        <div
          onClick={() => setSelectedSide(0)}
          className="flex items-center justify-center cursor-pointer"
        >
          <div
            className={cn(
              side === 0
                ? "border-activeOrange scale-125"
                : "border-primaryGreen",
              "w-[40px] border-b-4 "
            )}
          ></div>
        </div>
        <div
          onClick={() => setSelectedSide(1)}
          className="flex items-center justify-center cursor-pointer"
        >
          <div
            className={cn(
              side === 1
                ? "border-activeOrange scale-125"
                : "border-primaryGreen",
              "w-[40px] border-b-4"
            )}
          ></div>
        </div>
        <div
          onClick={() => setSelectedSide(2)}
          className="flex items-center justify-center cursor-pointer"
        >
          <div
            className={cn(
              side === 2
                ? "border-activeOrange scale-125"
                : "border-primaryGreen",
              "w-[40px] border-b-4"
            )}
          ></div>
        </div>
        <div
          onClick={() => setSelectedSide(3)}
          className="flex items-center justify-center cursor-pointer"
        >
          <div
            className={cn(
              side === 3
                ? "border-activeOrange scale-125"
                : "border-primaryGreen",
              "w-[40px] border-b-4 "
            )}
          ></div>
        </div>
        <button onClick={() => setNextSide()} className="">
          <MdArrowForwardIos
            className="text-activeOrange rounded-full border-activeOrange border-2 p-2"
            size={40}
          />
        </button>
      </div>
    </div>
  );
};

export default DesignerContainer;
