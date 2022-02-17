import React, { Fragment, useState } from 'react'
import imgOn from './image/on.png'
import imgOff from './image/off.png'


const Practice = () => {

    const [iniImg ,FinalImg]=useState(imgOff)
    const [initext , fintext] = useState("On Img")


    const ChangeImg =()=>{
        iniImg === imgOff ? FinalImg(imgOn):FinalImg(imgOff)
        initext === "On Img"?fintext("Off Img"):fintext("On Img")
    }
  return (
    <>
     <img src={iniImg} alt="" />
     <button onClick={ChangeImg}>{initext}</button>
    </>
  )
}


export default Practice