import React, { useState } from "react"
import SearchIcon from "@mui/icons-material/Search"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import { Link } from "react-router-dom"
import "./Navbar.scss"
import Cart from "../Cart/Cart"
import { useSelector } from "react-redux"
const Navbar = () => {
  const products = useSelector((state) => state.cart.products)
  const [openCart, setOpenCart] = useState(false)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="/" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            JYstore
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderIcon />
            <div className="cartIcon" onClick={() => setOpenCart(!openCart)}>
              <ShoppingCartIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {openCart && <Cart />}
    </div>
  )
}

export default Navbar
