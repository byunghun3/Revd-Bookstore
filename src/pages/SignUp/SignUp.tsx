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
import { UsersData } from "../../data/UsersData"
import { styled } from "@mui/system"
import classes from "./SignUp.module.css"
import { Card, TextField } from "@mui/material"

const SignUpCard = styled(Card)({
    // position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "5% 0 10% 0",
    minHeight: "55vh",
    width: "40rem",
    "@media (max-width: 499px)": {
        minHeight: "45vh",
        width: "30rem"
    }
})

const StyledAccountCircleIcon = styled(AccountCircleIcon)({
    flex: "1",
    margin: "5% 0",
    fontSize: "3.5rem"
})

const NameForm = styled(FormControl)({
    margin: "3% 2%",
    width: "40%"
})

const StyledForm = styled(FormControl)({
    margin: "3% 0",
    width: "80%"
})

const StyledInputLabel = styled(InputLabel)({
    fontSize: "1.5rem"
})

const StyledOutlinedInput = styled(OutlinedInput)({
    fontSize: "1.5rem"
})

const SignUpButton = styled(Button)({
    margin: "5% 0",
    fontSize: "1.3rem"
})

// const userLocalStorage = JSON.parse(localStorage.getItem("user") || "[]")

interface SignUpProps {
    // showPassword: boolean
}

export const SignUp: FC<SignUpProps> = ({ }) => {
    const navigate = useNavigate()
    const hardCodedUsers = UsersData

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    // const [passwordLengthError, setPasswordLengthError] = useState("Password should not exceed 16 characters")
    const [emailInputError, setEmailInputError] = useState("")
    const [passwordLengthError, setPasswordLengthError] = useState("")
    const [isEmailInvalid, setIsEmailInvalid] = useState(false)
    const [isPasswordInvalid, setIsPasswordInvalid] = useState(false)
    // const [passwordMatchError, setPasswordMatchError] = useState("Passwords don't match")
    const [passwordMatchError, setPasswordMatchError] = useState("")
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users") || JSON.stringify(hardCodedUsers)))
    // const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users") || "[]"))


    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
    }, [users])

    const handleValidateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value.includes("@")) {
            setEmailInputError("Please enter a valid email")
            setIsEmailInvalid(true)
        } else {
            setEmailInputError("")
            setIsEmailInvalid(false)
        }
        setEmail(e.target.value)
    }

    const handleClickShowPassword = () => {
        setShowPassword(
            !showPassword
        )
    }

    const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== password) {
            setPasswordMatchError("Passwords don't match")
            setIsPasswordInvalid(true)
        } else {
            setPasswordMatchError("")
            setIsPasswordInvalid(false)
        }
        setConfirmPassword(e.target.value)
    }

    const handlePasswordLength = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length < 8) {
            setPasswordLengthError("Password should be at least 8 characters")
            setIsPasswordInvalid(true)
        } else if (e.target.value.length > 16) {
            setPasswordLengthError("Password should not exceed 16 characters")
            setIsPasswordInvalid(true)
        } else {
            setPasswordLengthError("")
            setIsPasswordInvalid(false)
        }
        setPassword(e.target.value)
    }

    /^.{8,}$/
    // /^ (?=.* [a - z])(?=.* [0 - 9])$ /

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const userExists = users.find((el: any) => {
            return el.email === email
        })

        if (userExists) {
            setEmailInputError("Account already exists with this email")
            setIsEmailInvalid(true)
        } else {
            setEmailInputError("")
            setIsEmailInvalid(false)

            let newUser = [...users]

            newUser.push({
                // id: uuidv4(),
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })

            setUsers(newUser)

            localStorage.setItem("users", JSON.stringify(newUser))

            navigate("/login")
        }
    }

    return (
        <div className={classes.signUpPage}>
            {/* <FormGrid> */}
            <SignUpCard>
                <StyledAccountCircleIcon />
                <form className={classes.signUpContent} onSubmit={handleSubmit}>
                    <div>
                        <NameForm variant="outlined">
                            <StyledInputLabel>First Name</StyledInputLabel>
                            <StyledOutlinedInput
                                label="First Name"
                                name="firstName"
                                type="text"
                                value={firstName}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFirstName(e.target.value) }}
                                required
                            />
                        </NameForm>
                        <NameForm variant="outlined">
                            <StyledInputLabel>Last Name</StyledInputLabel>
                            <StyledOutlinedInput
                                label="Last Name"
                                name="lastName"
                                type="text"
                                value={lastName}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setLastName(e.target.value) }}
                                required
                            />
                        </NameForm>
                    </div>
                    <StyledForm variant="outlined">
                        <StyledInputLabel>Email</StyledInputLabel>
                        <StyledOutlinedInput
                            label="Email"
                            name="email"
                            type="text"
                            value={email}
                            error={isEmailInvalid}
                            onChange={handleValidateEmail}
                            required
                        />
                        {isEmailInvalid && 
                        <div className={classes.errorMessage}>{emailInputError}</div>
                        }
                    </StyledForm>
                    <StyledForm>
                        <StyledInputLabel>Password</StyledInputLabel>
                        <StyledOutlinedInput
                            label="Password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={handlePasswordLength}
                            // helperText={password.length < 8 ? "Password should be at least 8 characters" : (password.length > 16 ? "Password should not exceed 16 characters" : null)}
                            // error={password.length < 8 || password.length > 16}
                            error={isPasswordInvalid}
                            endAdornment={<InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    type="button"
                                    onClick={handleClickShowPassword}
                                    // onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>}
                            required
                        />
                        {isPasswordInvalid && 
                        <div className={classes.errorMessage}>{passwordLengthError}</div>
                        }
                    </StyledForm>
                    <StyledForm>
                        <StyledInputLabel>Confirm Password</StyledInputLabel>
                        <StyledOutlinedInput
                            label="Confirm Password"
                            name="confirmPassword"
                            type={showPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={handleConfirmPassword}
                            error={isPasswordInvalid}
                            endAdornment={<InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    type="button"
                                    onClick={handleClickShowPassword}
                                    // onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>}
                            required
                        />
                        {isPasswordInvalid && 
                        <div className={classes.errorMessage}>{passwordMatchError}</div>
                        }
                    </StyledForm>
                    <SignUpButton color="primary" variant="contained" type="submit">Sign Up</SignUpButton>
                </form>
            </SignUpCard>
            {/* </FormGrid> */}
        </div >
    )
}

