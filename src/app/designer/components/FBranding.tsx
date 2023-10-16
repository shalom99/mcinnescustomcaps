'use client'
import { useBrandingStore } from '@/libs/store'
import { FC } from 'react'
import { CgArrowsExpandLeft } from 'react-icons/cg'
import { FiRotateCw } from 'react-icons/fi'
type FBrandingProps = {
  
}


const FBranding: FC<FBrandingProps> = ({}) => {
    const { brandings } = useBrandingStore()
  return (
    
         <div
         id="fPanelContainer"
         className="z-30 border-2 border-dashed border-red-700 select-none overflow-hidden"
         style={{
           display: brandings[0].show ? "block" : "none",
           position: "absolute",
           top: "13.3%",
           bottom: "200px",
           left: "15.5%",
           right: "14.3%",
           borderRadius: "170px 170px 0px 0px",
         }}
         draggable={false}
       >
         <div
           id="fPanelElement"
           className="select-none border-2 border-blue-700"
           draggable={false}
           style={{
             position: "absolute",
            //  top: fLogo.top,
            //  left: fLogo.left,
            //  width: fLogo.width + "px",
            //  height: fLogo.height + "px",
           }}
         >
           <img
             id="fPanelImg"
             src={ brandings[0].imageURL ? brandings[0].imageURL : ""}
             alt=""
             className="absolute object-cover border select-none z-50"
             style={{
               width: '100%',
               height: '100%',
             }}
             draggable={false}
           />
           <CgArrowsExpandLeft
             id="resizer"
             className="absolute bottom-[-30px] right-[-20px] select-none cursor-se-resize"
             size={20}
       
           />
           <FiRotateCw
           id="rotater"
             size={20}
             className="absolute bottom-[-30px] left-0 right-0 mx-auto cursor-crosshair"
           />
         </div>
       
       </div>
)
}

export default FBranding