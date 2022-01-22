import React from "react"
import { Link } from "react-router-dom"
import { Card } from "@mui/material"
import { PaymentInfo } from "../../components/PaymentInfo/PaymentInfo"
import { ShippingInfo } from "../../components/ShippingInfo/ShippingInfo"
import { styled } from "@mui/system"
import classes from "./CheckOut.module.css"
import { OrderSummary } from "../../components/OrderSummary/OrderSummary"

interface CheckOutProps {

}

export const CheckOut = (props: CheckOutProps) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")

    return (
        <div className={classes.checkOutPage}>
            Checkout - {cart.length} item(s)
            <Card>
                <section>
                    <ShippingInfo />
                </section>
                <section>
                    <PaymentInfo />
                </section>
                <section>
                    3. Review and Shipping
                </section>
            </Card>
            <Card>
                <OrderSummary />
            </Card>
        </div>
    )
}
