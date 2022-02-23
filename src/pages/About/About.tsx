import React, { useState } from "react"
import { Link } from "react-router-dom"
import { NavHashLink } from "react-router-hash-link"
import { Card, Button } from "@mui/material"
import OurStoryImage from "../../assets/images/pexels-cottonbro-3585048.jpg"
import OurCollectionImage from "../../assets/images/eugenio-mazzone-6ywyo2qtaZ8-unsplash.jpg"
import SuggestABookImageOne from "../../assets/images/pexels-cottonbro-4861347.jpg"
import SuggestABookImageTwo from "../../assets/images/matthew-feeney-Nwkh-n6l25w-unsplash.jpg"
import SuggestABookImageThree from "../../assets/images/pexels-ichad-windhiagiri-3989751.jpg"
import SuggestABookImageFour from "../../assets/images/alexandra-fuller-wkgv7I2VTzM-unsplash.jpg"
import SuggestABookImageFive from "../../assets/images/pexels-helena-lopes-711009.jpg"
import { styled } from "@mui/system"
import classes from "./About.module.css"
import DialogComponent from "../../components/DialogComponent/DialogComponent"

const SectionCardRow = styled(Card)({
    display: "flex",
    flexDirection: "row",
    margin: "1% 0",
    padding: "5% 0",
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "white",
    "@media (max-width: 699px)": {
        flexDirection: "column",
        minHeight: "75vh",
    }
})

const SectionCardCol = styled(Card)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "1% 0",
    padding: "5% 0",
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "white",
    "@media (max-width: 699px)": {
        minHeight: "75vh",
    }
})

const StyledButton = styled(Button)({
    // marginRight: "5%",
    fontSize: "1.3rem"
})

function About() {
    const [showDialog, setShowDialog] = useState(false)

    const handleCloseDialog = () => {
        setShowDialog(false)
    }

    return (
        <div className={classes.aboutPage}>
            <div className={classes.aboutContainer}>
                <div className={classes.sideNav}>
                    <div className={classes.sideNavGroup}>
                        <div className={classes.sideNavTop}>Welcome</div>
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
                    {/* <div className={classes.sectionOne} id="section-our-story"> */}
                    <SectionCardRow id="section-our-story">
                        <div className={classes.sectionContentOurStory}>
                            <div className={classes.sectionTitle}>Welcome to Revd Bookstore!</div>
                            <p>Revd is an online bookstore with a mission to foster a community of readers through only providing the books that we have read and reviewed personally.</p>
                            <p>During the COVID-19 pandemic, two friends, Kim and Olivia, decided to bring together their passion for reading to help connect a group of people in this time of hardship and isolation. Reading can become a source of inner peace, growth, self-discovery, confidence, empathy, compassion and so much more.</p>
                            <p>We offer reduced pricing - all our books start at $4.99! - so that it can be affordable for almost everyone.</p>
                        </div>
                        <div className={classes.sectionImageOurStory}>
                            <img className={classes.ourStoryImage} src={OurStoryImage} alt="" />
                        </div>
                    </SectionCardRow>
                    {/* </div> */}
                    {/* <div className={classes.sectionTwo} id="section-our-collection"> */}
                    <SectionCardCol id="section-our-collection">
                        <div className={classes.sectionImageCollection}>
                            <img className={classes.ourCollectionImage} src={OurCollectionImage} alt="" />
                        </div>
                        <div className={classes.sectionContentCollection}>
                            <div className={classes.sectionTitle}>Explore our collection!</div>
                            <p>We have a collection of 12 books at any given time. We will rotate in a new book every month, with the oldest book in the collection rotating out each month as well. So each book will be available for purchase for at 1 year.</p>
                            <p>Our collection includes both fiction and nonfiction books to suit your taste. We also have books available in hard copy, ebook, audiobook format to suit your needs. </p>
                            <Link className={classes.link} to="/browse">
                                <StyledButton type="button" variant="outlined">Explore our books</StyledButton>
                            </Link>
                        </div>
                        {/* </div> */}
                    </SectionCardCol>
                    {/* <div className={classes.sectionThree} id="section-suggest-a-book"> */}
                    <SectionCardCol id="section-suggest-a-book">
                        <div className={classes.sectionContentSuggest}>
                            <div className={classes.sectionTitle}>Suggest a book!</div>
                            <p>One of our goals at Revd is to build an online community where readers can discuss, review, and react together on books. </p>
                            <p>So we encourage you to suggest us a book to review and add to our collection! We won&apos;t be able to get through every book soon enough, but our new monthly book will always be pulled from the suggestions.</p>
                            <Link className={classes.link} to="/suggest">
                                <StyledButton type="button" variant="contained">Suggest</StyledButton>
                            </Link>
                        </div>
                        <div className={classes.sectionImageSuggest}>
                            <div className={classes.imageBlockSection}>
                                <img className={classes.suggestABookImage} src={SuggestABookImageOne} alt="" />
                                <img className={classes.suggestABookImage} src={SuggestABookImageTwo} alt="" />
                            </div>
                            {/* <div className={classes.imageBlockSection}>
                                <img className={classes.suggestABookImageCenter} src={SuggestABookImageThree} alt="" />
                            </div> */}
                            <div className={classes.imageBlockSection}>
                                <img className={classes.suggestABookImage} src={SuggestABookImageFour} alt="" />
                                <img className={classes.suggestABookImage} src={SuggestABookImageFive} alt="" />
                            </div>
                        </div>
                    </SectionCardCol>
                    {/* </div> */}
                    {/* <div className={classes.sectionFour} id="section-attribution"> */}
                    <SectionCardCol id="section-attribution">
                        <div className={classes.sectionContentAttribution}>
                            <div className={classes.sectionTitleAttribution} onClick={() => { setShowDialog(true) }}>See Attributions</div>
                            <p>Credits for free images used in this website</p>
                        </div>
                        <DialogComponent
                            open={showDialog}
                            onClose={handleCloseDialog}
                            onClick={() => { setShowDialog(false) }}
                            contentText={
                                <ul className={classes.sectionContent}>
                                    <li><a className={classes.attributionLink} target="_blank" rel="noopener noreferrer" href="https://icons8.com/icon/f6WWkElFBgtA/book">Book</a> icon by <a className={classes.attributionLink} target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a></li>
                                    <li>Photo by <a className={classes.attributionLink} href="https://unsplash.com/@dietteh06?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">DiEtte Henderson</a> on <a className={classes.attributionLink} href="https://unsplash.com/s/photos/christmas-present?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
                                    <li>Photo by <a className={classes.attributionLink} href="https://unsplash.com/@lexoge?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexei Maridashvili</a> on <a className={classes.attributionLink} href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
                                    <li>Photo by <a className={classes.attributionLink} href="https://unsplash.com/@eugi1492?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eugenio Mazzone</a> on <a className={classes.attributionLink} href="https://unsplash.com/s/photos/bookstore?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
                                    <li>Photo by <a className={classes.attributionLink} href="https://unsplash.com/@matt__feeney?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">matthew Feeney</a> on <a className={classes.attributionLink} href="https://unsplash.com/s/photos/public-library?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
                                    <li>Photo by <a className={classes.attributionLink} href="https://unsplash.com/@alexandrajf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexandra Fuller</a> on <a className={classes.attributionLink} href="https://unsplash.com/s/photos/reading-together?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
                                    <li>Photo by cottonbro from Pexels</li>
                                    <li>&ldquo;Books Transparent&rdquo; by transparentpng.com is licensed under CC BY 4.0</li>
                                    <li>Photo by Helena Lopes from Pexels</li>
                                    <li>Photo by Ichad Windhiagiri from Pexels</li>
                                    <li>Photo by cottonbro from Pexels</li>
                                    <li>Greenlights slider https://professionalhairdresser.co.uk/news/book-club-greenlights-by-matthew-mcconaughey/</li>
                                    <li><a href="https://icons8.com/icon/f6WWkElFBgtA/book">Book</a> icon by <a href="https://icons8.com">Icons8</a></li>
                                    <li><a href="https://icons8.com/icon/80765/new">New</a> icon by <a href="https://icons8.com">Icons8</a></li>
                                </ul>
                            }
                            buttonText="Close"
                        />
                    </SectionCardCol>
                </div>
            </div>
        </div>
    )
}

export default About
