import { FC } from "react";

type pageProps = {};

const Test: FC<pageProps> = ({}) => {
  return (
    <div className="h-screen bg-gray-600 flex justify-center pt-32">
      <div id="container" className="w-full lg:w-[1200px] text-white px-2">
        <div id="testContainer" className=" h-screen relative">
            {/* <div id="mask" className="absolute inset-0 bg-red-700" style={{mixBlendMode: 'overlay'}}></div>
          <img src="/cap/1.png" alt="" className="w-full auto" />  */}
          {/* <svg
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
          </svg>  */}

<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
  <defs>
 
    <filter id="colorFilter" color-interpolation-filters="sRGB">
      <feFlood result="color" flood-color="#ffffff" /> 
      <feComposite in="SourceGraphic" in2="color" operator="in" />
    </filter>
    
 
    <mask id="mask" maskContentUnits="objectBoundingBox">
      <rect width="1" height="1" fill="yellow" />
      <image xlinkHref="/cap/1.png" width="800" height="600" />
    </mask>
  </defs>
  
 
  <image xlinkHref="/cap/1.png" x="0" y="0" width="800" height="600" filter="url(#colorFilter)" mask="url(#mask)" />
</svg>
        </div>
      </div>
    </div>
  );
};

export default Test;
