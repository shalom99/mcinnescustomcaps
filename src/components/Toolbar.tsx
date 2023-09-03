"use client";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import ColorPicker from "./ColorPicker";
import LabelColorPicker from "./LabelColorPicker";
import { useLabelStore, useCapItemStore } from "@/libs/store";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

type ToolbarProps = {};

const Toolbar: FC<ToolbarProps> = ({}) => {
  const labels = useLabelStore();
  const capItems = useCapItemStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string | null>();
  const [showBranding, setShowBranding] = useState(false);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
    }
  }, [image]);

  return (
    <>
      <div className="h-full overflow-y-auto overflow-hidden">
        {capItems.capItems.map((capItem) => (
          <div key={capItem.id}>
            <div
              onClick={() => capItems.setShowPicker(capItem.id)}
              className="flex items-center justify-between gap-x-3 cursor-pointer border-y-2 py-4 px-2"
            >
              <h3 className="text-md text-slate-600 select-none">
                {capItem.name}
              </h3>
              <p style={{ color: capItem.hexcode }}>{capItem.hexcode}</p>
            </div>

            <div className="flex items-center gap-x-5 relative">
              {capItem.showColorPicker && <ColorPicker title={capItem.name} capItemId={capItem.id} />}
            </div>
          </div>
        ))}

        {labels.labels.map((label) => (
          <div key={label.id} className="">
            <div
              onClick={() => labels.setShowPicker(label.id)}
              className="flex items-center justify-between gap-x-3 cursor-pointer border-y-2 py-4 px-2"
            >
              <h3 className="text-md text-slate-600 select-none">
                {label.name}
              </h3>

             {!label.showColorPicker ? <MdOutlineKeyboardArrowDown /> :
             <MdOutlineKeyboardArrowUp /> }
            </div>

            <div className="flex items-center gap-x-5 relative">
              {label.showColorPicker && (
                <LabelColorPicker
                  title={label.name}
                  label={label}
                />
              )}
            </div>
          </div>
        ))}

        {/* <h1>{JSON.stringify(labels.labels[0].text)}</h1> */}

        {/* START BRAND */}
        <div>
          <div onClick={() => {
            setShowBranding(prev => !prev)
          }} className="flex items-center justify-between gap-x-3 cursor-pointer border-y-2 py-4 px-2">
            <h3 className="text-md text-slate-600 select-none">Add Brand</h3>
          </div>

          {showBranding ? (
            <div className="flex flex-col py-2 px-2 gap-y-3 relative">
              <h2>Upload your Logo</h2>
              <h3 className="text-sm">
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
                  {!preview ? "Add Image" : "Change Image"}
                </button>
              </div>
              {/* <p>preview: {preview}</p> */}

              {preview ? (
                <div className="flex gap-x-[-5px]">
                  <img
                    src={preview}
                    alt=""
                    width={50}
                    height={30}
                    className="rounded-full aspect-square object-scale-down border-gray-400 border-2"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setPreview(null);
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
          ) : (
            ""
          )}
        </div>
        {/* END BRAND */}
      </div>
    </>
  );

  function handleSelected(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.currentTarget.files);
  }

  function checkTool() {}
};

export default Toolbar;
