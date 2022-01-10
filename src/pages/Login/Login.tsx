import React, { useState } from "react"
import Grid from "@mui/material/Grid"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import Checkbox from "@mui/material/Checkbox"
import Button from "@mui/material/Button"
import { styled } from "@mui/system"
import Header from "../../components/Header/Header"

const FormGrid = styled(Grid)({
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column"

})

interface Props {

}

export const Login = (props: Props) => {
    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(
            !showPassword
        )
}
return (
    <div>
        <Header />
        <FormGrid>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <OutlinedInput required />
            </FormControl>
            <FormControl>
                <InputLabel>Password</InputLabel>
                <OutlinedInput
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
            </FormControl>
            <Checkbox />Remember me
            <Button>Forgot password?</Button>
            <Button type="submit" color="primary" variant="contained">Log in</Button>
            <Button>Sign up</Button>
        </FormGrid>
    </div>
)
}

