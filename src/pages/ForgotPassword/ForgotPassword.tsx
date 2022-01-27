import React, { useState, FC } from "react"
import { Link, useNavigate } from "react-router-dom"
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
import classes from "./ForgotPassword.module.css"
import { Card } from "@mui/material"

const FormGrid = styled(Grid)({
    height: "100%",
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
    height: "70vh",
    width: "30vw",

})

const UsernameForm = styled(FormControl)({
    margin: "20px",
    width: "80%",

})

const PasswordForm = styled(FormControl)({
    margin: "20px",
    width: "80%",

})

const FormInputLabel = styled(InputLabel)({
    margin: "0"
})

const ForgotPWButton = styled(Button)({
    textDecoration: "none"
})

const LogInButton = styled(Button)({
    width: "80%"
})

const SignUpButton = styled(Button)({
    textDecoration: "none"
})

interface LoginProps {
    // showPassword: boolean
}

export const ForgotPassword: FC<LoginProps> = ({ }) => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [showForgotPassword, setShowForgotPassword] = useState(true)
    const [resetLinkSent, setResetLinkSent] = useState(false)
    const [emailError, setEmailError] = useState(true)
    const users = JSON.parse(localStorage.getItem("users") || "[]")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const emailExists = users.find((el: any) => {
            return email === el.email
        })

        if (emailExists) {
            alert(`Reset link has been sent to ${email}!`)
            setShowForgotPassword(false)
            setEmailError(false)
            setResetLinkSent(true)
            // setIsLoggedIn(true)
            // navigate(-1)
        } else {
            setShowForgotPassword(false)
            setEmailError(true)
        }
    }

    return (
        <div className={classes.forgotPasswordPage}>
            <FormGrid>
                {showForgotPassword &&
                    <LoginCard>
                        <AccountCircleIcon />
                        <div>Forgot your password?</div>
                        <div>Please enter your email address</div>
                        <form onSubmit={handleSubmit}>
                            <UsernameForm variant="outlined">
                                <FormInputLabel>Email</FormInputLabel>
                                <OutlinedInput
                                    label="Email"
                                    name="Email"
                                    value={email}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }}
                                    required />
                                {emailError && <div>The email you entered does not exist</div>}
                            </UsernameForm>
                            <LogInButton type="submit" color="primary" variant="contained">
                                Send reset link
                            </LogInButton>
                            <div>
                                <Link className={classes.link} to="/login">
                                    <Button type="button">
                                        Back to login
                                    </Button>
                                </Link>
                            </div>
                            <div>
                                <span>Don&apos;t have account?</span>
                                <Link className={classes.link} to="/signup">
                                    <Button type="button">
                                        Sign up
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </LoginCard>
                }
                {resetLinkSent &&
                    <LoginCard>
                        <AccountCircleIcon />
                        <div>Password reset link has been sent to {email}!</div>
                        <div>
                            <Link className={classes.link} to="/login">
                                <Button type="button">
                                    Back to login
                                </Button>
                            </Link>
                        </div>
                    </LoginCard>
                }
            </FormGrid>
            {/* <div>ehllo</div> */}
        </div >
    )
}

