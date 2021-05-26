import React from 'react'
import '../CSS/Payment.css'
import { useStateValue } from "../StateProvider"
const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue()
    return (
        <div className="payment">
            <div className="payment__container">
                {/* Payment Section - delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* Payment Section - Review Items */}
                <div className="payment__section">

                </div>

                {/* Payment Section - Payment Method */}
                <div className="payment__section">

                </div>
            </div>
        </div>
    )
}

export default Payment
