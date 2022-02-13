import React from "react"
import { NavLink } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import { styled } from "@mui/system"
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material"
import classes from "./Footer.module.css"



const FooterToolbar = styled(Toolbar)({
    maxWidth: "100%",
    // width: "100%",

    // justifyContent: "space-between",
    display: "flex",
    backgroundColor: "black",
})

const FacebookIcon = styled(Facebook)({
    // display: "flex",
    borderRadius: "15%",
    background: "#3b5998",
    color: "white",
    fontSize: "2.2rem",
    cursor: "pointer",
    "&:hover": {
        color: "#3b5998",
        backgroundColor: "white"
    }

})

const InstagramIcon = styled(Instagram)({
    // display: "flex",
    borderRadius: "15%",
    background: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
    color: "white",
    fontSize: "2.2rem",
    cursor: "pointer",
    "&:hover": {
        color: "#dc2743",
        background: "white"
    }

})

const TwitterIcon = styled(Twitter)({
    // display: "flex",
    // margin: "10px",
    borderRadius: "15%",
    background: "#00acee",
    color: "white",
    fontSize: "2.2rem",
    cursor: "pointer",
    "&:hover": {
        color: "#00acee",
        backgroundColor: "white"
    }
})

const YouTubeIcon = styled(YouTube)({
    // display: "flex",
    borderRadius: "15%",
    background: "#FF0000",
    color: "white",
    fontSize: "2.2rem",
    cursor: "pointer",
    "&:hover": {
        color: "#FF0000",
        backgroundColor: "white"
    }
})

interface Props {

}

export const Footer = (props: Props) => {
    return (
        <div className={classes.footer}>
            <AppBar
                color="inherit"
                elevation={0}
                position="sticky"
            >
                <FooterToolbar>
                    <div className={classes.leftSection}>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className={classes.iconLink}>
                            <FacebookIcon />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className={classes.iconLink}>
                            <InstagramIcon />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className={classes.iconLink}>
                            <TwitterIcon />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className={classes.iconLink}>
                            <YouTubeIcon />
                        </a>
                    </div>
                    <div className={classes.middleSection}>
                        <NavLink to="/about" className={classes.navLink}>About</NavLink>
                        <NavLink to="/browse" className={classes.navLink}>Browse</NavLink>
                        <NavLink to="/suggest" className={classes.navLink}>Suggest</NavLink>
                        <NavLink to="/contact" className={classes.navLink}>Contact</NavLink>
                    </div>
                    <div className={classes.rightSection}>
                        <div>Copyright © 2022 Revd Bookstore, Inc.</div>
                        <div>All rights reserved.</div>
                    </div>
                </FooterToolbar>
            </AppBar>
        </div>
    )
}
