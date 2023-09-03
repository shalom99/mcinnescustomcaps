'use client'
import { FC, useRef, useEffect } from 'react'

type FrontCanvasProps = {
  
}

const FrontCanvas: FC<FrontCanvasProps> = ({}) => {
    const canvasRef = useRef(null)

    
    
    //   useEffect(() => {
    //     const canvas = canvasRef.current;
    //     // const image1 = document.getElementById("frontBase")
    //     // const image2 = document.getElementById("front1")
    //     const ctx = canvas.getContext("2d");
    
        
    //     let img = new Image
    //     img.src = URL.createObjectUrle()
    //     img.onload = function*( 
    //         ctx.drawImage(img, 20,20);

    //     )

    
    
   
        
     
    //   }, []);

  return (
    <canvas ref={canvasRef} 
    width={600}
    height={600}
   className="border absolute inset-0 border-black rounded-md z-20"
></canvas>
)
}

export default FrontCanvas