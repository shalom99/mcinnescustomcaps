"use client";
import { useLoaderStore } from "@/libs/store";
import { FC, useEffect } from "react";
import { ClipLoader } from "react-spinners";

type LoadingProps = {};

const Loading: FC<LoadingProps> = ({}) => {
  const { isLoading } = useLoaderStore();

  useEffect(() => {
    if (isLoading) {
      // Prevent body scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable body scrolling
      document.body.style.overflow = "auto";
    }

    // Clean up effect on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  if (isLoading) {
    return (
      <>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <ClipLoader
            color="white"
            loading={isLoading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        <div className="fixed inset-0 bg-black opacity-50"></div>
      </>
    );
  } else {
    return null;
  }
};

export default Loading;
