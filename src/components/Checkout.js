import React from 'react'
import '../CSS/Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from "../StateProvider"
import CheckoutProduct from './CheckoutProduct'
const Checkout = () => {
    const [{ basket,value }, dispatch] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1" alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
               </h2>
               {basket?.map((p,i)=>{
                   return (
                       <CheckoutProduct id={p.id} title={p.title}  image={p.image} price={p.price} rating={p.rating}/>
                   )
               })}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
