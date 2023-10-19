'use client'

import { useBrandingStore } from '@/libs/store'
import { FC, ReactEventHandler, useEffect, useRef, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

type BrandingPickerProps = {
  brandingId: number
}

const BrandingPicker: FC<BrandingPickerProps> = ({brandingId}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { brandings, setBrandingImg, removeBrandingImg } = useBrandingStore()
   
    const [image, setImage] = useState<File>();
    const [error, setError] = useState("");

      // useEffect(() => {
      //   if (image) {
      //     const reader = new FileReader();
      //     reader.onloadend = () => {
      //       // setPreviewImg(reader.result as string);
      //       // setShowPreview(true)
      //       setBrandingImg(brandingId, reader.result as string)
      //       console.log(reader.result as string)
      //     };
      //     reader.readAsDataURL(image);
      //   } else {
          
      //   }
      // }, [image]);

      // function handleFileUpload(event:any){
      //   const file = event.target.files[0];

      //   if (file) {
      //     // Check if the selected file is an image
      //     if (!file.type.startsWith('image/')) {
      //       setError('Please upload an image file.');
      //       return;
      //     }
    
      //     // Check if the file size is less than 2MB
      //     if (file.size > 2 * 1024 * 1024) {
      //       setError('File size must be less than 2MB.');
      //       return;
      //     }
    
      //     const reader = new FileReader();
    
      //     reader.onload = (e) => {
      //       setImage(e.target.result);
      //       setError("");
      //     }
    
      //     reader.readAsDataURL(file);
      //   }
      // }

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
        {!brandings[brandingId].imageURL ? "Add Image" : "Change Image"}
      </button>
    </div>
    {/* <p>preview: {preview}</p> */}

    {brandings[brandingId].imageURL ? (
      <div className="flex gap-x-[-5px]">
        <img
          src={brandings[brandingId].imageURL}
          alt=""
          width={50}
          height={30}
          className="rounded-full aspect-square object-scale-down border-gray-400 border-2"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            // setPreviewImg(null);
            removeBrandingImg(brandingId)
            // setShowPreview(false)
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