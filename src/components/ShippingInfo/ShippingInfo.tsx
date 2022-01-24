import React, { FC, useState } from "react"
import SelectUSState from "react-select-us-states"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import OutlinedInput from "@mui/material/OutlinedInput"
import { styled } from "@mui/system"
import classes from "./ShippingInfo.module.css"

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

interface ShippingInfoProps {
    streetAddress: string
    city: string
    stateCode: string
    zipCode: string
    onChangeStreetAddress: React.ChangeEventHandler<HTMLInputElement>
    onChangeCity: React.ChangeEventHandler<HTMLInputElement>
    onChangeStateCode: React.ChangeEventHandler<HTMLInputElement>
    onChangeZipCode: React.ChangeEventHandler<HTMLInputElement>
}

export const ShippingInfo: FC<ShippingInfoProps> = ({
    streetAddress, city, stateCode, zipCode, onChangeStreetAddress,
    onChangeCity, onChangeStateCode, onChangeZipCode }) => {
    // const [streetAddress, setStreetAddress] = useState("")
    // const [city, setCity] = useState("")
    // const [stateCode, setStateCode] = useState("")
    // const [zipCode, setZipCode] = useState("")


    return (
        <div>
            1. Shipping Address
            <NameForm variant="outlined">
                <FormInputLabel>Street Address</FormInputLabel>
                <OutlinedInput
                    label="Street Address"
                    name="streetAddress"
                    type="text"
                    value={streetAddress}
                    onChange={onChangeStreetAddress}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setStreetAddress(e.target.value) }}
                    required />
            </NameForm>
            <NameForm variant="outlined">
                <FormInputLabel>Town/City</FormInputLabel>
                <OutlinedInput
                    label="Firstname"
                    name="city"
                    type="text"
                    value={city}
                    onChange={onChangeCity}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setCity(e.target.value) }}
                    required />
            </NameForm>
            <NameForm variant="outlined">
                <FormInputLabel>State Code</FormInputLabel>
                <OutlinedInput
                    label="State Code"
                    name="stateCode"
                    type="text"
                    value={stateCode}
                    onChange={onChangeStateCode}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setStateCode(e.target.value) }}
                    required />
            </NameForm>
            {/* <SelectUSState className={classes.selectState} /> */}
            <NameForm variant="outlined">
                <FormInputLabel>Zip/Postal</FormInputLabel>
                <OutlinedInput
                    label="Firstname"
                    name="zipCode"
                    type="text"
                    value={zipCode}
                    onChange={onChangeZipCode}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setZipCode(e.target.value) }}
                    required />
            </NameForm>
        </div>
    )
}