import React from "react"
import { useEffect } from "react"
import Card from "../Card/Card"
import "./FeaturedProducts.scss"
import { useState } from "react"
import useFetch from "../../hooks/useFetch"

const FeaturedProducts = ({ type }) => {
  const { data, loading, err } = useFetch(
    `/products?populate=*&filters[type][$eq]=${type}`
  )
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae in
          saepe blanditiis error rem architecto corporis nam sint? Accusamus
          ipsam nemo qui odio asperiores minima vel? Corporis neque quaerat
          culpa.
        </p>
      </div>
      <div className="bottom">
        {err
          ? "Something Wrong, Junye"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  )
}

export default FeaturedProducts
