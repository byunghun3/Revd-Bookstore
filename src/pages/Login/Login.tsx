import React from "react"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import OutlinedInput from "@mui/material/OutlinedInput"
import Checkbox from "@mui/material/Checkbox"
import Button from "@mui/material/Button"
import Header from "../../components/Header/Header"


interface Props {

}

export const Login = (props: Props) => {
    return (
        <div>
            <Header />
            <FormControl>
                <InputLabel>Username</InputLabel>
                <OutlinedInput required />
            </FormControl>
            <FormControl>
                <InputLabel>Password</InputLabel>
                <OutlinedInput required />
            </FormControl>
            <Checkbox />Remember me
            <Button>Forgot password?</Button>
            <Button>Log in</Button>
            <Button>Sign up</Button>
        </div>
    )
}

