import React from 'react'
import '../CSS/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
const Subtotal = ({basket}) => {
    const getBasketTotal = ()=>{

    }
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal (0 Items):
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
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />

            <button>Proceed to Checkout</button>
                    </div>
                )
                }

                export default Subtotal
