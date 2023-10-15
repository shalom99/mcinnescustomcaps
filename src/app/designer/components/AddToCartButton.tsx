"use client";

import {
  useBrandingStore,
  useCapItemStore,
  useCartStore,
  useLabelStore,
  useLoaderStore,
} from "@/libs/store";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { ClipLoader } from "react-spinners";

import * as htmlToImage from "html-to-image";
type AddToCartButtonProps = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  type: number;
};

const AddToCartButton: FC<AddToCartButtonProps> = ({
  id,
  name,
  quantity,
  price,
  type,
}) => {
  const { capItems, setResetCap } = useCapItemStore();
  const { labels, setResetLabels } = useLabelStore();
  const { brandings, setResetBrandings } = useBrandingStore();
  const { addToCart, setUpdateViews } = useCartStore();
  const router = useRouter();
  const { isLoading, setIsLoading } = useLoaderStore();
  const configuration = {
    capParts: capItems,
    labels,
    brandings,
  };

  const addToCartHandler = () => {
    setIsLoading(true);
    generateBase64();
  };

  return (
    <>
      <button
        id="testy"
        onClick={addToCartHandler}
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

    </>
  );

  function generateBase64() {
    let views = {
      front: "",
      back: "",
      right: "",
      left: "",
    };

    htmlToImage
      .toPng(document.getElementById("FrontV") as HTMLElement)
      .then(function (dataUrl) {
        // console.log(dataUrl)
        views["front"] = dataUrl;
      });

    htmlToImage
      .toPng(document.getElementById("BackV") as HTMLElement)
      .then(function (dataUrl) {
        views["back"] = dataUrl;

        //  const link = document.createElement("a");
        // link.download = "my-image-name.png";
        // link.href = dataUrl;
        // link.click();
      });

    htmlToImage
      .toPng(document.getElementById("RightV") as HTMLElement)
      .then(function (dataUrl) {
        views["right"] = dataUrl;

        //  const link = document.createElement("a");
        // link.download = "my-image-name.png";
        // link.href = dataUrl;
        // link.click();
      });

    htmlToImage
      .toPng(document.getElementById("LeftV") as HTMLElement)
      .then(function (dataUrl) {
        views["left"] = dataUrl;

        //  const link = document.createElement("a");
        // link.download = "my-image-name.png";
        // link.href = dataUrl;
        // link.click();

        addToCart({
          name,
          quantity,
          mockQuantity: quantity,
          price,
          subtotal: quantity * price,
          type,
          configuration,
          views: {
            front: views.front,
            back: views.back,
            left: views.left,
            right: views.right,
            bottom: "",
          },
        });

        setResetCap();
        setResetLabels();
        setResetBrandings();
        setIsLoading(false);
        router.push("/cart");
      });
  }
};

export default AddToCartButton;
