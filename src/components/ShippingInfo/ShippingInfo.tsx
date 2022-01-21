import React from "react"
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

}

export const ShippingInfo = (props: ShippingInfoProps) => {
    return (
        <div>
            1. Shipping Address
            <NameForm variant="outlined">
                <FormInputLabel>Street Address</FormInputLabel>
                <OutlinedInput
                    label="Firstname"
                    name="firstName"
                    type="text"
                    // value={firstName}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFirstName(e.target.value) }}
                    required />
            </NameForm>
            <NameForm variant="outlined">
                <FormInputLabel>Town/City</FormInputLabel>
                <OutlinedInput
                    label="Firstname"
                    name="firstName"
                    type="text"
                    // value={firstName}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFirstName(e.target.value) }}
                    required />
            </NameForm>
            <SelectUSState className={classes.selectState} />
            <NameForm variant="outlined">
                <FormInputLabel>Zip/Postal</FormInputLabel>
                <OutlinedInput
                    label="Firstname"
                    name="firstName"
                    type="text"
                    // value={firstName}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFirstName(e.target.value) }}
                    required />
            </NameForm>
        </div>
    )
}