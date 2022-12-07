import React from "react"
import FacebookIcon from "@mui/icons-material/Facebook"
import "./Contact.scss"
const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <div className="text">
          <h3>be in touch with us</h3>
        </div>
        <div className="email">
          <input type="text" placeholder="Enter your e-mail" />
          <button className="join-us">JOIN US</button>
        </div>
        <div className="icons">
          <div className="icon">
            <FacebookIcon />
          </div>
          <div className="icon">
            <FacebookIcon />
          </div>
          <div className="icon">
            <FacebookIcon />
          </div>
          <div className="icon">
            <FacebookIcon />
          </div>
          <div className="icon">
            <FacebookIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
