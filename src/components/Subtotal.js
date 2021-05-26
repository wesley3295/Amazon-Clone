import React from 'react'
import '../CSS/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from "../StateProvider"
import { useHistory } from 'react-router-dom'

const Subtotal = () => {
    const history = useHistory()
    const [{ basket, value }, dispatch] = useStateValue()
    // const getBasketTotal = (basket)=>{

    // }
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} Items):
                    <strong>
                                {`${value}`}
                            </strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                        This Order Contains A Gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={value}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={()=>history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
