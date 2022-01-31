import React, { useState, useContext, FC } from "react"
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
import { styled } from "@mui/system"
import classes from "./Login.module.css"
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
    isLoggedIn: boolean
}

export const Login: FC<LoginProps> = ({ }) => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [emailMatchError, setEmailMatchError] = useState("")
    const [isEmailInvalid, setIsEmailInvalid] = useState(false)
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [passwordError, setPasswordError] = useState("")
    const [isPasswordInvalid, setIsPasswordInvalid] = useState(false)
    const { setIsLoggedIn } = useContext(LoginContext)
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser") || "[]"))
    const users = JSON.parse(localStorage.getItem("users") || "[]")

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
            // navigate(-1)
        } else {
            setEmailMatchError("Incorrect email or password")
            setIsEmailInvalid(true)
        }
    }

    return (
        <div className={classes.loginPage}>
            <FormGrid>
                <LoginCard>
                    <AccountCircleIcon />
                    <form onSubmit={handleSubmit}>
                        <div className={emailMatchError !== "" ? classes.passwordErrorMessage : classes.passwordNoErrorMessage}>{emailMatchError}</div>
                        <UsernameForm variant="outlined">
                            <FormInputLabel>Email</FormInputLabel>
                            <OutlinedInput
                                label="Email"
                                name="Email"
                                value={email}
                                // error={isEmailInvalid}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }}
                                required />
                        </UsernameForm>
                        <PasswordForm>
                            <InputLabel>Password</InputLabel>
                            <OutlinedInput
                                label="Password"
                                name="Password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                // error={isPasswordInvalid}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }}
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
                            <div className={passwordError !== "" ? classes.passwordErrorMessage : classes.passwordNoErrorMessage}>{passwordError}</div>
                        </PasswordForm>
                        <div>
                            <span>
                                <Checkbox />
                                <span>Remember me</span>
                            </span>
                            <Link className={classes.link} to="/forgotpassword">
                                <ForgotPWButton type="button">
                                    Forgot password?
                                </ForgotPWButton>
                            </Link>
                        </div>
                        <LogInButton type="submit" color="primary" variant="contained">
                            Log in
                        </LogInButton>
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
            </FormGrid>
            {/* <div>ehllo</div> */}
        </div >
    )
}

