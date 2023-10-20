import { FC } from "react";

type pageProps = {};

const Test: FC<pageProps> = ({}) => {
  return (
    <div className="h-screen bg-gray-600 flex justify-center pt-32">
      <div id="container" className="w-full lg:w-[1200px] text-white px-2">
        <div id="testContainer" className=" h-screen relative bg-red-700">
          {/* <img src="/cap/1.png" alt="" className="w-full auto" />
          <svg
            className="mask absolute inset-0 w-[100%] h-[100%]"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
          >
            <mask id="mask" maskContentUnits="objectBoundingBox">
              <rect width="1" height="1" fill="#fff" />
              <path d="M150 0 L75 200 L225 200 Z" fill="#000" />
            </mask>
            <rect width="100%" height="100%" fill="#000" mask="url(#mask)" />
          </svg> */}
        </div>
      </div>
    </div>
  );
};

export default Test;
