import React from 'react';
import classes from './Header.module.css';
import Logo from '../../assets/icons/bookstore-logo.png';
import { AppBar, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';
import About from '../../pages/About/About';
import Browse from '../../pages/Browse/Browse';
import Contact from '../../pages/Contact/Contact';

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

    const yolo = () => <div>yolo</div>

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
                    <nav >
                    <NavLink exact to='/about' className={classes.navlink} activeClassName={classes.activeNavLink}>About</NavLink>
                    <NavLink to='/browse' className={classes.navlink} activeClassName={classes.activeNavLink}>Browse</NavLink>
                    <NavLink to='/contact' className={classes.navlink} activeClassName={classes.activeNavLink}>Contact</NavLink>
                    </nav>
                </Toolbar>
            </AppBar>
      </div>
    )
}

export default Header;
