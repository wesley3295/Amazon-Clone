import React from 'react'
import '../CSS/Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from "../StateProvider"
import CheckoutProduct from './CheckoutProduct'
import FlipMove from 'react-flip-move'
const Checkout = () => {
    const [{ basket, user }, dispatch] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1" alt="" className="checkout__ad" />
                <div>
                    <h3>{`Hello,${user?.email}`}</h3>
                    <h2 className="checkout__title">
                        Your Shopping Basket
               </h2>
                    <FlipMove >
                        {basket?.map((p, i) => (
                            <li style={{ listStyleType: "none" }}><CheckoutProduct id={p.id} title={p.title} image={p.image} price={p.price} rating={p.rating} /></li>
                        ))}
                    </FlipMove>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
