import React, { FC, useState } from "react"
import SelectUSState from "react-select-us-states"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import OutlinedInput from "@mui/material/OutlinedInput"
import { styled } from "@mui/system"
import classes from "./ShippingInfo.module.css"

const StreetForm = styled(FormControl)({
    margin: "12px",
    width: "80%",
})

const CityForm = styled(FormControl)({
    margin: "12px",
    width: "80%",
})

const StateCodeForm = styled(FormControl)({
    margin: "12px",
    width: "38%",
})

const ZipCodeForm = styled(FormControl)({
    margin: "12px",
    width: "38%",
})

const FormInputLabel = styled(InputLabel)({
    margin: "0"
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
                    <FormInputLabel>Address Line 1</FormInputLabel>
                    <OutlinedInput
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
                    <FormInputLabel>Address Line 2 (optional)</FormInputLabel>
                    <OutlinedInput
                        label="Address Line 2 (optional)"
                        name="addressLineTwo"
                        type="text"
                        value={addressLineTwo}
                        onChange={onChangeAddressLineTwo}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setStreetAddress(e.target.value) }}
                    />
                </StreetForm>
                <CityForm variant="outlined">
                    <FormInputLabel>Town/City</FormInputLabel>
                    <OutlinedInput
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
                    <FormInputLabel>State Code</FormInputLabel>
                    <OutlinedInput
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
                    <FormInputLabel>Zip/Postal</FormInputLabel>
                    <OutlinedInput
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