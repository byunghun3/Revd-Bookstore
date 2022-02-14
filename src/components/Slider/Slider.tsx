import React, { FC, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button, Box } from "@mui/material"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { styled } from "@mui/system"
import styles from "styled-components"
import SliderImgOne from "../../assets/images/diette-henderson-egmEb0HgtgU-unsplash.jpg"
import SliderImgTwo from "../../assets/images/greenlights-slider.jpeg"
import SliderImgThree from "../../assets/images/alexei-maridashvili-gqk2hoqGAL0-unsplash.jpg"
import classes from "./Slider.module.css"


interface SliderProps {
    newSlideOrder: number
}

const SlideContainer = styles.div<SliderProps>`
    position: relative;
    display: flex;
    maxWidth: 100%;
    height: 100%;
    transform: translateX(${(props) => props.newSlideOrder * -100}vw);
    transition: ease 1.0s;
`

const LeftArrow = styled(ArrowBackIosIcon)({
    position: "absolute",
    zIndex: "1",
    top: "50%",
    left: "0",
    margin: "0 1rem",
    cursor: "pointer"
})

const RightArrow = styled(ArrowForwardIosIcon)({
    position: "absolute",
    zIndex: "1",
    top: "50%",
    right: "0",
    margin: "0 1rem",
    cursor: "pointer"
})

const SliderOneTextBox = styled(Box)({
    position: "absolute",
    zIndex: "1",
    top: "30%",
    right: "5%",
    width: "30%",
    color: "red",
    fontSize: "2.5rem",
    border: "solid black"
})

const SliderTwoTextBox = styled(Box)({
    position: "absolute",
    zIndex: "1",
    top: "50%",
    left: "8%",
    width: "20%",
    color: "red",
    fontSize: "2.5rem",
    border: "solid black"
})

const SliderThreeTextBox = styled(Box)({
    position: "absolute",
    zIndex: "1",
    top: "45%",
    left: "3%",
    // border: "solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "40%",
    width: "30%",
    fontSize: "3.5rem",
    backdropFilter: "blur(8px)",
})

const SuggestButton = styled(Button)({
    fontSize: "1.5rem",
    marginBottom: "1.5rem"
})

export const Slider: FC = () => {
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
        <div className={classes.container}>
            <LeftArrow id="left" onClick={handleClick} />
            <RightArrow id="right" onClick={handleClick} />
            <SlideContainer newSlideOrder={slideOrder}>
                <img src={SliderImgOne} alt="" className={classes.sliderOne} />
                <SliderOneTextBox>
                    <div>Holiday Sale extended to 2/11</div>
                    <div>20% off on select books</div>
                </SliderOneTextBox>
            </SlideContainer>
            <SlideContainer newSlideOrder={slideOrder}>
                <img src={SliderImgTwo} alt="" className={classes.sliderTwo} />
                <SliderTwoTextBox>
                    February&apos;s new book
                </SliderTwoTextBox>
                <div className={`${classes.chatBubble} ${classes.chatBubbleTri}`}>&ldquo;Reach beyond your grasp, have immortal finish lines, and turn your red light green because a roof is a man-made thing...&rdquo;</div>
                <div className={classes.triangle}></div>
            </SlideContainer>
            <SlideContainer newSlideOrder={slideOrder}>
                <img src={SliderImgThree} alt="" className={classes.sliderThree} />
                <SliderThreeTextBox>
                    <div className={classes.sliderThreeContent}>Recommend a book for review</div>
                    <Link className={classes.browseLink} to="/suggest">
                        <SuggestButton variant="contained">Suggest</SuggestButton>
                    </Link>
                </SliderThreeTextBox>
            </SlideContainer>
        </div>
    )
}