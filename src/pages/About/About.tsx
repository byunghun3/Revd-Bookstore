import React from "react"
import { NavHashLink } from "react-router-hash-link"
import { Container } from "@mui/material"
import { styled } from "@mui/system"
import classes from "./About.module.css"

const AboutContainer = styled(Container)({
    display: "flex",
    flexDirection: "row"
})

function About() {
    return (
        <div className={classes.aboutPage}>
            <AboutContainer>
                <div className={classes.sideNav}>
                    <NavHashLink smooth to="#sectionOne">
                        About Us
                    </NavHashLink>
                </div>
                <div className={classes.aboutContent}>
                    <div id="sectionOne">Welcome to Revd Bookstore!</div>
                    <p>Revd is an online bookstore with a mission to foster a community of readers through only providing the books that we have read and reviewed personally.</p>
                    <p>We are a group of three friends, Byung-Hun, Alefiya, and John, who during the COVID-19 pandemic.  believe  the place to find the best [PRODUCTS CATEGORY NAME] for every taste and occasion. We thoroughly check the quality of our goods, working only with reliable suppliers so that you only receive the best quality product.

                        We at [SHOP NAME] believe in high quality and exceptional customer service. But most importantly, we believe shopping is a right, not a luxury, so we strive to deliver the best products at the most affordable prices, and ship them to you regardless of where you are located.</p>
                    <p>Hello and welcome to [SHOP NAME], the place to find the best [PRODUCTS CATEGORY NAME] for every taste and occasion. We thoroughly check the quality of our goods, working only with reliable suppliers so that you only receive the best quality product.

                        We at [SHOP NAME] believe in high quality and exceptional customer service. But most importantly, we believe shopping is a right, not a luxury, so we strive to deliver the best products at the most affordable prices, and ship them to you regardless of where you are located.</p>
                    <p>Hello and welcome to [SHOP NAME], the place to find the best [PRODUCTS CATEGORY NAME] for every taste and occasion. We thoroughly check the quality of our goods, working only with reliable suppliers so that you only receive the best quality product.

                        We at [SHOP NAME] believe in high quality and exceptional customer service. But most importantly, we believe shopping is a right, not a luxury, so we strive to deliver the best products at the most affordable prices, and ship them to you regardless of where you are located.</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icon/f6WWkElFBgtA/book">Book</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>
                    Photo by <a href="https://unsplash.com/@dietteh06?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">DiEtte Henderson</a> on <a href="https://unsplash.com/s/photos/christmas-present?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    Photo by <a href="https://unsplash.com/@lexoge?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexei Maridashvili</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    <p>&ldquo;Books Transparent&rdquo; by transparentpng.com is licensed under CC BY 4.0</p>
                    Greenlights slider https://professionalhairdresser.co.uk/news/book-club-greenlights-by-matthew-mcconaughey/
                </div>
            </AboutContainer>
        </div>
    )
}

export default About
