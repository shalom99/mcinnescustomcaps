'use client'
import { FC, useState } from 'react'
import Toolbar from './Toolbar'
import DesignerContainer from './DesignerContainer'

type DesignerCanvasProps = {
  
}

const DesignerCanvas: FC<DesignerCanvasProps> = ({}) => {

    const [selectedColor1, setSelectedColor1] = useState('#ffffff')
    const [selectedColor2, setSelectedColor2] = useState('#ffffff')
    const [selectedColor3, setSelectedColor3] = useState('#ffffff')
    const [selectedColor4, setSelectedColor4] = useState('#ffffff')
    const [selectedColor5, setSelectedColor5] = useState('#ffffff')
    const [selectedColor6, setSelectedColor6] = useState('#ffffff')

  return (

    <div id="mainDesigner" className='flex h-full'>

    <div id="toolbar" className='w-[250px] bg-white h-full px-2 py-2 flex flex-col gap-y-5'>
    <Toolbar      
        selectedColor1={selectedColor1}
        selectedColor2={selectedColor2}
        selectedColor3={selectedColor3}
        selectedColor4={selectedColor4}
        selectedColor5={selectedColor5}   
        selectedColor6={selectedColor6}
        setSelectedColor1={setSelectedColor1}
        setSelectedColor2={setSelectedColor2}
        setSelectedColor3={setSelectedColor3}
        setSelectedColor4={setSelectedColor4}
        setSelectedColor5={setSelectedColor5}
        setSelectedColor6={setSelectedColor6}
        />
    </div>

    <div id="middle" className='grow bg-gray-600 border-x-2 flex items-center justify-center '>
   <DesignerContainer 
     selectedColor1={selectedColor1}
     selectedColor2={selectedColor2}
     selectedColor3={selectedColor3}
     selectedColor4={selectedColor4}
     selectedColor5={selectedColor5}   
     selectedColor6={selectedColor6}
        />
    </div>
    <div id="right" className='w-[200px] bg-white'>
      
      <h2 className='text-center font-bold h-full'>Order Information</h2>
      
    </div>
  </div>
)
}

export default DesignerCanvas