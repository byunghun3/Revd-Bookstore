import React from "react"
import { NavHashLink } from "react-router-hash-link"
import { Container } from "@mui/material"
import OurStoryImage from "../../assets/images/pexels-cottonbro-3585048.jpg"
import OurCollectionImage from "../../assets/images/eugenio-mazzone-6ywyo2qtaZ8-unsplash.jpg"
import SuggestABookImageOne from "../../assets/images/pexels-cottonbro-4861347.jpg"
import SuggestABookImageTwo from "../../assets/images/matthew-feeney-Nwkh-n6l25w-unsplash.jpg"
import SuggestABookImageThree from "../../assets/images/pexels-ichad-windhiagiri-3989751.jpg"
import SuggestABookImageFour from "../../assets/images/alexandra-fuller-wkgv7I2VTzM-unsplash.jpg"
import SuggestABookImageFive from "../../assets/images/pexels-helena-lopes-711009.jpg"

import { styled } from "@mui/system"
import classes from "./About.module.css"

const AboutContainer = styled(Container)({
    display: "flex",
    flexDirection: "row"
})

function About() {
    return (
        <div className={classes.aboutPage}>
            <div className={classes.aboutContainer}>
                {/* <AboutContainer> */}
                <div className={classes.sideNav}>
                    <div className={classes.sideNavGroup}>
                        <div className={classes.sideNavTop}>Welcome,</div>
                        <NavHashLink smooth className={classes.sideNavLink} to="#section-our-story">
                            Our story
                        </NavHashLink>
                        <NavHashLink smooth className={classes.sideNavLink} to="#section-our-collection">
                            Our collection
                        </NavHashLink>
                        <NavHashLink smooth className={classes.sideNavLink} to="#section-suggest-a-book">
                            Suggest a book
                        </NavHashLink>
                        <NavHashLink smooth className={classes.sideNavLink} to="#section-attribution">
                            Attribution
                        </NavHashLink>
                    </div>
                </div>
                <div className={classes.aboutContent}>
                    <div className={classes.sectionOne} id="section-our-story">
                        <div className={classes.sectionContent}>
                            <div>Welcome to Revd Bookstore!</div>
                            <p>Revd is an online bookstore with a mission to foster a community of readers through only providing the books that we have read and reviewed personally.</p>

                        </div>
                        <div className={classes.sectionImage}>
                        <img className={classes.ourStoryImage} src={OurStoryImage} alt="" />
                        </div>
                        </div>
                    <div className={classes.sectionTwo} id="section-our-collection">
                        <img className={classes.ourCollectionImage} src={OurCollectionImage} alt="" />
                        <div className={classes.sectionContent}>
                            <div>Explore our collection!</div>
                            <p>We have a collection of 12 books at any given time. We will rotate in a new book</p>
                            <p>Our collection includes both fiction and nonfiction books to suit your taste. We also have books available in hard copy, Ebook, audiobook format to suit your needs. </p>
                        </div>
                    </div>
                    <div className={classes.sectionThree} id="section-suggest-a-book">
                        <div className={classes.sectionContent}>
                            <p>One of our goals for Revd is to build a community of readers </p>
                        </div>
                        <div className={classes.imageBlock}>
                            <div className={classes.imageBlockSection}>
                                <img className={classes.suggestABookImage} src={SuggestABookImageOne} alt="" />
                                <img className={classes.suggestABookImage} src={SuggestABookImageTwo} alt="" />
                            </div>
                            <div className={classes.imageBlockSection}>
                                <img className={classes.suggestABookImageCenter} src={SuggestABookImageThree} alt="" />
                            </div>
                            <div className={classes.imageBlockSection}>
                                <img className={classes.suggestABookImage} src={SuggestABookImageFour} alt="" />
                                <img className={classes.suggestABookImage} src={SuggestABookImageFive} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={classes.sectionFour} id="section-attribution">
                        <div>
                            <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icon/f6WWkElFBgtA/book">Book</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>
                            Photo by <a href="https://unsplash.com/@dietteh06?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">DiEtte Henderson</a> on <a href="https://unsplash.com/s/photos/christmas-present?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                            Photo by <a href="https://unsplash.com/@lexoge?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexei Maridashvili</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                            Photo by <a href="https://unsplash.com/@eugi1492?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eugenio Mazzone</a> on <a href="https://unsplash.com/s/photos/bookstore?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                            Photo by <a href="https://unsplash.com/@matt__feeney?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">matthew Feeney</a> on <a href="https://unsplash.com/s/photos/public-library?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                            Photo by <a href="https://unsplash.com/@alexandrajf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexandra Fuller</a> on <a href="https://unsplash.com/s/photos/reading-together?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                            Photo by cottonbro from Pexels
                            <p>&ldquo;Books Transparent&rdquo; by transparentpng.com is licensed under CC BY 4.0</p>
                            Photo by Helena Lopes from Pexels
                            Photo by Ichad Windhiagiri from Pexels
                            Photo by cottonbro from Pexels
                            Greenlights slider https://professionalhairdresser.co.uk/news/book-club-greenlights-by-matthew-mcconaughey/
                        </div>
                    </div>
                </div>
                {/* </AboutContainer> */}
            </div>
        </div>
    )
}

export default About
