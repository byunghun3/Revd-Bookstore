import React from "react"
import { Link, NavLink } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { styled } from "@mui/system"
import Logo from "../../assets/icons/bookstore-logo.png"
import classes from "./Header.module.css"

const HeaderToolbar = styled(Toolbar)({
    justifyContent: "space-between"
})

const NavBarToolbar = styled(Toolbar)({
    backgroundColor: "#d7ccc8"
})

function Header() {
    return (
        <div>
            <AppBar
                color="inherit"
                elevation={0}
                position="sticky"
            >
                <HeaderToolbar
                    width="100%"
                >
                    <div>
                        <img className={classes.logo} src={Logo} alt="" />
                        <Link exact to="/" className={classes.HomeLink}>
                            <span className={classes.title}>Revd Bookstore</span>
                        </Link>
                    </div>
                    <div>
                        <Link exact to="/login" ><AccountCircleIcon /></Link>
                        <ShoppingCartIcon />
                    </div>
                </HeaderToolbar>
                <NavBarToolbar>
                    <nav className={classes.nav}>
                        <NavLink exact to="/about" className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)}>About</NavLink>
                        <NavLink to="/browse" className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)}>Browse</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)}>Contact</NavLink>
                    </nav>
                </NavBarToolbar>
            </AppBar>
        </div>
    )
}

export default Header
