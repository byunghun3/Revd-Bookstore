import React, { FC, useContext, useEffect, useState } from "react"
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
import { LoginContext } from "../../contexts/LoginContext"
import { UsersData } from "../../data/UsersData"
import { styled } from "@mui/system"
import classes from "./Login.module.css"
import { Card } from "@mui/material"

const FormGrid = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "100%"
})

const LoginCard = styled(Card)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "5% 0 10% 0",
    // padding: "1% 0",
    minHeight: "55vh",
    width: "40rem"
    // width: "30%"
})

const StyledAccountCircleIcon = styled(AccountCircleIcon)({
    marginTop: "5%",
    fontSize: "3rem"
})

const UsernameForm = styled(FormControl)({
    margin: "2% 0",
    width: "60%"
})

const PasswordForm = styled(FormControl)({
    marginTop: "2%",
    width: "60%"
})

const StyledInputLabel = styled(InputLabel)({
    fontSize: "1.5rem"
})

const StyledOutlinedInput = styled(OutlinedInput)({
    fontSize: "1.5rem"
})

const ForgotPWButton = styled(Button)({
    textDecoration: "none",
    fontSize: "1.3rem"
})

const LogInButton = styled(Button)({
    margin: "1% 0",
    width: "60%",
    fontSize: "1.3rem"
})

const SignUpButton = styled(Button)({
    textDecoration: "none",
    fontSize: "1.3rem"
})

interface LoginProps {
    // showPassword: boolean
    // isLoggedIn: boolean
}

export const Login: FC<LoginProps> = ({ }) => {
    const navigate = useNavigate()
    const hardCodedUsers = UsersData
    const [email, setEmail] = useState("")
    const [emailMatchError, setEmailMatchError] = useState("")
    const [isEmailInvalid, setIsEmailInvalid] = useState(false)
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [passwordError, setPasswordError] = useState("")
    const [isPasswordInvalid, setIsPasswordInvalid] = useState(false)
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser") || "[]"))
    const users = JSON.parse(localStorage.getItem("users") || JSON.stringify(hardCodedUsers))

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(hardCodedUsers))
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const userExists = users.filter((el: any) => {
            return email === el.email
        }).find((el: any) => {
            return password === el.password
        })

        if (userExists) {
            setEmailMatchError("")
            setIsEmailInvalid(false)

            let newCurrentUser = [...currentUser]

            const currentUserFirstName = users.filter((el: any) => {
                return email === el.email
            }).map((el: any) => {
                return el.firstName
            })

            const currentUserLastName = users.filter((el: any) => {
                return email === el.email
            }).map((el: any) => {
                return el.lastName
            })

            newCurrentUser.push({
                firstName: `${currentUserFirstName}`,
                lastName: `${currentUserLastName}`,
                email: email,
                password: password,
            })

            setCurrentUser(newCurrentUser)

            localStorage.setItem("currentUser", JSON.stringify(newCurrentUser))

            setIsLoggedIn(true)

            // localStorage.setItem("isLoggedIn", isLoggedIn)

            // navigate(-1)
        } else {
            setEmailMatchError("Incorrect email or password")
            setIsEmailInvalid(true)
        }
    }

    return (
        <div className={classes.loginPage}>
            {/* <FormGrid> */}
            <Grid item sm={12} md={6} lg={4}>
                <LoginCard>
                    <StyledAccountCircleIcon />
                    <form onSubmit={handleSubmit}>
                        <div className={emailMatchError !== "" ? classes.passwordErrorMessage : classes.passwordNoErrorMessage}>{emailMatchError}</div>
                        <UsernameForm variant="outlined">
                            <StyledInputLabel>Email</StyledInputLabel>
                            <StyledOutlinedInput
                                label="Email"
                                name="Email"
                                value={email}
                                // error={isEmailInvalid}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }}
                                required />
                        </UsernameForm>
                        <PasswordForm>
                            <StyledInputLabel>Password</StyledInputLabel>
                            <StyledOutlinedInput
                                label="Password"
                                name="Password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                // error={isPasswordInvalid}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }}
                                endAdornment={<InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        // size="large"
                                        onClick={handleClickShowPassword}
                                        // onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>}
                                required />
                            <div className={passwordError !== "" ? classes.passwordErrorMessage : classes.passwordNoErrorMessage}>{passwordError}</div>
                        </PasswordForm>
                        <div>
                            {/* <span>
                            <Checkbox />
                            <span>Remember me</span>
                        </span> */}
                            <Link className={classes.link} to="/forgotpassword">
                                <ForgotPWButton type="button">
                                    Forgot password?
                                </ForgotPWButton>
                            </Link>
                        </div>
                        <LogInButton color="primary" variant="contained" type="submit">
                            Log in
                        </LogInButton>
                        <div className={classes.signUpContent}>
                            <span className={classes.signUpText}>Don&apos;t have account?</span>
                            <Link className={classes.link} to="/signup">
                                <SignUpButton type="button">
                                    Sign up
                                </SignUpButton>
                            </Link>
                        </div>
                    </form>
                </LoginCard>
            </Grid>
            {/* </FormGrid> */}
            {/* <div>ehllo</div> */}
        </div >
    )
}

