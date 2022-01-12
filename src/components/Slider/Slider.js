import React, { useState } from "react"
import Box from "@mui/material/Box"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { styled } from "@mui/system"
import styles from "styled-components"
import SliderImgOne from "../../assets/images/holiday-gift.jpg"
import BookPile from "../../assets/images/book-pile.png"
import GreenlightsSlider from "../../assets/images/greenlights-slider.jpeg"
import classes from "./Slider.module.css"

const SlideContainer = styles.div`
    position: relative;
    display: flex;
    width: 100vw;
    height: 100%;
    transform: translateX(${(props) => props.slideOrderTwo * -100}vw);
`

const LeftArrow = styled(ArrowBackIosIcon)({
    position: "absolute",
    left: "0",
    top: "50%",
    zIndex: "2",
    margin: "0 10px",
    cursor: "pointer"
})

const RightArrow = styled(ArrowForwardIosIcon)({
    position: "absolute",
    right: "0",
    top: "50%",
    zIndex: "2",
    margin: "0 10px",
    cursor: "pointer"
})

const TextBox = styled(Box)({
    position: "absolute",
    right: "10%",
    top: "30%",
    zIndex: "1",
    color: "red",
    fontSize: "50px"
})

function SliderOne() {
    const [slideOrder, setSlideOrder] = useState(0)

    const handleClick = (e) => {
        if (e.currentTarget.id === "left") {
            setSlideOrder(slideOrder > 0 ? slideOrder - 1 : 2)
            console.log("left")
        } else {
            setSlideOrder(slideOrder < 2 ? slideOrder + 1 : 0)
            console.log("right")
        }
    }

    return (
        <div className={classes.container}>
            <SlideContainer slideOrderTwo={slideOrder}>
                <LeftArrow id="left" onClick={handleClick} />
                <RightArrow id="right" onClick={handleClick} />
                <img src={SliderImgOne} alt="" className={classes.sliderOne} />
                <TextBox>Holiday Sale 30%</TextBox>
            </SlideContainer>
            <SlideContainer slideOrderTwo={slideOrder}>
                <div className={classes.sliderTwo}>
                    <LeftArrow id="left" onClick={handleClick} />
                    <RightArrow id="right" onClick={handleClick} />
                    <img src={BookPile} alt="" className={classes.sliderTwoImg} />
                    <TextBox>Recommend a book for review</TextBox>
                </div>
            </SlideContainer>
            <SlideContainer slideOrderTwo={slideOrder}>
                <div className={classes.sliderThree}>
                    <LeftArrow id="left" onClick={handleClick} />
                    <RightArrow id="right" onClick={handleClick} />
                    <img src={GreenlightsSlider} alt="" className={classes.sliderThreeImg} />
                    <TextBox>New book</TextBox>
                </div>
            </SlideContainer>
        </div>
    )
}

export default SliderOne
