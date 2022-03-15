import React, { FC, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import SliderImgOne from "../../assets/images/diette-henderson-egmEb0HgtgU-unsplash.jpg"
import SliderImgTwo from "../../assets/images/greenlights-slider1.jpg"
import SliderImgThree from "../../assets/images/alexei-maridashvili-gqk2hoqGAL0-unsplash1.jpg"
import NewIcon from "../../assets/icons/icons8-new-96.png"
import { styled } from "@mui/system"
import styles from "styled-components"
import classes from "./HomePage.module.css"

interface SliderProps {
    newSlideOrder: number
}

const SlideContainer = styles.div<SliderProps>`
    position: relative;
    display: flex;
    height: 100%;
    maxWidth: 100%;
    transform: translateX(${(props) => props.newSlideOrder * -100}vw);
    transition: ease 1.0s;
`

const LeftArrow = styled(ArrowBackIosIcon)({
    position: "absolute",
    zIndex: "1",
    top: "50%",
    left: "0",
    margin: "0 1rem",
    fontSize: "2rem",
    cursor: "pointer"
})

const RightArrow = styled(ArrowForwardIosIcon)({
    position: "absolute",
    zIndex: "1",
    top: "50%",
    right: "0",
    margin: "0 1rem",
    fontSize: "2rem",
    cursor: "pointer"
})

const BrowseButton = styled(Button)({
    marginTop: "5%",
    borderColor: "black",
    color: "black",
    fontSize: "1.3rem",
    "&:hover": {
        color: "#1976d2"
    },
    "@media (max-width: 630px)": {
        marginTop: "0",
        fontSize: "1rem"
    }
})

const GreenlightsButton = styled(Button)({
    marginTop: "5%",
    border: "solid white 0.3rem",
    color: "white",
    fontFamily: "PT Serif",
    fontSize: "1.7rem",
    fontWeight: "700",
    "&:hover": {
        border: "solid firebrick 0.3rem",
        color: "firebrick"
    },
    "@media (max-width: 630px)": {
        marginTop: "0"
    }
})

const SuggestButton = styled(Button)({
    marginBottom: "1.5rem",
    color: "white",
    fontSize: "2rem",
    "@media (max-width: 550px)": {
        fontSize: "1.5rem"
    }
})

export const HomePage: FC = () => {
    const [slideOrder, setSlideOrder] = useState(0)

    const handleClick = (e: React.MouseEvent<any>) => {
        if (e.currentTarget.id === "left") {
            setSlideOrder(slideOrder > 0 ? slideOrder - 1 : 2)
            console.log("left")
        } else {
            setSlideOrder(slideOrder < 2 ? slideOrder + 1 : 0)
            console.log("right")
        }
    }

    return (
        <div className={classes.homePage}>
            <LeftArrow id="left" onClick={handleClick} />
            <RightArrow id="right" onClick={handleClick} />
            <SlideContainer newSlideOrder={slideOrder}>
                <img src={SliderImgOne} alt="" className={classes.sliderOne} />
                <div className={classes.sliderOneText}>
                    <div className={classes.firstLine}>
                        <div className={classes.holidaySale}>Holiday Sale</div>
                        <div className={classes.saleDate}>extended to 2/11</div>
                    </div>
                    <div className={classes.secondLine}>20% off on select books</div>
                    <Link className={classes.link} to="/browse">
                        <BrowseButton type="button" variant="outlined">Explore our books</BrowseButton>
                    </Link>
                </div>
            </SlideContainer>
            <SlideContainer newSlideOrder={slideOrder}>
                <img src={SliderImgTwo} alt="" className={classes.sliderTwo} />
                <img className={classes.newIcon} src={NewIcon} alt="" />
                <div className={classes.sliderTwoText}>
                    February&apos;s new book
                    <Link className={classes.link} to="/browse/1">
                        <GreenlightsButton type="button" variant="outlined">View more</GreenlightsButton>
                    </Link>
                </div>
                <div className={classes.sliderTwoQuote}>
                    <div className={classes.quoteText}>&ldquo;Reach beyond your grasp, have immortal finish lines, and turn your red light green because a roof is a man-made thing...&rdquo;</div>
                    <div className={classes.quoteBy}>- Matthew McConaughey</div>
                </div>
                <div className={classes.triangle}></div>
            </SlideContainer>
            <SlideContainer newSlideOrder={slideOrder}>
                <img src={SliderImgThree} alt="" className={classes.sliderThree} />
                <div className={classes.sliderThreeText}>
                    Recommend a book for review
                    <Link className={classes.link} to="/suggest">
                        <SuggestButton variant="contained" type="button">Suggest</SuggestButton>
                    </Link>
                </div>
            </SlideContainer>
        </div>
    )
}