import React, { useState, FC } from "react"
import { Link, useNavigate } from "react-router-dom"
import Grid from "@mui/material/Grid"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import OutlinedInput from "@mui/material/OutlinedInput"
import Button from "@mui/material/Button"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { styled } from "@mui/system"
import classes from "./ForgotPassword.module.css"
import { Card } from "@mui/material"

const StyledAccountCircleIcon = styled(AccountCircleIcon)({
    flex: "1",
    marginTop: "5%",
    fontSize: "3rem"
})

const ForgotPWCard = styled(Card)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "5% 0 10% 0",
    minHeight: "55vh",
    width: "40rem"

})

const EmailForm = styled(FormControl)({
    margin: "2% 0",
    width: "80%",
    // border: "solid black"

})

const StyledInputLabel = styled(InputLabel)({
    fontSize: "1.5rem"
})

const StyledOutlinedInput = styled(OutlinedInput)({
    fontSize: "1.5rem"
})

const BackToLoginButton = styled(Button)({
    margin: "2% 0",
    // width: "41%",
    textDecoration: "none",
    fontSize: "1.3rem"
})

const SendLinkButton = styled(Button)({
    margin: "3% 0 5% 0",
    width: "60%",
    fontSize: "1.3rem"
})

const SignUpButton = styled(Button)({
    textDecoration: "none",
    fontSize: "1.3rem"
})

interface LoginProps {
    // showPassword: boolean
}

export const ForgotPassword: FC<LoginProps> = ({ }) => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [showForgotPassword, setShowForgotPassword] = useState(true)
    const [resetLinkSent, setResetLinkSent] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const users = JSON.parse(localStorage.getItem("users") || "[]")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const emailExists = users.find((el: any) => {
            return email === el.email
        })

        if (emailExists) {
            // alert(`Reset link has been sent to ${email}!`)
            setShowForgotPassword(false)
            setEmailError(false)
            setResetLinkSent(true)
        } else {
            setShowForgotPassword(true)
            setEmailError(true)
        }
    }

    return (
        <div className={classes.forgotPasswordPage}>
            {/* {showForgotPassword && */}
            <ForgotPWCard>
                <StyledAccountCircleIcon />
                <form className={classes.forgotPasswordContent} onSubmit={handleSubmit}>
                    {showForgotPassword &&
                        <div>
                            <div className={classes.forgotPW}>Forgot your password?</div>
                            <div className={classes.enterEmail}>Please enter your email address</div>
                            <EmailForm variant="outlined">
                                <StyledInputLabel>Email</StyledInputLabel>
                                <StyledOutlinedInput
                                    label="Email"
                                    name="email"
                                    value={email}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }}
                                    required />
                                {emailError && <div className={classes.errorMessage}>The email you entered does not exist</div>}
                            </EmailForm>
                            <SendLinkButton type="submit" color="primary" variant="contained">
                                Send reset link
                            </SendLinkButton>
                            <div>
                                <Link className={classes.link} to="/login">
                                    <BackToLoginButton type="button">
                                        Back to Login
                                    </BackToLoginButton>
                                </Link>
                            </div>
                            <div className={classes.signUpContent}>
                                <span className={classes.signUpText}>Don&apos;t have account?</span>
                                <Link className={classes.link} to="/signup">
                                    <SignUpButton type="button">
                                        Sign up
                                    </SignUpButton>
                                </Link>
                            </div>
                        </div>
                    }
                    {resetLinkSent &&
                        <div className={classes.linkSentContent}>
                            <div className={classes.linkSent}>Password reset link has been sent to {email}!</div>
                            <div>
                                <Link className={classes.link} to="/login">
                                    <BackToLoginButton type="button">
                                        Back to login
                                    </BackToLoginButton>
                                </Link>
                            </div>
                        </div>
                    }
                </form>
            </ForgotPWCard>
            {/* } */}
            {/* {resetLinkSent &&
                <ForgotPWCard>
                    <StyledAccountCircleIcon />
                    <div className={classes.linkSent}>Password reset link has been sent to {email}!</div>
                    <div>
                        <Link className={classes.link} to="/login">
                            <BackToLoginButton type="button">
                                Back to login
                            </BackToLoginButton>
                        </Link>
                    </div>
                </ForgotPWCard>
            } */}
        </div >
    )
}

