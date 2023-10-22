"use client";
import cn from "@/libs/cn";
import { ColorOptions } from "@/libs/config/constant";
import { useLabelStore, useSideStore } from "@/libs/store";
import { FC, useEffect } from "react";

type ColorPickerProps = {

  label: any;
};

const LabelColorPicker: FC<ColorPickerProps> = ({ label }) => {
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

  function handleChangeColor(id: number, color: string, colorId: number) {
    setLabelBackgroundColor(id, color, colorId);
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
                  colorOption.id
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

export default LabelColorPicker;
