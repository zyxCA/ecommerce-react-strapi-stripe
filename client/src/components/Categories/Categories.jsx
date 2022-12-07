import React from "react"
import "./Categories.scss"
import { Link } from "react-router-dom"
const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKeq4ZItgtCOF1Wb8cGhIUCWWLY2pt3nmHYQBfQWt2HCmEFevnaviOcGX9h_ojsSb3zNJkNdduX4rsZSifz_2swqN44QjIs3BGEJS3qHVSeqyq21qjehYjCA&usqp=CAc"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKeq4ZItgtCOF1Wb8cGhIUCWWLY2pt3nmHYQBfQWt2HCmEFevnaviOcGX9h_ojsSb3zNJkNdduX4rsZSifz_2swqN44QjIs3BGEJS3qHVSeqyq21qjehYjCA&usqp=CAc"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKeq4ZItgtCOF1Wb8cGhIUCWWLY2pt3nmHYQBfQWt2HCmEFevnaviOcGX9h_ojsSb3zNJkNdduX4rsZSifz_2swqN44QjIs3BGEJS3qHVSeqyq21qjehYjCA&usqp=CAc"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              New season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKeq4ZItgtCOF1Wb8cGhIUCWWLY2pt3nmHYQBfQWt2HCmEFevnaviOcGX9h_ojsSb3zNJkNdduX4rsZSifz_2swqN44QjIs3BGEJS3qHVSeqyq21qjehYjCA&usqp=CAc"
                alt=""
              />
              <button>
                <Link className="link" to="/products/2">
                  men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKeq4ZItgtCOF1Wb8cGhIUCWWLY2pt3nmHYQBfQWt2HCmEFevnaviOcGX9h_ojsSb3zNJkNdduX4rsZSifz_2swqN44QjIs3BGEJS3qHVSeqyq21qjehYjCA&usqp=CAc"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKeq4ZItgtCOF1Wb8cGhIUCWWLY2pt3nmHYQBfQWt2HCmEFevnaviOcGX9h_ojsSb3zNJkNdduX4rsZSifz_2swqN44QjIs3BGEJS3qHVSeqyq21qjehYjCA&usqp=CAc"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories
