import React from 'react'
import '../CSS/CheckoutProduct.css'
import { useStateValue } from "../StateProvider"

const CheckoutProduct = ({ id, title, image, price, rating }) => {

    const [{ basket,value }, dispatch] = useStateValue()

    const removeFromBasket = ()=>{
        dispatch({ 
            type:'REMOVE_FROM_BASKET',
            id:id,
            price:price
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image" />
        
        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">
               {title} 
            </p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {Array(rating)
                .fill()
                .map((_,i)=>(
                    <p>🌟</p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove From Basket</button>
        </div>
        
        </div>
    )
}

export default CheckoutProduct
