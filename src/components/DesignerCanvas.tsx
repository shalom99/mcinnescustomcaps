'use client'
import { FC, useState } from 'react'
import Toolbar from './Toolbar'
import DesignerContainer from './DesignerContainer'

type DesignerCanvasProps = {
  
}

const DesignerCanvas: FC<DesignerCanvasProps> = ({}) => {
    
    const [selectedColor1, setSelectedColor1] = useState({code: '', filter: ''})
    const [selectedColor3, setSelectedColor3] = useState({code: '', filter: ''})
    const [selectedColor4, setSelectedColor4] = useState({code: '', filter: ''})
    const [selectedColor5, setSelectedColor5] = useState({code: '', filter: ''})
    const [selectedColor6, setSelectedColor6] = useState({code: '', filter: ''})
    const [selectedColor2, setSelectedColor2] = useState({code: '', filter: ''})
    const [frontFlag, setFrontFlag] = useState({show: false, code: '', filter: ''})
    const [leftLabel, setLeftLabel] = useState({show: false, code: '', filter: ''})
    const [rightLabel, setRightLabel] = useState({show: false, code: '', filter: ''})
    const [side, setSide] = useState(0);

  return (

    <div id="mainDesigner" className=' flex h-full'>


    <div id="middle" className='grow bg-gray-300 flex items-center justify-center '>
   <DesignerContainer 
     selectedColor1={selectedColor1}
     selectedColor2={selectedColor2}
     selectedColor3={selectedColor3}
     selectedColor4={selectedColor4}
     selectedColor5={selectedColor5}   
     selectedColor6={selectedColor6}
     frontFlag={frontFlag}
     leftLabel={leftLabel}
     rightLabel={rightLabel}
     side={side}
     setSide={setSide}
        />
    </div>

    
    <div id="toolbar" className='w-[270px] bg-gray-300 h-full py-2 flex flex-col'>
 
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
        frontFlag={frontFlag}
        setFrontFlag={setFrontFlag}
        leftLabel={leftLabel}
        setLeftLabel={setLeftLabel}
        side={side}
        setSide={setSide}
        />
    </div>

  </div>
)
}

export default DesignerCanvas