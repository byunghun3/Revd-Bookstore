import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { Card } from "@mui/material"
import { Button } from "@mui/material"
import { PaymentInfo } from "../../components/PaymentInfo/PaymentInfo"
import { ShippingInfo } from "../../components/ShippingInfo/ShippingInfo"
import { styled } from "@mui/system"
import classes from "./Checkout.module.css"
import { OrderSummary } from "../../components/OrderSummary/OrderSummary"

const ReviewCard = styled(Card)({
    position: "relative",
    minWidth: "40vw",
    margin: "5%"
})

const CheckoutCard = styled(Card)({
    position: "relative",
    height: "75%",
    minWidth: "30vw",
    margin: "5% 5% 5% 0"
})

const CartButton = styled(Button)({
    position: "absolute",
    top: "50%",
    right: "0",
    fontSize: "1.3rem",
    transform: "translate(-50%, -50%)"
})

const CheckOutButton = styled(Button)({
    marginBottom: "1.5rem",
    fontSize: "1.4rem"
})

interface CheckoutProps {

}

export const Checkout = (props: CheckoutProps) => {
    const [numItems, setNumItems] = useState("items")
    const [addressLineOne, setAddressLineOne] = useState("")
    const [addressLineTwo, setAddressLineTwo] = useState("")
    const [city, setCity] = useState("")
    const [stateCode, setStateCode] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [orders, setOrders] = useState(JSON.parse(localStorage.getItem("orders") || "[]"))
    const [cardName, setCardName] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [expiry, setExpiry] = useState("")
    const [cvc, setCvc] = useState("")
    const [focus, setFocus] = useState("")
    const [isCardInvalid, setIsCardInvalid] = useState(false)
    const [isExpiryInvalid, setIsExpiryInvalid] = useState(false)
    const [isCvcInvalid, setIsCvcInvalid] = useState(false)
    const [cardNumberErrorText, setCardNumberErrorText] = useState("")
    const [expiryErrorText, setExpiryErrorText] = useState("")
    const [cvcErrorText, setCvcErrorText] = useState("")
    // const [cardNumberErrorText, setCardNumberErrorText] = useState("Please enter a valid card number")
    // const [expiryErrorText, setExpiryErrorText] = useState("Please enter a valid date")
    // const [cvcErrorText, setCvcErrorText] = useState("Please enter a valid CVC")
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]")
    const navigate = useNavigate()


    useEffect(() => {
        if (cart.length === 1) {
            setNumItems("item")
        } else { numItems }
    }, [cart])

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

    const handleSaveOrder = (e: React.FormEvent<HTMLFormElement>) => {
        const thisDay = new Date().getDate()
        const thisFullYear = new Date().getFullYear()
        const thisMonth = new Date().getMonth() + 1
        const thisYear = new Date().getFullYear().toString().slice(-2)
        const cardNumberRules = cardNumber.length < 13 || cardNumber.length > 19 || !/^\d+$/.test(cardNumber)
        const expiryRules = Number(expiry.substring(0, 2)) < 1 || Number(expiry.substring(0, 1)) > 12 ||
            Number(expiry.substring(2, 4)) < Number(thisYear) || (Number(expiry.substring(0, 2)) < thisMonth &&
                Number(expiry.substring(2, 4)) === Number(thisYear))
        const cvcRules = cvc.length < 3 || cvc.length > 4

        if (cardNumberRules) {
            e.preventDefault()
            setIsCardInvalid(true)
            setCardNumberErrorText("Please enter a valid card number")
        } else {
            setIsCardInvalid(false)
        }

        if (expiryRules) {
            e.preventDefault()
            setIsExpiryInvalid(true)
            setExpiryErrorText("Please enter a valid date")
        } else {
            setIsExpiryInvalid(false)
        }

        if (cvcRules) {
            e.preventDefault()
            setIsCvcInvalid(true)
            setCvcErrorText("Please enter a valid CVC")
        } else {
            setIsCvcInvalid(false)
        }

        if (cart.length < 1) {
            e.preventDefault()
            alert("Your cart is empty")
            navigate("/browse")
        }

        if (!cardNumberRules && !expiryRules && !cvcRules) {
            let newOrder = [...orders]

            newOrder.push({
                id: uuidv4(),
                date: `${thisMonth}/${thisDay}/${thisFullYear}`,
                total: totalPrice.toFixed(2),
                address:
                {
                    addressLineOne: addressLineOne,
                    addressLineTwo: addressLineTwo,
                    city: city,
                    state: capitalizeStateCode(stateCode),
                    zipCode: zipCode
                },
                payment:
                {
                    name: cardName,
                    number: cardNumber,
                    expiry: expiry,
                    cvc: cvc
                },
                user:
                {
                    firstName: currentUser[0].firstName,
                    lastName: currentUser[0].lastName,
                    email: currentUser[0].email,
                    password: currentUser[0].password
                },
                details: [...cart]
            })

            setOrders(newOrder)

            localStorage.setItem("orders", JSON.stringify(newOrder))

            localStorage.setItem("cart", JSON.stringify([]))

            navigate("/ordercomplete")
        }
    }

    return (
        <div className={classes.checkoutPage}>
            <div className={classes.checkoutHeader}>
                <div className={classes.checkoutHeaderText}>
                    Checkout - {cart.length} {numItems}
                </div>
                <Link className={classes.buttonLink} to="/cart">
                    <CartButton type="button">
                        Back to Cart
                    </CartButton>
                </Link>
            </div>
            <form className={classes.checkoutForm} onSubmit={handleSaveOrder}>
                <ReviewCard>
                    <section className={classes.shippingInfoSection}>
                        <ShippingInfo
                            addressLineOne={addressLineOne}
                            addressLineTwo={addressLineTwo}
                            city={city}
                            stateCode={stateCode}
                            zipCode={zipCode}
                            onChangeAddressLineOne={(e: React.ChangeEvent<HTMLInputElement>) => { setAddressLineOne(e.target.value) }}
                            onChangeAddressLineTwo={(e: React.ChangeEvent<HTMLInputElement>) => { setAddressLineTwo(e.target.value) }}
                            onChangeCity={(e: React.ChangeEvent<HTMLInputElement>) => { setCity(e.target.value) }}
                            onChangeStateCode={(e: React.ChangeEvent<HTMLInputElement>) => { setStateCode(e.target.value) }}
                            onChangeZipCode={(e: React.ChangeEvent<HTMLInputElement>) => { setZipCode(e.target.value) }}
                        // onChangeStreetAddress={handleChange}
                        // onChangeCity={handleChange}
                        // onChangeStateCode={handleChange}
                        // onChangeZipCode={handleChange}
                        />
                    </section>
                    <section className={classes.paymentInfoSection}>
                        <PaymentInfo
                            cardName={cardName}
                            cardNumber={cardNumber}
                            expiry={expiry}
                            cvc={cvc}
                            focus={focus}
                            onFocus={(e: React.FocusEvent<HTMLInputElement>) => { setFocus(e.target.name) }}
                            onChangeName={(e: React.ChangeEvent<HTMLInputElement>) => { setCardName(e.target.value) }}
                            // onChangeNumber={handleChangeCardNumber}
                            onChangeExpiry={(e: React.ChangeEvent<HTMLInputElement>) => { setExpiry(e.target.value) }}
                            onChangeCvc={(e: React.ChangeEvent<HTMLInputElement>) => { setCvc(e.target.value) }}
                            // onChangeName={(e: React.ChangeEvent<HTMLInputElement>) => { setCardName(e.target.value) }}
                            onChangeNumber={(e: React.ChangeEvent<HTMLInputElement>) => { setCardNumber(e.target.value) }}
                            // onChangeExpiry={(e: React.ChangeEvent<HTMLInputElement>) => { setExpiry(e.target.value) }}
                            // onChangeCvc={(e: React.ChangeEvent<HTMLInputElement>) => { setCvc(e.target.value) }}
                            cardNumberError={isCardInvalid}
                            expiryError={isExpiryInvalid}
                            cvcError={isCvcInvalid}
                            cardNumberErrorText={cardNumberErrorText}
                            expiryErrorText={expiryErrorText}
                            cvcErrorText={cvcErrorText}
                        />
                    </section>
                </ReviewCard>
                <CheckoutCard>
                    <OrderSummary
                        item={itemPrice.toFixed(2)}
                        shipping={shippingPrice.toFixed(2)}
                        tax={taxPrice.toFixed(2)}
                        total={totalPrice.toFixed(2)}
                    />
                    <CheckOutButton variant="contained" type="submit">
                        Confirm and Pay
                    </CheckOutButton>
                </CheckoutCard>
            </form>
        </div>
    )
}
