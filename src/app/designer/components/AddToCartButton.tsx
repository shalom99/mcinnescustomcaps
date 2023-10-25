"use client";

import {
  useBrandingStore,
  useCapItemStore,
  useCartStore,
  useLabelStore,
  useLoaderStore,
} from "@/libs/store";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { ClipLoader } from "react-spinners";

import * as htmlToImage from "html-to-image";
type AddToCartButtonProps = {};

interface requiredItemType {
  id: number,
  name: string,
  hexcode: string,
  selectedColorFilter: string,
  colorId: number,
  showColorPicker: boolean,
  hasBranding: boolean
}

const AddToCartButton: FC<AddToCartButtonProps> = ({}) => {
  const { capItems, setResetCap } = useCapItemStore();
  const { labels, setResetLabels } = useLabelStore();
  const { brandings, setResetBrandings } = useBrandingStore();
  const { addToCart, setUpdateViews } = useCartStore();
  const router = useRouter();
  const { isLoading, setIsLoading } = useLoaderStore();
  const [ requiredItems, setRequiredItems] = useState<requiredItemType[] | []>([])

  const configuration = {
    capParts: capItems,
    labels,
    brandings,
  };

  let views = {
    front: "",
    back: "",
    right: "",
    left: "",
  };




  function validateCapItem(){
    const emptyHexcodeItems = capItems.filter(item => item.hexcode === '');
    
    setIsLoading(true);

    if(emptyHexcodeItems.length === 0){
      generateFront();
      
    }else{
      setRequiredItems(emptyHexcodeItems)
      setIsLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={validateCapItem}
        className="bg-activeOrange rounded-full w-[170px] py-2 text-white flex items-center justify-center select-none"
      >
        {isLoading ? (
          <ClipLoader
            color="white"
            loading={isLoading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          "Add to Cart"
        )}
      </button>
      {requiredItems.length === 0 ? "" : (
        <>
        <p className="text-red-700 font-bold w-full text-sm my-2">Please complete the following required cap parts: </p>
        <ul className="w-full text-sm text-red-700">
        { requiredItems.map(item => 
          <li key={item.id}> -{item.name}</li>
          )} 
        
        </ul>
       </>
      )}
  

    </>
  );

  function generateFront() {
    htmlToImage
      .toPng(document.getElementById("FrontV") as HTMLElement)
      .then(function (dataUrlFront) {
        // const link = document.createElement("a");
        // link.download = "my-image-name.png";
        // link.href = dataUrlFront;
        // link.click();
        // console.log(dataUrlFront)
        views["front"] = dataUrlFront;
        generateBack();
      });
  }

  function generateBack() {
    htmlToImage
      .toPng(document.getElementById("BackV") as HTMLElement)
      .then(function (dataUrlBack) {
        views["back"] = dataUrlBack;
        generateRight();
      });
  }

  function generateRight() {
    htmlToImage
      .toPng(document.getElementById("RightV") as HTMLElement)
      .then(function (dataUrlRight) {
        views["right"] = dataUrlRight;
        generateLeft();
      });
  }

  function generateLeft() {
    htmlToImage
      .toPng(document.getElementById("LeftV") as HTMLElement)
      .then(function (dataUrlLeft) {
        views["left"] = dataUrlLeft;
        generateBase64();
      });
  }

  function generateBase64() {
    addToCart({
      name: "Custom Hat Design",
      type: 0,
      configuration,
      views: {
        front: views.front,
        back: views.back,
        left: views.left,
        right: views.right,
        bottom: "",
      },
    });

    setRequiredItems([])

    setResetCap();
    setResetLabels();
    setResetBrandings();
    setIsLoading(false);
    views = {
      front: "",
      back: "",
      right: "",
      left: "",
    };
  
    router.push("/cart");
  }

};

export default AddToCartButton;
