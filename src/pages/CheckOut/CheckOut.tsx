import React, { useState, useEffect } from "react"
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
    const [streetAddress, setStreetAddress] = useState("")
    const [city, setCity] = useState("")
    const [stateCode, setStateCode] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [order, setOrder] = useState(JSON.parse(localStorage.getItem("order") || "[]"))
    const [cardName, setCardName] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [expiry, setExpiry] = useState("")
    const [cvc, setCvc] = useState("")
    const [isCardInvalid, setIsCardInvalid] = useState(false)
    const [isExpiryInvalid, setIsExpiryInvalid] = useState(false)
    const [isCvcInvalid, setIsCvcInvalid] = useState(false)
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")


    useEffect(() => {
        localStorage.setItem("order", JSON.stringify(order))
    }, [order])

    const itemPrice = cart.reduce((total: number, el: any) => {
        return total + (el.price * el.quantity)
    }, 0)

    const shippingPrice = (cart.find((el: any) => { return el.type === "HARD COPY" }) ? 7.50 : 0)

    const taxPrice = (0.06625 * (itemPrice + shippingPrice))

    const totalPrice = itemPrice + shippingPrice + taxPrice

    const capitalizeStateCode = (code: string) => {
        return code.toUpperCase()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        `set${e.currentTarget.name}(e.currentTarget.value)`
    }

    const handleChangeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (cardNumber.length < 13 || cardNumber.length > 19 || !/^\d+$/.test(cardNumber)) {
            setIsCardInvalid(true)
            setCardNumber(e.currentTarget.value)

        } else {
            setIsCardInvalid(false)
            setCardNumber(e.currentTarget.value)
        }
    }

    const handleSaveOrder = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const thisYear = new Date().getFullYear().toString().slice(-2)
        if (cardNumber.length < 13 || cardNumber.length > 19 || !/^\d+$/.test(cardNumber)) {
            e.preventDefault()
            setIsCardInvalid(true)
        } else {
            setIsCardInvalid(false)
        }
        if (Number(expiry.substring(0, 2)) < 1 || Number(expiry.substring(0, 1)) > 12 ||
            Number(expiry.substring(2, 4)) < Number(thisYear)) {
            e.preventDefault()
            setIsExpiryInvalid(true)
        } else {
            setIsExpiryInvalid(false)
        }

        if (cvc.length < 3 || cvc.length > 4) {
            e.preventDefault()
            setIsCvcInvalid(true)
        } else {
            setIsCvcInvalid(false)
        }

        if (isCardInvalid === false && isExpiryInvalid === false && isCvcInvalid === false) {
            let newOrder = [...order]

            newOrder.push({
                id: uuidv4(),
                address: {
                    street: streetAddress,
                    city: city,
                    state: capitalizeStateCode(stateCode),
                    zipCode: zipCode
                },
                payment: {
                    name: cardName,
                    number: cardNumber,
                    expiry: expiry,
                    cvc: cvc
                }
            })

            setOrder(newOrder)

            localStorage.setItem("order", JSON.stringify(newOrder))
        }
    }

    return (
        <div className={classes.checkOutPage}>
            {/* Checkout - {cart.length} item(s) */}
            <form onSubmit={handleSaveOrder}>
                <Card>
                    <section>
                        <ShippingInfo
                            streetAddress={streetAddress}
                            city={city}
                            stateCode={stateCode}
                            zipCode={zipCode}
                            onChangeStreetAddress={(e: React.ChangeEvent<HTMLInputElement>) => { setStreetAddress(e.target.value) }}
                            onChangeCity={(e: React.ChangeEvent<HTMLInputElement>) => { setCity(e.target.value) }}
                            onChangeStateCode={(e: React.ChangeEvent<HTMLInputElement>) => { setStateCode(e.target.value) }}
                            onChangeZipCode={(e: React.ChangeEvent<HTMLInputElement>) => { setZipCode(e.target.value) }}
                        // onChangeStreetAddress={handleChange}
                        // onChangeCity={handleChange}
                        // onChangeStateCode={handleChange}
                        // onChangeZipCode={handleChange}
                        />
                    </section>
                    <section className={classes.paymentInfo}>
                        <PaymentInfo
                            cardName={cardName}
                            cardNumber={cardNumber}
                            expiry={expiry}
                            cvc={cvc}
                            onChangeName={(e: React.ChangeEvent<HTMLInputElement>) => { setCardName(e.target.value) }}
                            // onChangeNumber={handleChangeCardNumber}
                            onChangeExpiry={(e: React.ChangeEvent<HTMLInputElement>) => { setExpiry(e.target.value) }}
                            onChangeCvc={(e: React.ChangeEvent<HTMLInputElement>) => { setCvc(e.target.value) }}
                            // onChangeName={(e: React.ChangeEvent<HTMLInputElement>) => { setCardName(e.target.value) }}
                            onChangeNumber={(e: React.ChangeEvent<HTMLInputElement>) => { setCardNumber(e.target.value) }}
                            // onChangeExpiry={(e: React.ChangeEvent<HTMLInputElement>) => { setExpiry(e.target.value) }}
                            // onChangeCvc={(e: React.ChangeEvent<HTMLInputElement>) => { setCvc(e.target.value) }}
                            cardError={isCardInvalid}
                            expiryError={isExpiryInvalid}
                            cvcError={isCvcInvalid}
                        />
                    </section>
                    <section>
                        3. Review and Shipping
                    </section>
                </Card>
                <Card>
                    <OrderSummary
                        item={itemPrice.toFixed(2)}
                        shipping={shippingPrice.toFixed(2)}
                        tax={taxPrice.toFixed(2)}
                        total={totalPrice.toFixed(2)}
                    />
                </Card>
                <Button type="button">
                    <Link to="/cart">
                        Back to Cart
                    </Link>
                </Button>
                <Button type="submit">Complete Order</Button>
            </form>
        </div>
    )
}
