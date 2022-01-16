import React, { useState, FC } from "react"
import { Link, useNavigate } from "react-router-dom"
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
import classes from "./Login.module.css"
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

interface LoginProps {
    // showPassword: boolean
}

export const Login: FC<LoginProps> = ({ }) => {
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        `set${e.currentTarget.name} = e.currentTarget.value`
        // console.log(username, password)
    }

    const handleClickShowPassword = () => {
        setShowPassword(
            !showPassword
        )
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert("signed in!")

        navigate(-1)
    }
    return (
        <div className={classes.loginPage}>
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
                        <UsernameForm variant="outlined">
                            <FormInputLabel>Username</FormInputLabel>
                            <OutlinedInput
                                label="Username"
                                name="Username"
                                value={username}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setUsername(e.target.value) }}
                                required />
                        </UsernameForm>
                        <PasswordForm>
                            <InputLabel>Password</InputLabel>
                            <OutlinedInput
                                label="Password"
                                name="Password"
                                type={showPassword ? "text" : "password"}
                                value={password}
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
                        </PasswordForm>

                        <span><Checkbox />Remember me
                            <Button type="button">Forgot password?</Button></span>
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

