import React, { useState, useEffect } from "react"
import "./Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import BalanceIcon from "@mui/icons-material/Balance"
import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/cartReducer"

const Product = () => {
  const id = useParams().id
  const [selectedImg, setSelectedImg] = useState("img")
  const [quantity, setQuantity] = useState(0)

  const dispatch = useDispatch()

  const [maxQuantity, setMaxQuantity] = useState(false)
  const { data, loading, err } = useFetch(`/products/${id}?populate=*`)
  console.log(data)
  const price = data?.attributes?.price
  const title = data?.attributes?.title
  const desc = data?.attributes?.desc
  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg].data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{title}</h1>
            <span className="price">${price}</span>
            <p>{desc}</p>
            <div className="quantity">
              <button onClick={() => setQuantity((a) => (a === 0 ? a : a - 1))}>
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((a) => (a === 9 ? a : a + 1))}>
                +
              </button>
              {quantity === 9 ? (
                <span style={{ color: "red" }}>Sorry, the maximum is 9</span>
              ) : (
                ""
              )}
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }>
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon />
                ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon />
                ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Product
