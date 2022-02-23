import React, { FC, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button, Box } from "@mui/material"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { styled } from "@mui/system"
import styles from "styled-components"
import SliderImgOne from "../../assets/images/diette-henderson-egmEb0HgtgU-unsplash.jpg"
import SliderImgTwo from "../../assets/images/greenlights-slider1.jpg"
import SliderImgThree from "../../assets/images/alexei-maridashvili-gqk2hoqGAL0-unsplash1.jpg"
import NewIcon from "../../assets/icons/icons8-new-96.png"
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


    // const handleAutoSlide = () => {
    //     if (slideOrder < 2) {
    //         setSlideOrder(slideOrder + 1)
    //     } else {
    //         setSlideOrder(slideOrder - 2)
    //     }
    // }

    // useEffect(() => {
    //     setInterval(
    //         handleAutoSlide, 10000
    //     )
    // })

    return (
        <div className={classes.homePage}>
            <LeftArrow id="left" onClick={handleClick} />
            <RightArrow id="right" onClick={handleClick} />
            <SlideContainer newSlideOrder={slideOrder}>
                <img src={SliderImgOne} alt="" className={classes.sliderOne} />
                <div className={classes.sliderOneText}>
                    <div className={classes.firstLine}>Holiday Sale extended to 2/11</div>
                    <div className={classes.secondLine}>20% off on select books</div>
                </div>
            </SlideContainer>
            <SlideContainer newSlideOrder={slideOrder}>
                <img src={SliderImgTwo} alt="" className={classes.sliderTwo} />
                <img className={classes.newIcon} src={NewIcon} alt="" />
                <div className={classes.sliderTwoText}>
                    February&apos;s new book
                </div>
                <div className={`${classes.chatBubble} ${classes.chatBubbleTri}`}>&ldquo;Reach beyond your grasp, have immortal finish lines, and turn your red light green because a roof is a man-made thing...&rdquo;</div>
                <div className={classes.triangle}></div>
            </SlideContainer>
            <SlideContainer newSlideOrder={slideOrder}>
                <img src={SliderImgThree} alt="" className={classes.sliderThree} />
                <div className={classes.sliderThreeText}>
                    Recommend a book for review
                    <Link className={classes.browseLink} to="/suggest">
                        <SuggestButton variant="contained" type="button">Suggest</SuggestButton>
                    </Link>
                </div>
            </SlideContainer>
        </div>
    )
}