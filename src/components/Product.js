import React from 'react'
import '../CSS/Product.css'
import { useStateValue } from "../StateProvider"
const Product = ({ id, title, image, price, rating }) => {
    const [{ basket,value }, dispatch] = useStateValue()
    console.log("Basket:",basket)
    console.log("Value:",value)
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p> {title}</p>
                <p className="product__price">
                    <small>$</small>
                    <small>{price}</small>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => {
                        return <p>🌟</p>
                    })}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket} className="product__button">Add to Basket</button>
        </div>
    )
}

export default Product
