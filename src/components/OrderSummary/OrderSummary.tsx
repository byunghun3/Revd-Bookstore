import React, { FC } from "react"
import classes from "./ShippingInfo.module.css"


interface OrderSummaryProps {
    item: number
    shipping: number | string
    tax: number | string
    total: number
}

export const OrderSummary: FC<OrderSummaryProps> = ({ item, shipping, tax, total }) => {
    return (
        <div>
            Order Summary
            <div>Items: ${item}</div>
            <div>Shipping & handling: ${shipping}</div>
            <div>Estimated tax: ${tax}</div>
            <div>Total: ${total}</div>
        </div>
    )
}