import React, { useState, useEffect, FC } from "react"
import { Link, useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
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

// const userLocalStorage = JSON.parse(localStorage.getItem("user") || "[]")

interface SignUpProps {
    // showPassword: boolean
}

export const SignUp: FC<SignUpProps> = ({ }) => {
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    // const [passwordLengthError, setPasswordLengthError] = useState("Password should not exceed 16 characters")
    const [passwordLengthError, setPasswordLengthError] = useState("")
    const [isInputInvalid, setIsInputInvalid] = useState(false)
    // const [passwordMatchError, setPasswordMatchError] = useState("Passwords don't match")
    const [passwordMatchError, setPasswordMatchError] = useState("")
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") || "[]"))

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user))
    }, [user])

    const handleClickShowPassword = () => {
        setShowPassword(
            !showPassword
        )
    }

    const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== password) {
            setPasswordMatchError("Passwords don't match")
            setIsInputInvalid(true)
        } else {
            setPasswordMatchError("")
            setIsInputInvalid(false)
        }
        setConfirmPassword(e.target.value)
    }

    const handlePasswordLength = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length < 8) {
            setPasswordLengthError("Password should be at least 8 characters")
            setIsInputInvalid(true)
        } else if (e.target.value.length > 16) {
            setPasswordLengthError("Password should not exceed 16 characters")
            setIsInputInvalid(true)
        } else {
            setPasswordLengthError("")
            setIsInputInvalid(false)
        }
        setPassword(e.target.value)
    }

    /^.{8,}$/
    // /^ (?=.* [a - z])(?=.* [0 - 9])$ /

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!email.includes("@")) {
            alert("Please enter a valid email")
        }
        let newUser = [...user]

        newUser.push({
            id: uuidv4(),
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })

        setUser(newUser)

        localStorage.setItem("user", JSON.stringify(user))

        navigate(-2)
    }

    return (
        <div className={classes.signUpPage}>
            <FormGrid>
                <LoginCard>
                    <AccountCircleIcon />
                    <form onSubmit={handleSubmit}>
                        <NameForm variant="outlined">
                            <FormInputLabel>First Name</FormInputLabel>
                            <OutlinedInput
                                label="First Name"
                                name="firstName"
                                type="text"
                                value={firstName}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFirstName(e.target.value) }}
                                required />
                        </NameForm>
                        <NameForm variant="outlined">
                            <FormInputLabel>Last Name</FormInputLabel>
                            <OutlinedInput
                                label="Last Name"
                                name="lastName"
                                type="text"
                                value={lastName}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setLastName(e.target.value) }}
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
                                error={isInputInvalid}
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
                        <div className={passwordLengthError !== "" ? classes.passwordErrorMessage : classes.passwordNoErrorMessage}>{passwordLengthError}</div>
                        <StyledForm>
                            <InputLabel>Confirm Password</InputLabel>
                            <OutlinedInput
                                label="Confirm Password"
                                name="confirmPassword"
                                type={showPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={handleConfirmPassword}
                                error={isInputInvalid}
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
                        <div className={passwordMatchError !== "" ? classes.passwordErrorMessage : classes.passwordNoErrorMessage}>{passwordMatchError}</div>

                        <SignUpButton type="submit" color="primary" variant="contained">Sign Up</SignUpButton>
                    </form>
                </LoginCard>
            </FormGrid>
            <div></div>
        </div >
    )
}

