import React from 'react';
import classes from './Header.module.css';
import Logo from '../../assets/icons/bookstore-logo.png';
import { AppBar, Toolbar } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    header: {
        justifyContent: "space-between",
        // maxWidth: '100vw'
    },
    navBar: {
        backgroundColor: "#d7ccc8",
        // margin: '0'
    }
})

function Header() {
    const styles = useStyles();

    return (
        <div>
            <AppBar
                color="inherit"
                elevation={0}
                position="sticky"
                // width="100%"
            >
                <Toolbar
                    className={styles.header}
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
                </Toolbar>
                <Toolbar className={styles.navBar}>
                    <nav className={classes.nav}>
                    <NavLink exact to='/about' className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)}>About</NavLink>
                    <NavLink to='/browse' className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)}>Browse</NavLink>
                    <NavLink to='/contact' className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)}>Contact</NavLink>
                    </nav>
                </Toolbar>
            </AppBar>
      </div>
    )
}

export default Header;
