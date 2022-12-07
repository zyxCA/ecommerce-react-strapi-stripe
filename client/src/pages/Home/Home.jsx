import React from "react"
import Slider from "../../components/Slider/Slider"
import Card from "../../components/Card/Card"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import Categories from "../../components/Categories/Categories"
import Contact from "../../components/Contact/Contact"
import { Link } from "react-router-dom"
import List from "../../components/List/List"
import "./Home.scss"
const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  )
}

export default Home
