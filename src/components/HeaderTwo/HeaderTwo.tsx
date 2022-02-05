import React from "react"
import { Link } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import { styled } from "@mui/system"
import classes from "./HeaderTwo.module.css"


const HeaderToolbar = styled(Toolbar)({
    justifyContent: "space-between",
    maxWidth: "100%"
})

interface HeaderTwoProps {

}

export const HeaderTwo = (props: HeaderTwoProps) => {
    return (
        <div>
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
        </div>
    )
}