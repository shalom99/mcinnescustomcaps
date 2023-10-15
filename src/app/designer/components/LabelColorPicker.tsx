"use client";
import cn from "@/libs/cn";
import { useLabelStore, useSideStore } from "@/libs/store";
import { FC, useEffect } from "react";

type ColorPickerProps = {
  title: string;
  label: any;
};

const LabelColorPicker: FC<ColorPickerProps> = ({ title, label }) => {
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

  function handleChangeColor(id: number, color: string, colorFilter: string) {
    setLabelBackgroundColor(id, color, colorFilter);
  }

  return (
    <div className="text-black w-full flex flex-col gap-y-5 py-5 select-none">
      <h2 className="font-bold text-sm px-2">{title}</h2>

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
            <h2 className="pl-2 text-sm mt-3">Background Color</h2>
          </div>
          <div className="w-full flex gap-x-1 justify-evenly">
            <div className="flex flex-col items-center text-xs text-gray-600">
              <button
                onClick={() =>
                  handleChangeColor(
                    label.id,
                    "#FF6E00",
                    "invert(49%) sepia(23%) saturate(7488%) hue-rotate(0deg) brightness(102%) contrast(104%)"
                  )
                }
                className={cn("w-[40px] h-[40px]  rounded-full")}
                style={{ backgroundColor: "#FF6E00" }}
              />
              <label htmlFor="">Color #1</label>
            </div>
            <div className="flex flex-col items-center text-xs text-gray-600">
              <button
                onClick={() =>
                  handleChangeColor(
                    label.id,
                    "#FF9C00",
                    "invert(83%) sepia(25%) saturate(4801%) hue-rotate(358deg) brightness(400%) contrast(108%)"
                  )
                }
                className={cn("w-[40px] h-[40px]  rounded-full")}
                style={{ backgroundColor: "#FF9C00" }}
              />
              <label htmlFor="">Color #2</label>
            </div>
            <div className="flex flex-col items-center text-xs text-gray-600">
              <button
                onClick={() =>
                  handleChangeColor(
                    label.id,
                    "#64B592",
                    "invert(84%) sepia(9%) saturate(1586%) hue-rotate(102deg) brightness(400%) contrast(87%)"
                  )
                }
                className={cn("w-[40px] h-[40px]  rounded-full")}
                style={{ backgroundColor: "#64B592" }}
              />
              <label htmlFor="">Color #3</label>
            </div>
            <div className="flex flex-col items-center text-xs text-gray-600">
              <button
                onClick={() =>
                  handleChangeColor(
                    label.id,
                    "#00AE36",
                    "invert(60%) sepia(88%) saturate(2170%) hue-rotate(115deg) brightness(96%) contrast(101%)"
                  )
                }
                className={cn("w-[40px] h-[40px]  rounded-full")}
                style={{ backgroundColor: "#00AE36" }}
              />
              <label htmlFor="">Color #4</label>
            </div>
          </div>

          <div className="flex gap-x-1 justify-evenly">
            <div className="flex flex-col items-center text-xs text-gray-600">
              <button
                onClick={() =>
                  handleChangeColor(
                    label.id,
                    "#E96537",
                    "invert(20%) sepia(70%) saturate(5887%) hue-rotate(335deg) brightness(92%) contrast(99%)"
                  )
                }
                className={cn("w-[40px] h-[40px]  rounded-full")}
                style={{ backgroundColor: "#E96537" }}
              />
              <label htmlFor="">Color #5</label>
            </div>
            <div className="flex flex-col items-center text-xs text-gray-600">
              <button
                onClick={() =>
                  handleChangeColor(
                    label.id,
                    "#A75D6F",
                    "invert(60%) sepia(14%) saturate(1188%) hue-rotate(295deg) brightness(105%) contrast(103%"
                  )
                }
                className={cn("w-[40px] h-[40px]  rounded-full")}
                style={{ backgroundColor: "#A75D6F" }}
              />
              <label htmlFor="">Color #6</label>
            </div>
            <div className="flex flex-col items-center text-xs text-gray-600">
              <button
                onClick={() =>
                  handleChangeColor(
                    label.id,
                    "#FEA0D1",
                    "invert(12%) sepia(91%) saturate(6465%) hue-rotate(280deg) brightness(92%) contrast(118%)"
                  )
                }
                className={cn("w-[40px] h-[40px]  rounded-full")}
                style={{ backgroundColor: "#FEA0D1" }}
              />
              <label htmlFor="">Color #7</label>
            </div>
            <div className="flex flex-col items-center text-xs text-gray-600">
              <button
                onClick={() =>
                  handleChangeColor(
                    label.id,
                    "#8BDE7C",
                    "invert(21%) sepia(22%) saturate(800%) hue-rotate(63deg) brightness(98%) contrast(89%)"
                  )
                }
                className={cn("w-[40px] h-[40px]  rounded-full")}
                style={{ backgroundColor: "#8BDE7C" }}
              />
              <label htmlFor="">Color #8</label>
            </div>
          </div>

          <div className="flex gap-x-1 justify-evenly">
            <div className="flex flex-col items-center text-xs text-gray-600">
              <button
                onClick={() =>
                  handleChangeColor(
                    label.id,
                    "#1E1312",
                    "invert(91%) sepia(5%) saturate(2166%) hue-rotate(319deg) brightness(110%) contrast(104%)"
                  )
                }
                className={cn("w-[40px] h-[40px]  rounded-full")}
                style={{ backgroundColor: "#1E1312" }}
              />
              <label htmlFor="">Color #9</label>
            </div>
            <div className="flex flex-col items-center text-xs text-gray-600">
              <button
                onClick={() =>
                  handleChangeColor(
                    label.id,
                    "#FF4474",
                    "invert(59%) sepia(27%) saturate(5404%) hue-rotate(321deg) brightness(104%) contrast(102%)"
                  )
                }
                className={cn("w-[40px] h-[40px]  rounded-full")}
                style={{ backgroundColor: "#FF4474" }}
              />
              <label htmlFor="">Color #10</label>
            </div>
            <div className="flex flex-col items-center text-xs text-gray-600">
              <button
                onClick={() =>
                  handleChangeColor(
                    label.id,
                    "#FFC825",
                    "invert(20%) sepia(73%) saturate(1745%) hue-rotate(335deg) brightness(108%) contrast(108%)"
                  )
                }
                className={cn("w-[40px] h-[40px]  rounded-full")}
                style={{ backgroundColor: "#FFC825" }}
              />
              <label htmlFor="">Color #11</label>
            </div>
            <div className="flex flex-col items-center text-xs text-gray-600">
              <button
                onClick={() =>
                  handleChangeColor(
                    label.id,
                    "#F79EF7",
                    "invert(9%) sepia(24%) saturate(5148%) hue-rotate(216deg) brightness(99%) contrast(96%)"
                  )
                }
                className={cn("w-[40px] h-[40px]  rounded-full")}
                style={{ backgroundColor: "#F79EF7" }}
              />
              <label htmlFor="">Color #12</label>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default LabelColorPicker;
