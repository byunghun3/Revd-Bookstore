import React, { FC, useState, useEffect, useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AppBar, Toolbar } from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import MenuIcon from "@mui/icons-material/Menu"
import Logo from "../../assets/icons/bookstore-logo.png"
import { LoginContext } from "../../contexts/LoginContext"
import { styled } from "@mui/system"
import classes from "./Header.module.css"

const HeaderToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    maxWidth: "100%",
    // backgroundColor: "#ebeef0"
    // yellow
    // backgroundColor: "#d7ccc8",
    // teal
    // backgroundColor: "#4db6ac",
    // turquoise
    // backgroundColor: "#80cbc4",
    // width: "100%"
    // light blue
    // backgroundColor: "#487eb0",
})

const StyledAccountIcon = styled(AccountCircleIcon)({
    verticalAlign: "middle",
    marginRight: "0.3rem",
    color: "black",
    fontSize: "2.7rem",
    // color: "white"
})

const StyledCartIcon = styled(ShoppingCartIcon)({
    verticalAlign: "middle",
    marginLeft: "0.3rem",
    color: "black",
    fontSize: "2.7rem",
    // color: "white"
})

const NavBar = styled(Toolbar)({
    minHeight: "7rem",
    maxWidth: "100%",
    // "@media (max-width: 500px)": {
    // position: "relative",
    // display: "flex"
    // justifyContent: "flex-end",
    //     alignItems: "center",
    // },
    // border: "solid black",
    // width: "100%",
    // brown
    // backgroundColor: "#795548",
    // backgroundColor: "#8a5745",
    // light green
    // backgroundColor: "#58B19F",
    // blue gray
    // backgroundColor: "#607d8b",
    // backgroundColor: "#7793a1",
    // backgroundColor: "#83a3b5",
    backgroundColor: "#6993ab",

})

const ExpandedNavBar = styled(Toolbar)({
    minHeight: "7rem",
    maxWidth: "100%",
    backgroundColor: "black",
    color: "white",
    fontSize: "1.7rem",
    transition: "ease 0.3s",
    "&:hover": {
        backgroundColor: "white",
        color: "black",
        cursor: "pointer"
    }
})

const StyledMenuIcon = styled(MenuIcon)({
    position: "absolute",
    top: "50%",
    right: "0",
    transform: "translate(-50%, -50%)",
    // float: "right",
    // display: "block",
    color: "white",
    fontSize: "4rem",
    cursor: "pointer",
    "@media (min-width: 501px)": {
        display: "none"
    }
})

export const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)
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

    const handleExpandMenu = () => {
        setTimeout(() => { setIsExpanded(!isExpanded) }, 200)
    }

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
                <NavBar>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)}>About</NavLink>
                    <NavLink to="/browse" className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)}>Browse</NavLink>
                    <NavLink to="/suggest" className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)}>Suggest</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)}>Contact</NavLink>
                    <StyledMenuIcon onClick={handleExpandMenu} />
                </NavBar>
                {isExpanded && <div>
                    <NavLink to="/about" className={classes.expandedNavLink} onClick={handleExpandMenu}>
                        <ExpandedNavBar>About</ExpandedNavBar>
                    </NavLink>
                    <NavLink to="/browse" className={classes.expandedNavLink} onClick={handleExpandMenu}>
                        <ExpandedNavBar>Browse</ExpandedNavBar>
                    </NavLink>
                    <NavLink to="/suggest" className={classes.expandedNavLink} onClick={handleExpandMenu}>
                        <ExpandedNavBar>Suggest</ExpandedNavBar>
                    </NavLink>
                    <NavLink to="/contact" className={classes.expandedNavLink} onClick={handleExpandMenu}>
                        <ExpandedNavBar>Contact</ExpandedNavBar>
                    </NavLink>
                </div>
                }
            </AppBar>
        </div>
    )
}