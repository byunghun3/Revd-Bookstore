import React, { FC, useState } from "react"
import Cards from "react-credit-cards"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import OutlinedInput from "@mui/material/OutlinedInput"
import "react-credit-cards/es/styles-compiled.css"
import { styled } from "@mui/system"
import classes from "./PaymentInfo.module.css"
import { useHref } from "react-router-dom"

const CardNumberForm = styled(FormControl)({
    marginTop: "12px",
    width: "80%"
})

const CardNameForm = styled(FormControl)({
    width: "80%"
})

const ExpiryForm = styled(FormControl)({
    margin: "0 12px",
    width: "38%",
})

const CvcForm = styled(FormControl)({
    margin: "0 12px",
    width: "38%",
})

const FormInputLabel = styled(InputLabel)({
    margin: "0",
})

interface PaymentInfoProps {
    cardName: string
    cardNumber: string
    expiry: string
    cvc: string
    focus: string
    onFocus: React.FocusEventHandler<HTMLInputElement>
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
    cardName, cardNumber, expiry, cvc, focus, onFocus,
    onChangeName, onChangeNumber, onChangeExpiry, onChangeCvc,
    cardNumberError, expiryError, cvcError, cardNumberErrorText,
    expiryErrorText, cvcErrorText
}) => {


    return (
        <div className={classes.paymentInfo}>
            <div className={classes.paymentInfoHeader}>Payment Info</div>
            <div>
                <Cards
                    cvc={cvc}
                    expiry={expiry}
                    focused={focus}
                    name={cardName}
                    number={cardNumber}
                />
            </div>
            {/* <div> */}
            <CardNumberForm variant="outlined">
                <FormInputLabel>Credit Card Number</FormInputLabel>
                <OutlinedInput
                    label="Credit Card Number"
                    name="number"
                    type="tel"
                    value={cardNumber}
                    onChange={onChangeNumber}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setNumber(e.target.value) }}
                    onFocus={onFocus}
                    error={cardNumberError}
                    required />
                <div className={cardNumberErrorText !== "" ? classes.errorMessage : classes.noErrorMessage}>{cardNumberErrorText}</div>
            </CardNumberForm>
            {/* </div> */}
            <CardNameForm variant="outlined">
                <FormInputLabel>Name on Card</FormInputLabel>
                <OutlinedInput
                    label="Name on Card"
                    name="name"
                    type="text"
                    value={cardName}
                    onChange={onChangeName}
                    onFocus={onFocus}
                    required />
                <div className={classes.noErrorMessage}></div>
            </CardNameForm>
            <ExpiryForm variant="outlined">
                <FormInputLabel>Expiration Date</FormInputLabel>
                <OutlinedInput
                    label="Expiration Date"
                    name="expiry"
                    type="text"
                    value={expiry}
                    onChange={onChangeExpiry}
                    onFocus={onFocus}
                    error={expiryError}
                    required />
                <div className={expiryErrorText !== "" ? classes.errorMessage : classes.noErrorMessage}>{expiryErrorText}</div>
            </ExpiryForm>
            <CvcForm variant="outlined">
                <FormInputLabel>CVC</FormInputLabel>
                <OutlinedInput
                    label="CVC"
                    name="cvc"
                    type="tel"
                    value={cvc}
                    onChange={onChangeCvc}
                    onFocus={onFocus}
                    error={cvcError}
                    required />
                <div className={cvcErrorText !== "" ? classes.errorMessage : classes.noErrorMessage}>{cvcErrorText}</div>
            </CvcForm>
            {/* </div> */}
        </div>
    )
}