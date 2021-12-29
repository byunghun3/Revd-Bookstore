import React from 'react';
import Logo from '../../assets/icons/bookstore-logo.png';
import { AppBar, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/system';
import classes from './Header.module.css';

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
                        <span className={classes.title}>Revd Bookstore</span>
                    </div>
                    <div>
                        Log In
                        Cart
                    </div>
                </HeaderToolbar>
                <NavBarToolbar>
                    <nav className={classes.nav}>
                    <NavLink exact to='/about' className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)}>About</NavLink>
                    <NavLink to='/browse' className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)}>Browse</NavLink>
                    <NavLink to='/contact' className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)}>Contact</NavLink>
                    </nav>
                </NavBarToolbar>
            </AppBar>
      </div>
    )
}

export default Header;
