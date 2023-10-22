'use client'
import { FC, useEffect } from "react";

type pageProps = {};

const Test: FC<pageProps> = ({}) => {

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const maskedImage = document.getElementById('masked-image') as HTMLImageElement;

    if (!context || !maskedImage) return;

    canvas.width = maskedImage.width;
    canvas.height = maskedImage.height;

    context.drawImage(maskedImage, 0, 0);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] === 0) {
        data[i] = data[i + 1] = data[i + 2] = data[i + 3] = 0;
      } else {
        data[i] = 255;
        data[i + 1] = 87;
        data[i + 2] = 51;
      }
    }

    context.putImageData(imageData, 0, 0);
    maskedImage.src = canvas.toDataURL('image/png');
  }, []);

  return (
    <div className="h-screen bg-gray-600 flex justify-center pt-32">
      <div id="container" className="w-full lg:w-[1200px] text-white px-2">
        <div id="testContainer" className=" h-screen relative">
        <img id="masked-image" src="/cap/1.png" alt="Masked Image" />
      
        </div>
      </div>
    </div>
  );
};

export default Test;
