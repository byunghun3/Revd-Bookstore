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
import { Card, TextField } from "@mui/material"

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
    position: "relative",
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

const SignUpButton = styled(Button)({
    marginBottom: "20px"
})

interface SignUpProps {
    // showPassword: boolean
}

export const SignUp: FC<SignUpProps> = ({ }) => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [passwordLengthError, setPasswordLengthError] = useState("")
    const [isInputValid, setIsInputValid] = useState(false)
    const [passwordMatchError, setPasswordMatchError] = useState("")


    const handleClickShowPassword = () => {
        setShowPassword(
            !showPassword
        )
    }

    const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== password) {
            setPasswordMatchError("Passwords don't match")
        } else {
            setPasswordMatchError("")
        }
        setConfirmPassword(e.target.value)
    }

    const handlePasswordLength = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length < 8) {
            setPasswordLengthError("Password should be at least 8 characters")
            setIsInputValid(true)
        } else if (e.target.value.length > 16) {
            setPasswordLengthError("Password should not exceed 16 characters")
            setIsInputValid(true)
        } else {
            setPasswordLengthError("")
            setIsInputValid(false)
        }
        setPassword(e.target.value)
    }

    /^.{8,}$/
    // /^ (?=.* [a - z])(?=.* [0 - 9])$ /

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
                                name="firstName"
                                type="text"
                                value={firstname}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFirstname(e.target.value) }}
                                required />
                        </NameForm>
                        <NameForm variant="outlined">
                            <FormInputLabel>Last name</FormInputLabel>
                            <OutlinedInput
                                label="Lastname"
                                name="lastName"
                                type="text"
                                value={lastname}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setLastname(e.target.value) }}
                                required />
                        </NameForm>
                        <StyledForm variant="outlined">
                            <FormInputLabel>Email</FormInputLabel>
                            <OutlinedInput
                                label="Email"
                                name="email"
                                type="text"
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }}
                                required />
                        </StyledForm>
                        <StyledForm>
                            <InputLabel>Password</InputLabel>
                            <OutlinedInput
                                label="Password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={handlePasswordLength}
                                // helperText={password.length < 8 ? "Password should be at least 8 characters" : (password.length > 16 ? "Password should not exceed 16 characters" : null)}
                                // error={password.length < 8 || password.length > 16}
                                error={isInputValid}
                                endAdornment={<InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        // onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>}
                                required />
                        </StyledForm>
                        <div className={passwordLengthError !== "" ? classes.passwordError : classes.passwordNoError}>{passwordLengthError}</div>
                        <StyledForm>
                            <InputLabel>Confirm Password</InputLabel>
                            <OutlinedInput
                                label="Confirm Password"
                                name="confirmPassword"
                                type={showPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={handleConfirmPassword}
                                error={password !== confirmPassword}
                                endAdornment={<InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        // onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>}
                                required />
                        </StyledForm>
                        <div className={passwordMatchError !== "" ? classes.passwordError : classes.passwordNoError}>{passwordMatchError}</div>

                        <SignUpButton type="submit" color="primary" variant="contained">Sign Up</SignUpButton>
                    </form>
                </LoginCard>
            </FormGrid>
            <div></div>
        </div >
    )
}

