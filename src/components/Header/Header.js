import React, { useState, useEffect, useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { styled } from "@mui/system"
import Logo from "../../assets/icons/bookstore-logo.png"
// import { UserContext } from "../../utils/auth"
import classes from "./Header.module.css"

const HeaderToolbar = styled(Toolbar)({
    justifyContent: "space-between",
    maxWidth: "100%"
})

const NavBarToolbar = styled(Toolbar)({
    backgroundColor: "#d7ccc8"
})

const StyledAccountIcon = styled(AccountCircleIcon)({
    verticalAlign: "middle",
    color: "black"
})

const StyledCartIcon = styled(ShoppingCartIcon)({
    verticalAlign: "middle",
    color: "black"

})

function Header() {
    // const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]")


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
        if (currentUser.length > 0) {
            setIsLoggedIn(true)
        } else { setIsLoggedIn(false) }
    }, [cart, currentUser])

    return (
        <div>
            <AppBar
                color="inherit"
                elevation={0}
                position="sticky"
            >
                <HeaderToolbar>
                    <div>
                        <img className={classes.logo} src={Logo} alt="" />
                        <Link to="/" className={classes.headerLink}>
                            <span className={classes.title}>Revd Bookstore</span>
                        </Link>
                    </div>
                    <button onClick={() => localStorage.removeItem("currentUser")}>logout</button>
                    <div>
                        {isLoggedIn ? <div>Hello, {currentUser.firstName} {currentUser.lastName}</div> : null}
                        {/* <div>Hello, {currentUser[0].firstName} {currentUser[0].lastName}</div> */}
                        <Link to="/login" className={classes.headerLink}>
                            <StyledAccountIcon />
                        </Link>
                        <Link to="/cart" className={classes.headerLink}>
                            <StyledCartIcon />
                            <span className={classes.cartLength}>({cart.length})</span>
                        </Link>
                    </div>
                </HeaderToolbar>
                <NavBarToolbar>
                    <nav className={classes.nav}>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)}>About</NavLink>
                        <NavLink to="/browse" className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)}>Browse</NavLink>
                        <NavLink to="/suggest" className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)}>Suggest</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)}>Contact</NavLink>
                    </nav>
                </NavBarToolbar>
            </AppBar>
        </div>
    )
}

export default Header
