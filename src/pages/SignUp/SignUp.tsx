import React, { useState, FC } from "react"
import { Link } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Grid from "@mui/material/Grid"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import Checkbox from "@mui/material/Checkbox"
import Button from "@mui/material/Button"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { styled } from "@mui/system"
import classes from "./SignUp.module.css"
import { Card } from "@mui/material"

const HeaderToolbar = styled(Toolbar)({
    justifyContent: "space-between",
    width: "100%"
})

const FormGrid = styled(Grid)({
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
})

const LoginCard = styled(Card)({
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "75%",
    width: "40vw",
    margin: "50px"

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

interface SignUpProps {
    // showPassword: boolean
}

export const SignUp: FC<SignUpProps> = ({ }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")

    const handleClickShowPassword = () => {
        setShowPassword(
            !showPassword
        )
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert("signed in!")


    }
    return (
        <div className={classes.signUpPage}>
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
                </HeaderToolbar>
            </AppBar>
            <FormGrid>
                <LoginCard>
                    <AccountCircleIcon />
                    <form onSubmit={handleSubmit}>
                        <NameForm variant="outlined">
                            <FormInputLabel>First name</FormInputLabel>
                            <OutlinedInput
                                label="Firstname"
                                name="Firstname"
                                value={firstname}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFirstname(e.target.value) }}
                                required />
                        </NameForm>
                        <NameForm variant="outlined">
                            <FormInputLabel>Last name</FormInputLabel>
                            <OutlinedInput
                                label="Lastname"
                                name="Lastname"
                                type="text"
                                value={lastname}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setLastname(e.target.value) }}
                                required />
                        </NameForm>
                        <StyledForm variant="outlined">
                            <FormInputLabel>Email</FormInputLabel>
                            <OutlinedInput
                                label="Email"
                                name="Email"
                                type="text"
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }}
                                required />
                        </StyledForm>
                        <StyledForm>
                            <InputLabel>Password</InputLabel>
                            <OutlinedInput
                                label="Password"
                                name="Password"
                                type="text"
                                value={password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }}
                                required />
                        </StyledForm>
                        <StyledForm>
                            <InputLabel>Confirm Password</InputLabel>
                            <OutlinedInput
                                label="Confirm Password"
                                name="Confirm Password"
                                type="text"
                                value={confirmPassword}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setConfirmPassword(e.target.value) }}
                                required />
                        </StyledForm>

                        <Button type="submit" color="primary" variant="contained">Log in</Button>
                        Don&apos;t have account?
                        <Link to="/signup">
                            <Button type="button">Sign up</Button>
                        </Link>
                    </form>
                </LoginCard>
            </FormGrid>
            <div></div>
        </div >
    )
}

