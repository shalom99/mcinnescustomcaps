"use client";
import cn from "@/libs/cn";
import { useCapItemStore, useSideStore } from "@/libs/store";
import { FC, useEffect } from "react";
import { ColorOptions } from "@/libs/config/constant";
import { motion } from "framer-motion";

type ColorPickerProps = {
  title: string;
  capItemId: any;
};

const ColorPicker: FC<ColorPickerProps> = ({ title, capItemId }) => {
  const { capItems, setCapItemColor, setShowPicker } = useCapItemStore();
  const { setSelectedSide } = useSideStore();

  function handleChangeColor(id: number, color: string, colorId: number, filter: string ) {
    setCapItemColor(id, color, colorId, filter);
    setShowPicker(id);
  }

  useEffect(() => {
    if (capItems[capItemId].id === 6) {
      setSelectedSide(1);
    }
  }, [capItems[capItemId].hexcode]);

  return (
    <motion.div
      initial={{
        height: 0,
        opacity: 0,
      }}
      animate={{
        height: "auto",
        opacity: 1,
      }}
      exit={{
        height: 0,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
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
    </motion.div>
  );
};

export default ColorPicker;
