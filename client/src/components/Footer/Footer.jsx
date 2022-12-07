import React from "react"
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem debitis recusandae illum dolorem voluptas facilis
            inventore ad nisi nihil cum. Debitis suscipit accusamus odit. Iusto
            totam nesciunt sapiente sit tempora!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem debitis recusandae illum dolorem voluptas facilis
            inventore ad nisi nihil cum. Debitis suscipit accusamus odit. Iusto
            totam nesciunt sapiente sit tempora!
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo">JYSTORE</span>
          <span className="copyright">
            © Copyright 2023. All Right Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

// const Footer = () => { .
//   return (
//     <div className="footer">
//       <div className="upper">
//         <div className="categories">
//           <span className="header">Categories</span>
//           <span>Women</span>
//           <span>Men</span>
//           <span>Shoes</span>
//           <span>Accessories</span>
//           <span>New Arrivals</span>
//         </div>
//         <div className="categories">
//           <span className="header">Links</span>

//           <span>FAQ</span>
//           <span>Pages</span>
//           <span>Stores</span>
//           <span>Compare</span>
//           <span>Cookies</span>
//         </div>
//         <div className="categories">
//           <span className="header">About</span>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Necessitatibus vel fugit voluptatibus dolores, eius ex et
//             asperiores, repellendus odio qui omnis ullam. Quis non nemo beatae
//             ab, sed dolores reprehenderit!
//           </p>
//         </div>
//         <div className="categories">
//           <span className="header">Contact</span>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Necessitatibus vel fugit voluptatibus dolores, eius ex et
//             asperiores, repellendus odio qui omnis ullam. Quis non nemo beatae
//             ab, sed dolores reprehenderit!
//           </p>
//         </div>
//       </div>
//       <div className="image">
//         <div className="left">
//           <span className="jy">JYSTORE</span>
//           <span className="copyright">
//             @ Copyright 2023. All Rights Reserved
//           </span>
//         </div>
//         <div className="right">
//           <img src="/img/stripe.png" alt="" />
//         </div>
//       </div>
//     </div>
//   )
// }

export default Footer
