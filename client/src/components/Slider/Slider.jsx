import React, { useState } from "react"
import EastIcon from "@mui/icons-material/East"
import WestIcon from "@mui/icons-material/West"
import "./Slider.scss"
const Slider = () => {
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ]

  const [images, setImages] = useState(0)

  const clickLeft = () => {
    setImages(images === 0 ? data.length - 1 : images - 1)
  }
  const clickRight = () => {
    setImages(images === data.length - 1 ? 0 : images + 1)
  }
  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${images * 100}vw)` }}>
        <img className="imgs" src={data[0]} alt="" />
        <img className="imgs" src={data[1]} alt="" />
        <img className="imgs" src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={clickLeft}>
          <WestIcon />
        </div>
        <div className="icon" onClick={clickRight}>
          <EastIcon />
        </div>
      </div>
    </div>
  )
}

export default Slider
