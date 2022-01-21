import React from "react"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import OutlinedInput from "@mui/material/OutlinedInput"
import { styled } from "@mui/system"
import classes from "./PaymentInfo.module.css"

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
    return (
        <div>
            2. Payment Info
            <NameForm variant="outlined">
                <FormInputLabel>Credit Card Number</FormInputLabel>
                <OutlinedInput
                    label="Firstname"
                    name="firstName"
                    type="text"
                    // value={firstName}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFirstName(e.target.value) }}
                    required />
            </NameForm>
            <NameForm variant="outlined">
                <FormInputLabel>Name on Card</FormInputLabel>
                <OutlinedInput
                    label="Firstname"
                    name="firstName"
                    type="text"
                    // value={firstName}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFirstName(e.target.value) }}
                    required />
            </NameForm>
            Expiration Date
        </div>
    )
}