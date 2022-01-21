import React from "react"
import { Link } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import { Card } from "@mui/material"
import { PaymentInfo } from "../../components/PaymentInfo/PaymentInfo"
import { ShippingInfo } from "../../components/ShippingInfo/ShippingInfo"
import { styled } from "@mui/system"
import classes from "./CheckOut.module.css"
import { OrderSummary } from "../../components/OrderSummary/OrderSummary"

const HeaderToolbar = styled(Toolbar)({
    justifyContent: "space-between",
    maxWidth: "100%"
})

interface CheckOutProps {

}

export const CheckOut = (props: CheckOutProps) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")

    return (
        <div className={classes.checkOutPage}>
            <AppBar
                color="inherit"
                elevation={0}
                position="relative"
            >
                <HeaderToolbar>
                    <div>
                        <Link to="/" className={classes.homeLink}>
                            <span className={classes.title}>Revd Bookstore</span>
                        </Link>
                    </div>
                    Checkout - {cart.length} item(s)
                </HeaderToolbar>
            </AppBar>
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
