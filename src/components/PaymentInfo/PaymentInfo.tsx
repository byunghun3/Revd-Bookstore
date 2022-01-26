import React, { FC, useState } from "react"
import Cards from "react-credit-cards"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import OutlinedInput from "@mui/material/OutlinedInput"
import "react-credit-cards/es/styles-compiled.css"
import { styled } from "@mui/system"
import classes from "./PaymentInfo.module.css"
import { useHref } from "react-router-dom"

const NameForm = styled(FormControl)({
    margin: "20px",
    width: "40%",

})

const StyledForm = styled(FormControl)({
    margin: "20px",
    width: "80%",

})

const FormInputLabel = styled(InputLabel)({
    margin: "0",
    // fontSize: "12px",
    // display: "inline-block"
})

interface PaymentInfoProps {
    cardName: string
    cardNumber: string
    expiry: string
    cvc: string
    // focus: string
    onChangeName: React.ChangeEventHandler<HTMLInputElement>
    onChangeNumber: React.ChangeEventHandler<HTMLInputElement>
    onChangeExpiry: React.ChangeEventHandler<HTMLInputElement>
    onChangeCvc: React.ChangeEventHandler<HTMLInputElement>
    cardNumberError: boolean
    expiryError: boolean
    cvcError: boolean
    cardNumberErrorText: string
    expiryErrorText: string
    cvcErrorText: string
}

export const PaymentInfo: FC<PaymentInfoProps> = ({
    cardName, cardNumber, expiry, cvc,
    onChangeName, onChangeNumber, onChangeExpiry, onChangeCvc,
    cardNumberError, expiryError, cvcError, cardNumberErrorText,
    expiryErrorText, cvcErrorText
}) => {
    const [focus, setFocus] = useState("")


    return (
        <div className={classes.paymentInfo}>
            {/* 2. Payment Info */}
            <Cards
                cvc={cvc}
                expiry={expiry}
                focused={focus}
                name={cardName}
                number={cardNumber} />
            <NameForm variant="outlined">
                <FormInputLabel>Credit Card Number</FormInputLabel>
                <OutlinedInput
                    label="Credit Card Number"
                    name="number"
                    type="tel"
                    value={cardNumber}
                    onChange={onChangeNumber}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setNumber(e.target.value) }}
                    onFocus={(e: React.FocusEvent<HTMLInputElement>) => { setFocus(e.target.name) }}
                    error={cardNumberError}
                    required />
            </NameForm>
            <div className={cardNumberErrorText !== "" ? classes.errorMessage : classes.noErrorMessage}>{cardNumberErrorText}</div>
            <NameForm variant="outlined">
                <FormInputLabel>Name on Card</FormInputLabel>
                <OutlinedInput
                    label="Name on Card"
                    name="name"
                    type="text"
                    value={cardName}
                    onChange={onChangeName}
                    onFocus={(e: React.FocusEvent<HTMLInputElement>) => { setFocus(e.target.name) }}
                    required />
            </NameForm>
            <div className={classes.noErrorMessage}></div>
            <NameForm variant="outlined">
                <FormInputLabel>Expiration Date</FormInputLabel>
                <OutlinedInput
                    label="Expiration Date"
                    name="expiry"
                    type="text"
                    value={expiry}
                    onChange={onChangeExpiry}
                    onFocus={(e: React.FocusEvent<HTMLInputElement>) => { setFocus(e.target.name) }}
                    error={expiryError}
                    required />
            </NameForm>
            <div className={expiryErrorText !== "" ? classes.errorMessage : classes.noErrorMessage}>{expiryErrorText}</div>
            <NameForm variant="outlined">
                <FormInputLabel>CVC</FormInputLabel>
                <OutlinedInput
                    label="CVC"
                    name="cvc"
                    type="tel"
                    value={cvc}
                    onChange={onChangeCvc}
                    onFocus={(e: React.FocusEvent<HTMLInputElement>) => { setFocus(e.target.name) }}
                    error={cvcError}
                    required />
            </NameForm>
            <div className={cvcErrorText !== "" ? classes.errorMessage : classes.noErrorMessage}>{cvcErrorText}</div>
        </div>
    )
}