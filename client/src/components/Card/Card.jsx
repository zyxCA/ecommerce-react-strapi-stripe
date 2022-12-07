import React from "react"
import "./Card.scss"
import { Link } from "react-router-dom"

const Card = ({ item }) => {
  return (
    <Link
      to={`/product/${item.id}`}
      style={{
        textDecoration: "none",
        color: "black",
        textTransform: "capitalize",
      }}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            className="mainImg"
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img?.data?.attributes?.url
            }
            alt=""
          />
          <img
            className="secondImg"
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img2?.data?.attributes?.url
            }
            alt=""
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item?.oldPrice || item?.attributes.price + 20}</h3>
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card
