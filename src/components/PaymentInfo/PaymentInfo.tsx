import React, { useState } from "react"
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
    margin: "0"
})

interface PaymentInfoProps {

}

export const PaymentInfo = (props: PaymentInfoProps) => {
    const [cvc, setCvc] = useState("")
    const [expiry, setExpiry] = useState("")
    const [focus, setFocus] = useState("")
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")

    return (
        <div>
            {/* 2. Payment Info */}
            <Cards
                cvc={cvc}
                expiry={expiry}
                focused={focus}
                name={name}
                number={number} />
            <NameForm variant="outlined">
                <FormInputLabel>Credit Card Number</FormInputLabel>
                <OutlinedInput
                    label="Card number"
                    name="number"
                    type="tel"
                    value={number}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setNumber(e.target.value) }}
                    onFocus={(e: React.FocusEvent<HTMLInputElement>) => { setFocus(e.target.name) }}
                    required />
            </NameForm>
            <NameForm variant="outlined">
                <FormInputLabel>Name on Card</FormInputLabel>
                <OutlinedInput
                    label="Name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }}
                    onFocus={(e: React.FocusEvent<HTMLInputElement>) => { setFocus(e.target.name) }}
                    required />
            </NameForm>
            <NameForm variant="outlined">
                <FormInputLabel>Expiration Date</FormInputLabel>
                <OutlinedInput
                    label="Expiry"
                    name="expiry"
                    type="text"
                    value={expiry}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setExpiry(e.target.value) }}
                    onFocus={(e: React.FocusEvent<HTMLInputElement>) => { setFocus(e.target.name) }}
                    required />
            </NameForm>
            <NameForm variant="outlined">
                <FormInputLabel>CVC</FormInputLabel>
                <OutlinedInput
                    label="CVC"
                    name="cvc"
                    type="tel"
                    value={cvc}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setCvc(e.target.value) }}
                    onFocus={(e: React.FocusEvent<HTMLInputElement>) => { setFocus(e.target.name) }}
                    required />
            </NameForm>
        </div>
    )
}