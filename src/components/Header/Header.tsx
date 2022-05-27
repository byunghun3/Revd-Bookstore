import React, { FC, useState, useEffect, useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AppBar, Toolbar } from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import MenuIcon from "@mui/icons-material/Menu"
import { LoginContext } from "../../contexts/LoginContext"
import { styled } from "@mui/system"
import classes from "./Header.module.css"

const HeaderAppbar = styled(AppBar)({

})

const HeaderToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    maxWidth: "100%",
    "@media (max-width: 350px)": {
        padding: "0 3%"
    }
})

const StyledAccountIcon = styled(AccountCircleIcon)({
    verticalAlign: "middle",
    marginRight: "0.3rem",
    color: "black",
    fontSize: "2.7rem",
    "@media (max-width: 320px)": {
        fontSize: "2.3rem"
    }
})

const StyledCartIcon = styled(ShoppingCartIcon)({
    verticalAlign: "middle",
    marginLeft: "0.3rem",
    color: "black",
    fontSize: "2.7rem",
    "@media (max-width: 320px)": {
        fontSize: "2.3rem"
    }
})

const NavBar = styled(Toolbar)({
    minHeight: "7rem",
    maxWidth: "100%",
    backgroundColor: "#6993ab"
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
    color: "white",
    fontSize: "4rem",
    cursor: "pointer",
    "@media (min-width: 501px)": {
        display: "none"
    }
})

export const Header: FC = () => {
    const { isLoggedIn } = useContext(LoginContext)
    const [isExpanded, setIsExpanded] = useState(false)
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]")

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const greeting = currentUser.map((user: any) => {
        return <div key={user.email}>Hello, {user.firstName}</div>
    })

    const handleExpandMenu = () => {
        setTimeout(() => { setIsExpanded(!isExpanded) }, 200)
    }

    return (
        // <div>
        <AppBar
            color="inherit"
            elevation={0}
            position="sticky"
            sx={{
                "width": "100%",
                "padding": "0"
            }}
        >
            <HeaderToolbar>
                <div className={classes.leftSection}>
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
        // </div>
    )
}