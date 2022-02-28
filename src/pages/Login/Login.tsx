import React, { FC, useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Grid, InputLabel, FormControl, OutlinedInput, InputAdornment, IconButton, Checkbox, Button } from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { LoginContext } from "../../contexts/LoginContext"
import { UsersData } from "../../data/UsersData"
import { styled } from "@mui/system"
import classes from "./Login.module.css"
import { Card } from "@mui/material"

const LoginCard = styled(Card)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "5% 0 10% 0",
    // padding: "1% 0",
    minHeight: "55vh",
    width: "40rem",
    // width: "30%"
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

const EmailForm = styled(FormControl)({
    margin: "1% 0 3% 0",
    width: "80%"
})

const PasswordForm = styled(FormControl)({
    margin: "3% 0",
    // marginTop: "2%",
    width: "80%"
})

const StyledInputLabel = styled(InputLabel)({
    fontSize: "1.5rem"
})

const StyledOutlinedInput = styled(OutlinedInput)({
    fontSize: "1.5rem"
})

const ForgotPWButton = styled(Button)({
    margin: "2% 0",
    textDecoration: "none",
    fontSize: "1.3rem"
})

const LogInButton = styled(Button)({
    margin: "2% 0",
    width: "60%",
    fontSize: "1.3rem"
})

const SignUpButton = styled(Button)({
    textDecoration: "none",
    fontSize: "1.3rem"
})

export const Login: FC = () => {
    const navigate = useNavigate()
    const hardCodedUsers = UsersData
    const [email, setEmail] = useState("")
    const [isUserInvalid, setIsUserInvalid] = useState(false)
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const { setIsLoggedIn } = useContext(LoginContext)
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser") || "[]"))
    const users = JSON.parse(localStorage.getItem("users") || JSON.stringify(hardCodedUsers))


    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
    }, [users])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        `set${e.currentTarget.name} = e.currentTarget.value`
        // console.log(username, password)
    }

    const handleClickShowPassword = () => {
        setShowPassword(
            !showPassword
        )
    }

    console.log(email)

    const handleLogIn = (e: React.FormEvent<HTMLFormElement>) => {
        // const handleLogIn = () => {
        e.preventDefault()
        const userExists = users.filter((el: any) => {
            return email === el.email
        }).find((el: any) => {
            return password === el.password
        })

        if (userExists) {
            let newCurrentUser = []

            const currentUserFirstName = users.filter((user: any) => {
                return email === user.email
            }).map((user: any) => {
                return user.firstName
            })

            const currentUserLastName = users.filter((user: any) => {
                return email === user.email
            }).map((user: any) => {
                return user.lastName
            })

            newCurrentUser.push({
                firstName: `${currentUserFirstName}`,
                lastName: `${currentUserLastName}`,
                email: email,
                password: password,
            })

            setCurrentUser(newCurrentUser)

            localStorage.setItem("currentUser", JSON.stringify(newCurrentUser))

            // navigate(-1)

            setIsLoggedIn(true)
        } else {
            setIsUserInvalid(true)
        }
    }

    return (
        <div className={classes.loginPage}>
            <LoginCard>
                <StyledAccountCircleIcon />
                {/* <div className={classes.loginContent}> */}
                <form className={classes.loginContent} onSubmit={(e) => handleLogIn(e)}>
                    {isUserInvalid && <div className={classes.errorMessage}>Incorrect email or password</div>}
                    {/* <div className={userMatchError !== "" ? classes.passwordErrorMessage : classes.passwordNoErrorMessage}>{userMatchError}</div> */}
                    <EmailForm variant="outlined">
                        <StyledInputLabel>Email</StyledInputLabel>
                        <StyledOutlinedInput
                            label="Email"
                            name="email"
                            value={email}
                            // error={isEmailInvalid}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }}
                            required />
                    </EmailForm>
                    <PasswordForm>
                        <StyledInputLabel>Password</StyledInputLabel>
                        <StyledOutlinedInput
                            label="Password"
                            name="Password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }}
                            endAdornment={<InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    // size="large"
                                    type="button"
                                    onClick={handleClickShowPassword}
                                    // onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>}
                            required />
                        {/* <div className={passwordError !== "" ? classes.passwordErrorMessage : classes.passwordNoErrorMessage}>{passwordError}</div> */}
                    </PasswordForm>
                    {/* <span>
                            <Checkbox />
                            <span>Remember me</span>
                        </span> */}
                    <div>
                        <Link className={classes.link} to="/forgotpassword">
                            <ForgotPWButton type="button">
                                Forgot password?
                            </ForgotPWButton>
                        </Link>
                    </div>
                    {/* <form onSubmit={handleLogIn}> */}
                    <LogInButton color="primary" variant="contained" type="submit">
                        Log in
                    </LogInButton>
                    {/* </form> */}
                    <div className={classes.signUpContent}>
                        <span className={classes.signUpText}>Don&apos;t have account?</span>
                        <Link className={classes.link} to="/signup">
                            <SignUpButton type="button">
                                Sign up
                            </SignUpButton>
                        </Link>
                    </div>
                    {/* </div> */}
                </form>
            </LoginCard>
        </div >
    )
}

