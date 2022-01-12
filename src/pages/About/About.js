import React from "react"
import Header from "../../components/Header/Header"
import { Footer } from "../../components/Footer/Footer"
import { Container } from "@mui/material"
import classes from "./About.module.css"


function About() {
    return (
        <div className={classes.aboutPage}>
            <Header />
            <Container>
                About
                <p>Hello and welcome to [SHOP NAME], the place to find the best [PRODUCTS CATEGORY NAME] for every taste and occasion. We thoroughly check the quality of our goods, working only with reliable suppliers so that you only receive the best quality product.

                    We at [SHOP NAME] believe in high quality and exceptional customer service. But most importantly, we believe shopping is a right, not a luxury, so we strive to deliver the best products at the most affordable prices, and ship them to you regardless of where you are located.</p>
                Photo by <a href="https://unsplash.com/@dietteh06?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">DiEtte Henderson</a> on <a href="https://unsplash.com/s/photos/christmas-present?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                <p>&ldquo;Books Transparent&rdquo; by transparentpng.com is licensed under CC BY 4.0</p>
            </Container>
            <Footer />
        </div>
    )
}

export default About
