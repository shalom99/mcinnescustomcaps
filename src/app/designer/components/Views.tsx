"use client";
import { useSideStore } from "@/libs/store";
import { FC } from "react";
import FrontView from "./FrontView";
import BackView from "./BackView";
import LeftView from "./LeftView";
import RightView from "./RightView";

type ViewsProps = {};

const Views: FC<ViewsProps> = ({}) => {
  const { side } = useSideStore();
  // switch (side) {
  //   case 0:
  //     return <FrontView />;
  //   case 1:
  //     return <BackView />;
  //   case 2:
  //     return <LeftView />;
  //   case 3:
  //     return <RightView />;
  //   default:
  //     return  <FrontView />;
  // }

  return (
    <div className="w-full h-full">
      <FrontView />
      <BackView />
      <LeftView />
      <RightView />
    </div>
  )
};

export default Views;
