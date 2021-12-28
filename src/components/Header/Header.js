import React from 'react';
import Logo from '../../assets/icons/bookstore-logo.png';
import { AppBar, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import classes from './Header.module.css';

const useStyles = makeStyles({
    toolbar: {
        justifyContent: 'space-between'
    }
})

function Header() {
    const styles = useStyles();

    return (
        <div>
            <AppBar
                    color="inherit">
                <Toolbar
                    className={styles.toolbar}
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
            </AppBar>
        </div>
    )
}

export default Header;
