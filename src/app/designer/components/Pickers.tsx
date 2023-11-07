"use client";
import cn from "@/libs/cn";
import { useBrandingStore, useCapItemStore, useLabelStore, useSideStore } from "@/libs/store";
import { FC, useEffect, useRef, useState } from "react";
import { ColorOptions } from "@/libs/config/constant";
import { AiFillCloseCircle } from "react-icons/ai";


type ColorPickerProps = {
  capItemId: any;
};

type LabelColorPickerProps = {
  label: any;
};

type BrandingPickerProps = {
  brandingId: number
}

export const ColorPicker: FC<ColorPickerProps> = ({ capItemId }) => {
  const { capItems, setCapItemColor } = useCapItemStore();
  const { setSelectedSide } = useSideStore();

  function handleChangeColor(id: number, color: string, colorId: number, filter: string ) {
    setCapItemColor(id, color, colorId, filter);
  }

  useEffect(() => {
    if (capItems[capItemId].id === 6) {
      setSelectedSide(1);
    }
  }, [capItems[capItemId].hexcode]);

  return (
    <div
      className="text-black w-full flex flex-col gap-y-5 py-5 select-none"
    >
      <h2 className="font-bold text-sm px-2">Choose Color:</h2>
      <div className="w-full grid grid-cols-4 gap-x-1 gap-y-5 justify-evenly">
        {ColorOptions.map((colorOption) => (
          <div
            key={colorOption.id}
            className="flex flex-col items-center text-xs text-gray-600"
          >
            <button
              onClick={() =>
                handleChangeColor(
                  capItemId,
                  colorOption.code,
                  colorOption.id,
                  colorOption.filter
                )
              }
              className={cn("w-[40px] h-[40px]  rounded-full border")}
              style={{ backgroundColor: colorOption.code }}
            />
            <label htmlFor="">Color #{colorOption.id}</label>
          </div>
        ))}
      </div>
    </div>
  );
};


export const LabelColorPicker: FC<LabelColorPickerProps> = ({ label }) => {
  const { labels, setShowLabel, setLabelText, setLabelBackgroundColor } =
    useLabelStore();
  const { side, setSelectedSide } = useSideStore();

  useEffect(() => {
    // set side on show of selected label
    if (labels[label.id].show === true) {
      if (label.id === 0 || label.id === 1) {
        setSelectedSide(3);
        console.log(`moved side ${labels[label.id].name}  `);
      } else {
        setSelectedSide(2);
        console.log(`moved side ${labels[label.id].name}`);
      }
    }
  }, [labels[label.id].show]);

  function handleChangeColor(
    id: number,
    color: string,
    colorId: number,
    filter: string
  ) {
    setLabelBackgroundColor(id, color, colorId, filter);
  }

  return (
    <div className="text-black w-full flex flex-col gap-y-5 py-5 select-none">
      <h2 className="font-bold text-sm px-2">{label.title}</h2>

      <select
        name=""
        id=""
        value={label.show === true ? 1 : 0}
        onChange={(e) => {
          setShowLabel(label.id, e.target.value == "1" ? true : false);
        }}
        className="w-full rounded-md border border-black py-2 px-2 text-sm"
      >
        <option value="0" className="text-sm">
          No Label
        </option>
        <option value="1">Label</option>
      </select>

      {label.show === true ? (
        <>
          <div className="w-full my-2">
            <input
              type="text"
              placeholder="Input Text"
              value={label.text}
              onChange={(e) => setLabelText(label.id, e.target.value)}
              className="w-full text-gray-600 pl-2 py-2 rounded-md border border-black text-sm"
              maxLength={12}
            />
            <h2 className="pl-2 text-sm mt-3">Label Background Color</h2>
          </div>
          <div className="w-full grid grid-cols-4 justify-evenly gap-y-5">
            {ColorOptions.map((colorOption) => (
              <div
                key={colorOption.id}
                className="flex flex-col items-center text-xs text-gray-600"
              >
                <button
                  onClick={() =>
                    handleChangeColor(
                      label.id,
                      colorOption.code,
                      colorOption.id,
                      colorOption.filter
                    )
                  }
                  className={cn("w-[40px] h-[40px]  rounded-full border")}
                  style={{ backgroundColor: colorOption.code }}
                />
                <label htmlFor="">Color #{colorOption.id}</label>
              </div>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};


export const BrandingPicker: FC<BrandingPickerProps> = ({brandingId}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { brandings, setBrandingImg, removeBrandingImg } = useBrandingStore()
   
    const [image, setImage] = useState<File>();
    const [error, setError] = useState("");

      useEffect(() => {
        if (image) {
          const reader = new FileReader();
          reader.onloadend = () => {
            // setPreviewImg(reader.result as string);
            // setShowPreview(true)
            setBrandingImg(brandingId, reader.result as string)
            console.log(reader.result as string)
          };
          reader.readAsDataURL(image);
        } else {
          
        }
      }, [image]);

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

