import React, { useState } from "react"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { Card } from "@mui/material"
import { Button } from "@mui/material"
import { PaymentInfo } from "../../components/PaymentInfo/PaymentInfo"
import { ShippingInfo } from "../../components/ShippingInfo/ShippingInfo"
import { styled } from "@mui/system"
import classes from "./CheckOut.module.css"
import { OrderSummary } from "../../components/OrderSummary/OrderSummary"

interface CheckOutProps {

}

export const CheckOut = (props: CheckOutProps) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    const [order, setOrder] = JSON.parse(localStorage.getItem("order") || "[]")
    const [streetAddress, setStreetAddress] = useState("")
    const [city, setCity] = useState("")
    const [stateCode, setStateCode] = useState("")
    const [zipCode, setZipCode] = useState("")

    const capitalizeStateCode = (code: string) => {
        return code.toUpperCase()
    }

    const saveOrder = () => {
        let newOrder = [...order]

        newOrder.push({
            id: uuidv4(),
            address: {
                street: streetAddress,
                city: city,
                state: stateCode,
                zipCode: zipCode
            },
            // author: books[id - 1].author,
            // image: books[id - 1].image,
            // price: books[id - 1].price,
            // quantity: 1
        })

        // setOrder(newOrder)

        // localStorage.setItem("cart", JSON.stringify(newCart))
        // capitalizeStateCode()
    }

    return (
        <div className={classes.checkOutPage}>
            Checkout - {cart.length} item(s)
            <form onSubmit={saveOrder}>
                <Card>
                    <section>
                        <ShippingInfo
                            streetAddress={streetAddress}
                            onChangeStreetAddress={(e: React.ChangeEvent<HTMLInputElement>) => { setStreetAddress(e.target.value) }}
                            city={city}
                            onChangeCity={(e: React.ChangeEvent<HTMLInputElement>) => { setCity(e.target.value) }}
                            stateCode={stateCode}
                            onChangeStateCode={(e: React.ChangeEvent<HTMLInputElement>) => { setStateCode(e.target.value) }}
                            zipCode={zipCode}
                            onChangeZipCode={(e: React.ChangeEvent<HTMLInputElement>) => { setZipCode(e.target.value) }}
                        />
                    </section>
                    <section className={classes.paymentInfo}>
                        <PaymentInfo />
                    </section>
                    <section>
                        3. Review and Shipping
                    </section>
                </Card>
                <Card>
                    <OrderSummary />
                </Card>
                <Button type="submit">Complete Order</Button>
            </form>
        </div>
    )
}
