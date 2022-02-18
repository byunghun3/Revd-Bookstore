import React, { useState, useEffect, useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { styled } from "@mui/system"
import Logo from "../../assets/icons/bookstore-logo.png"
import { LoginContext } from "../../contexts/LoginContext"
import classes from "./Header.module.css"

const HeaderToolbar = styled(Toolbar)({
    // display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    maxWidth: "100%",
    // backgroundColor: "#d7ccc8",
    // backgroundColor: "#01579b",
    // backgroundColor: "#4db6ac",
    // backgroundColor: "#66bb6a",
    // backgroundColor: "#80cbc4",
    // width: "100%"
})

const NavBarToolbar = styled(Toolbar)({
    maxWidth: "100%",
    // width: "100%",
    // backgroundColor: "#d7ccc8"
    // backgroundColor: "#01579b"
    // backgroundColor: "#4db6ac"
    // backgroundColor: "#66bb6a"
    // backgroundColor: "#80cbc4",
    // backgroundColor: "#607d8b",
    // backgroundColor: "#795548",
    // backgroundColor: "#e57373",
    // backgroundColor: "#1565c0",
    // backgroundColor: "#0d47a1",
    // backgroundColor: "#1a237e",
    // backgroundColor: "#3f51b5",
    // backgroundColor: "#311b92",
    // backgroundColor: "#58B19F",
    backgroundColor: "#487eb0",
})

const StyledAccountIcon = styled(AccountCircleIcon)({
    verticalAlign: "middle",
    marginRight: "0.25rem",
    fontSize: "2.5rem",
    color: "black"
    // color: "white"
})

const StyledCartIcon = styled(ShoppingCartIcon)({
    verticalAlign: "middle",
    marginLeft: "0.25rem",
    fontSize: "2.5rem",
    color: "black"
    // color: "white"
})

function Header() {
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    // const users = JSON.parse(localStorage.getItem("users") || "[]")
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]")

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
        // localStorage.setItem("users", JSON.stringify(users))
    }, [cart])

    const greeting = currentUser.map((el: any) => {
        return <div key={el.email}>Hello, {el.firstName}</div>
    })

    return (
        <div>
            <AppBar
                color="inherit"
                elevation={0}
                position="sticky"
            >
                <HeaderToolbar>
                    <div className={classes.leftSection}>
                        {/* <img className={classes.logo} src={Logo} alt="" /> */}
                        <Link to="/" className={classes.headerLink}>
                            <span className={classes.title}>Revd Bookstore</span>
                        </Link>
                    </div>
                    <div className={classes.rightSection}>
                        {isLoggedIn ? <div className={classes.greeting}>{greeting}</div> : null}
                        {isLoggedIn ?
                            <Link to="/profile" className={classes.headerLink}>
                                <StyledAccountIcon />
                            </Link> :
                            <Link to="/login" className={classes.headerLink}>
                                <StyledAccountIcon />
                            </Link>
                        }
                        <Link to="/cart" className={classes.headerLink}>
                            <StyledCartIcon />
                            <span className={classes.cartLength}>({cart.length})</span>
                        </Link>
                    </div>
                </HeaderToolbar>
                <NavBarToolbar>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)}>About</NavLink>
                    <NavLink to="/browse" className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)}>Browse</NavLink>
                    <NavLink to="/suggest" className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)}>Suggest</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)}>Contact</NavLink>
                </NavBarToolbar>
            </AppBar>
        </div>
    )
}

export default Header
