'use client'

import { usePreviewImgStore } from '@/libs/store'
import { FC, useEffect, useRef, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

type BrandingPickerProps = {
  
}

const BrandingPicker: FC<BrandingPickerProps> = ({}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const { previewImg, setPreviewImg, setShowPreview} = usePreviewImgStore();
    const [image, setImage] = useState<File>();


      // useEffect(() => {
      //   if (image) {
      //     const reader = new FileReader();
      //     reader.onloadend = () => {
      //       setPreviewImg(reader.result as string);
      //       setShowPreview(true)
      //     };
      //     reader.readAsDataURL(image);
      //   } else {
      //   }
      // }, [image]);

  return (
     
    <div className="flex flex-col py-2 px-2 gap-y-3 relative">
    <h2>Upload your Logo</h2>
    <h3 className="text-xs">
      High-quality JPG/JPEG or PNG recommended. Some users have
      experienced difficulty with other file types.{" "}
    </h3>

    <input
      ref={fileInputRef}
      onChange={(event) => {
        const files: FileList | null = event.currentTarget.files;
        if (files && files[0].type.substring(0, 5) === "image") {
          setImage(files[0]);
        }
      }}
      type="file"
      accept="image/png, image/jpeg"
      className="hidden"
    />
    <div className="w-full flex items-center justify-center">
      <button
        onClick={(event) => {
          event.preventDefault();
          fileInputRef.current?.click();
        }}
        className="bg-gray-400 rounded-full p-2 w-[150px]"
      >
        {!previewImg ? "Add Image" : "Change Image"}
      </button>
    </div>
    {/* <p>preview: {preview}</p> */}

    {previewImg ? (
      <div className="flex gap-x-[-5px]">
        <img
          src={previewImg}
          alt=""
          width={50}
          height={30}
          className="rounded-full aspect-square object-scale-down border-gray-400 border-2"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setPreviewImg(null);
            setShowPreview(false)
          }}
          className="w-[15px] h-[15px]"
        >
          <AiFillCloseCircle />
        </button>
      </div>
    ) : (
      ""
    )}
  </div>
)
}

export default BrandingPicker