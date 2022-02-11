import React, { FC, useState, useEffect } from "react"
import Box from "@mui/material/Box"
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

const SliderOneTextBox = styled(Box)({
    position: "absolute",
    top: "30%",
    right: "5%",
    zIndex: "1",
    color: "red",
    fontSize: "40px"
})

const SliderTwoTextBox = styled(Box)({
    position: "absolute",
    top: "50%",
    left: "10%",
    zIndex: "1",
    color: "red",
    fontSize: "40px"
})

const SliderThreeTextBox = styled(Box)({
    position: "absolute",
    top: "50%",
    left: "3%",
    height: "40%",
    width: "30%",
    // border: "solid black",
    zIndex: "1",
    display: "relative",
    color: "red",
    // opacity: "0.1",
    fontSize: "40px",
    backdropFilter: "blur(8px)",
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
                    <div>Holiday Sale</div>
                    <div>extended to 3/11</div>
                    <div>30% off on select books</div>
                </SliderOneTextBox>
            </SlideContainer>
            <SlideContainer newSlideOrder={slideOrder}>
                <img src={SliderImgTwo} alt="" className={classes.sliderTwo} />
                <SliderTwoTextBox>
                    New book
                </SliderTwoTextBox>
                <div className={`${classes.chatBubble} ${classes.chatBubbleTri}`}>hello</div>
                <div className={classes.triangle}></div>
            </SlideContainer>
            <SlideContainer newSlideOrder={slideOrder}>
                <img src={SliderImgThree} alt="" className={classes.sliderThree} />
                <SliderThreeTextBox>
                    <div className={classes.sliderThreeContent}>Recommend a book for review</div>
                </SliderThreeTextBox>
            </SlideContainer>
        </div>
    )
}