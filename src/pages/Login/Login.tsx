import React, { FC, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { InputLabel, FormControl, OutlinedInput, InputAdornment, IconButton, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { LoginContext } from "../../contexts/LoginContext";
import { UsersData } from "../../data/UsersData";
import { IUser } from "../../interfaces/Interfaces";
import { styled } from "@mui/system";
import classes from "./Login.module.css";
import { Card } from "@mui/material";

const LoginCard = styled(Card)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "5% 0 10% 0",
    minHeight: "55vh",
    width: "40rem",
    "@media (max-width: 499px)": {
        minHeight: "45vh",
        width: "90vw",
        marginTop: "20%"
    }
});

const StyledAccountCircleIcon = styled(AccountCircleIcon)({
    flex: "1",
    margin: "5% 0",
    fontSize: "3.5rem"
});

const EmailForm = styled(FormControl)({
    margin: "1% 0 3% 0",
    width: "80%"
});

const PasswordForm = styled(FormControl)({
    margin: "3% 0",
    width: "80%"
});

const StyledInputLabel = styled(InputLabel)({
    fontSize: "1.5rem"
});

const StyledOutlinedInput = styled(OutlinedInput)({
    fontSize: "1.5rem"
});

const ForgotPWButton = styled(Button)({
    margin: "2% 0",
    textDecoration: "none",
    fontSize: "1.3rem"
});

const LogInButton = styled(Button)({
    margin: "2% 0",
    width: "60%",
    fontSize: "1.3rem"
});

const SignUpButton = styled(Button)({
    textDecoration: "none",
    fontSize: "1.3rem"
});

export const Login: FC = () => {
    const hardCodedUsers: IUser[] = UsersData;
    const [email, setEmail] = useState<string>("");
    const [isUserInvalid, setIsUserInvalid] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { setIsLoggedIn } = useContext(LoginContext);
    const [currentUser, setCurrentUser] = useState<IUser[]>(JSON.parse(localStorage.getItem("currentUser") || "[]"));
    const users: IUser[] = JSON.parse(localStorage.getItem("users") || JSON.stringify(hardCodedUsers));

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const handleClickShowPassword = (): void => {
        setShowPassword(
            !showPassword
        );
    };

    const handleLogIn = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const userExists = users.filter((user: IUser) => {
            return email === user.email;
        }).find((user: IUser) => {
            return password === user.password;
        });

        if (userExists) {
            let newCurrentUser = [];

            const currentUserFirstName = users.filter((user: IUser) => {
                return email === user.email;
            }).map((user: IUser) => {
                return user.firstName;
            });

            const currentUserLastName = users.filter((user: IUser) => {
                return email === user.email;
            }).map((user: IUser) => {
                return user.lastName;
            });

            newCurrentUser.push({
                firstName: `${currentUserFirstName}`,
                lastName: `${currentUserLastName}`,
                email: email,
                password: password,
            });

            setCurrentUser(newCurrentUser);

            localStorage.setItem("currentUser", JSON.stringify(newCurrentUser));

            setIsLoggedIn(true);
        } else {
            setIsUserInvalid(true);
        }
    };

    return (
        <div className={classes.loginPage}>
            <LoginCard>
                <StyledAccountCircleIcon />
                <form className={classes.loginContent} onSubmit={(e) => handleLogIn(e)}>
                    {isUserInvalid && <div className={classes.errorMessage}>Incorrect email or password</div>}
                    <EmailForm variant="outlined">
                        <StyledInputLabel>Email</StyledInputLabel>
                        <StyledOutlinedInput
                            label="Email"
                            name="email"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); }}
                            required />
                    </EmailForm>
                    <PasswordForm>
                        <StyledInputLabel>Password</StyledInputLabel>
                        <StyledOutlinedInput
                            label="Password"
                            name="Password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value); }}
                            endAdornment={<InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    type="button"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>}
                            required />
                    </PasswordForm>
                    <div>
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
        </div >
    );
};