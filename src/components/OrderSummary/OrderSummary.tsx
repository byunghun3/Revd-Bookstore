import React from "react"
import classes from "./ShippingInfo.module.css"


interface OrderSummaryProps {

}

export const OrderSummary = (props: OrderSummaryProps) => {
    return (
        <div>
            Order Summary
            Items: $
            Shipping & handling: $
            Estimated tax: $
            Total: $
        </div>
    )
}