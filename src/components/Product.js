import React from 'react'
import '../CSS/Product.css'
const Product = ({id, title, image,price,rating}) => {
    return (
        <div className="product">
            <div className="product__info">
                <p> {title}</p>
                <p className="product__price">
                    <small>$</small>
                    <small>{price}</small>
                </p>
                <div className="product__rating">
                {Array(rating).fill().map((_,i)=>{
                    return <p>🌟</p>
                })}
                </div>
            </div>
                <img src={image} alt=""/>
                <button className="product__button">Add to Basket</button>
        </div>
    )
}

export default Product
