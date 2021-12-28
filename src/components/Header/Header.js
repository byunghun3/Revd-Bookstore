import React from 'react';
import classes from './Header.module.css';
import Logo from '../../assets/icons/bookstore-logo.png';
import { AppBar, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    header: {
        justifyContent: 'space-between'
    },
    navBar: {
        backgroundColor: '#d7ccc8'
    }
})

function Header() {
    const styles = useStyles();

    return (
        <div>
            <AppBar
                    color="inherit"
                    elevation={0}>
                <Toolbar
                    className={styles.header}
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
                    <NavLink to='/about' className={classes.navlink}>About</NavLink>
                    <NavLink to='/browse' className={classes.navlink}>Browse</NavLink>
                    <NavLink to='/contact' className={classes.navlink}>Contact</NavLink>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;
