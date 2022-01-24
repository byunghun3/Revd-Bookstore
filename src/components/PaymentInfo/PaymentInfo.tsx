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
    margin: "0"
})

interface PaymentInfoProps {
    name: string
    number: string
    expiry: string
    cvc: string
    // focus: string
    onChangeName: React.ChangeEventHandler<HTMLInputElement>
    onChangeNumber: React.ChangeEventHandler<HTMLInputElement>
    onChangeExpiry: React.ChangeEventHandler<HTMLInputElement>
    onChangeCvc: React.ChangeEventHandler<HTMLInputElement>
}

export const PaymentInfo: FC<PaymentInfoProps> = ({
    name, number, expiry, cvc,
    onChangeName, onChangeNumber, onChangeExpiry, onChangeCvc
}) => {
    const [focus, setFocus] = useState("")


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
                    onChange={onChangeNumber}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setNumber(e.target.value) }}
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
                    onChange={onChangeName}
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
                    onChange={onChangeExpiry}
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
                    onChange={onChangeCvc}
                    onFocus={(e: React.FocusEvent<HTMLInputElement>) => { setFocus(e.target.name) }}
                    required />
            </NameForm>
        </div>
    )
}