import { FC } from "react";
import { BackView, FrontView, LeftView, RightView } from "./components/Views";
import CapSideSelector from "./components/CapSideSelector";
import Toolbar from "./components/Toolbar";

type pageProps = {};

const Designer: FC<pageProps> = ({}) => {
  return (
    <div className=" bg-gray-500 flex justify-center py-10 lg:py-32">
      <div id="container" className="w-full lg:w-[1200px] lg:h-[650px] ">
        <h1 className="lg:hidden text-center text-white mb-5 font-semibold text-2xl">
          DESIGN YOUR OWN
        </h1>

        {/* DESIGNER CANVAS START */}

        <div
          id="mainDesigner"
          className="w-full flex flex-col gap-y-5 lg:flex-row h-full"
        >
          <div
            id="CapCanvasOuter"
            className="grow bg-white flex items-center justify-center "
          >
            <div className="relative w-full min-h-[450px] lg:w-[600px] lg:h-[600px]">
              <div id="CapCanvasInner" className="w-full h-full">
                <FrontView />
                <BackView />
                <LeftView />
                <RightView />
              </div>

              <CapSideSelector />
            </div>
          </div>

          <div
            id="toolbar"
            className="w-full lg:w-[270px] bg-white h-full lg:flex flex-col"
          >
            <Toolbar />
          </div>
        </div>

        {/* DESIGNER CANVAS END */}
      </div>
    </div>
  );
};

export default Designer;
