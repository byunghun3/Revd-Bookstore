import React from "react"
import { Link } from "react-router-dom"
import SelectUSState from "react-select-us-states"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import OutlinedInput from "@mui/material/OutlinedInput"
import { styled } from "@mui/system"
import classes from "./CheckOut.module.css"
import { Card } from "@mui/material"

const HeaderToolbar = styled(Toolbar)({
    justifyContent: "space-between",
    maxWidth: "100%"
})

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

interface CheckOutProps {

}

export const CheckOut = (props: CheckOutProps) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")

    return (
        <div className={classes.checkOutPage}>
            <AppBar
                color="inherit"
                elevation={0}
                position="relative"
            >
                <HeaderToolbar>
                    <div>
                        <Link to="/" className={classes.homeLink}>
                            <span className={classes.title}>Revd Bookstore</span>
                        </Link>
                    </div>
                    Checkout - {cart.length} item(s)
                </HeaderToolbar>
            </AppBar>
            <Card>
                <section>
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
                    <SelectUSState className={classes.selectState}/>
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
                </section>
                <section>
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
                </section>
                <section>
                    3. Review and Shipping
                </section>
            </Card>
            <Card>
                Order Summary
                Items: $
                Shipping & handling: $
                Estimated tax: $
                Total: $
            </Card>
        </div>
    )
}
