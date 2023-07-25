import React from "react";

const Product = ({ image, title, category, review, price, discountPrice }) => {
  return (
    <div className="single-product">
      <div className="product-image">
        <img src={image} alt="#"></img>
      </div>
      <div className="product-info">
        <span className="category">{category}</span>
        <h4 className="title">
          <a href="product-grids.html">{title}</a>
        </h4>
        <ul className="review">
          {review.map((item, index) => (
            <li key={index}><i className="lni lni-star-filled"></i></li>
          ))}
          <li><span>{review.length} Review(s)</span></li>
        </ul>
        <div className="price">
          <span>{price}</span>
          {discountPrice ? (
            <span className="discount-price">${discountPrice}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
};


export default Product;
