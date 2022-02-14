import React, { FC, useState } from "react"
import SelectUSState from "react-select-us-states"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import OutlinedInput from "@mui/material/OutlinedInput"
import { styled } from "@mui/system"
import classes from "./ShippingInfo.module.css"

const StreetForm = styled(FormControl)({
    margin: "1.2rem",
    width: "80%",
})

const CityForm = styled(FormControl)({
    margin: "1.2rem",
    width: "80%",
})

const StateCodeForm = styled(FormControl)({
    margin: "1.2rem",
    width: "38%",
})

const ZipCodeForm = styled(FormControl)({
    margin: "1.2rem",
    width: "38%",
})

const StyledInputLabel = styled(InputLabel)({
    fontSize: "1.5rem"
})

const StyledOutlinedInput = styled(OutlinedInput)({
    fontSize: "1.5rem"
})

interface ShippingInfoProps {
    addressLineOne: string
    addressLineTwo: string
    city: string
    stateCode: string
    zipCode: string
    onChangeAddressLineOne: React.ChangeEventHandler<HTMLInputElement>
    onChangeAddressLineTwo: React.ChangeEventHandler<HTMLInputElement>
    onChangeCity: React.ChangeEventHandler<HTMLInputElement>
    onChangeStateCode: React.ChangeEventHandler<HTMLInputElement>
    onChangeZipCode: React.ChangeEventHandler<HTMLInputElement>
}

export const ShippingInfo: FC<ShippingInfoProps> = ({
    addressLineOne, addressLineTwo, city, stateCode, zipCode,
    onChangeAddressLineOne, onChangeAddressLineTwo, onChangeCity,
    onChangeStateCode, onChangeZipCode
}) => {
    return (
        <div className={classes.shippingInfo}>
            <div className={classes.shippingInfoHeader}>Shipping Address</div>
            <div className={classes.shippingInputs}>
                <StreetForm variant="outlined">
                    <StyledInputLabel>Address Line 1</StyledInputLabel>
                    <StyledOutlinedInput
                        label="Address Line 1"
                        name="addressLineOne"
                        type="text"
                        value={addressLineOne}
                        onChange={onChangeAddressLineOne}
                        // onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setStreetAddress(e.target.value) }}
                        required
                    />
                </StreetForm>
                <StreetForm variant="outlined">
                    <StyledInputLabel>Address Line 2 (optional)</StyledInputLabel>
                    <StyledOutlinedInput
                        label="Address Line 2 (optional)"
                        name="addressLineTwo"
                        type="text"
                        value={addressLineTwo}
                        onChange={onChangeAddressLineTwo}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setStreetAddress(e.target.value) }}
                    />
                </StreetForm>
                <CityForm variant="outlined">
                    <StyledInputLabel>Town/City</StyledInputLabel>
                    <StyledOutlinedInput
                        label="Town/City"
                        name="city"
                        type="text"
                        value={city}
                        onChange={onChangeCity}
                        // onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setCity(e.target.value) }}
                        required
                    />
                </CityForm>
                <StateCodeForm variant="outlined">
                    <StyledInputLabel>State Code</StyledInputLabel>
                    <StyledOutlinedInput
                        label="State Code"
                        name="stateCode"
                        type="text"
                        value={stateCode}
                        onChange={onChangeStateCode}
                        // onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setStateCode(e.target.value) }}
                        required
                    />
                </StateCodeForm>
                {/* <SelectUSState className={classes.selectState} /> */}
                <ZipCodeForm variant="outlined">
                    <StyledInputLabel>Zip/Postal</StyledInputLabel>
                    <StyledOutlinedInput
                        label="Zip/Postal"
                        name="zipCode"
                        type="text"
                        value={zipCode}
                        onChange={onChangeZipCode}
                        // onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setZipCode(e.target.value) }}
                        required
                    />
                </ZipCodeForm>
            </div>
        </div>
    )
}