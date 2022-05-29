import React, { FC } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import classes from "./HeaderTwo.module.css";

const HeaderToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    maxWidth: "100%"
});

export const HeaderTwo: FC = () => {
    return (
        <AppBar
            color="inherit"
            elevation={0}
            position="relative"
        >
            <HeaderToolbar>
                <Link to="/" className={classes.homeLink}>
                    <span className={classes.title}>Revd Bookstore</span>
                </Link>
            </HeaderToolbar>
        </AppBar>
    );
};