'use client'

import { Dispatch, FC, SetStateAction } from "react";


type PreviewItemProps = {
  setShowItemPreview: any
  previewItem: {
    front: string;
    back: string;
    left: string;
    right: string;
    bottom: string;
};
  setPreviewItem: Dispatch<SetStateAction<{
    front: string;
    back: string;
    left: string;
    right: string;
    bottom: string;
}>>
};

const PreviewItem: FC<PreviewItemProps> = ({setShowItemPreview, previewItem, setPreviewItem}) => {


  
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white flex flex-col justify-center items-center px-10 py-5">
          <p>Preview Cap Sides</p>
          <div className="grid grid-cols-2">
            <img src={previewItem.front} width={200} height={200} alt="" />
            <img src={previewItem.back} width={200} height={200} alt="" />
            <img src={previewItem.left} width={200} height={200} alt="" />
            <img src={previewItem.right} width={200} height={200} alt="" />
          </div>
          <div className="flex gap-x-10 mt-5">
       
            <button onClick={handleClose} className="bg-green-700 px-5 py-1 text-white rounded-full">Close</button>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black z-40 opacity-70"></div>
    </>
  );


  function handleClose(){
    setShowItemPreview(false);
    setPreviewItem({
      front: '',
      back: '',
      left: '',
      right:'',
      bottom:''
    });
  }


};

export default PreviewItem;
