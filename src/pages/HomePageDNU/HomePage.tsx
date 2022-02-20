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
import classes from "./HomePage.module.css"


interface SliderProps {
    newSlideOrder: number
}

const SlideContainer = styles.div<SliderProps>`
    position: relative;
    display: flex;
    justifyContent: flex-end;
    maxWidth: 100%;
    transform: translateX(${(props) => props.newSlideOrder * -100}vw);
    transition: ease 1.0s;
`
// minHeight: 100vh;


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

const SliderOneTextBox = styled(Box)({
    position: "absolute",
    zIndex: "1",
    // flex: "30%",
    top: "25%",
    right: "5%",
    width: "30rem",
    color: "red",
    fontSize: "3rem",
    border: "solid black",
    // "@media (max-width: 900px)": {
    //     right: "5%",
    //     width: "20rem",
    //     fontSize: "2.5rem"
    // },
    "@media (max-width: 960px)": {
        right: "7%",
        width: "15rem",
        fontSize: "2.2rem"
    },
    "@media (max-width: 550px)": {
        top: "2%",
        right: "5%",
        width: "20rem",
        fontSize: "1.5rem"
    }
    // "@media (min-height: 600px) and (max-width: 900px)": {
    //     // "@media (max-width: 480px)": {
    //     top: "2%",
    //     right: "5%",
    //     width: "25rem",
    //     fontSize: "2.5rem"
    // },
    // "@media (max-height: 599px) and (max-width: 900px)": {
    //     top: "2%",
    //     right: "5%",
    //     width: "20rem",
    //     fontSize: "1.5rem"
    // }
})

const SliderTwoTextBox = styled(Box)({
    position: "absolute",
    zIndex: "1",
    top: "50%",
    left: "15%",
    transform: "translate(-50%, -50%)",
    width: "15rem",
    backgroundColor: "lightyellow",
    color: "red",
    fontSize: "2.5rem",
    border: "solid black",
    // "@media (max-width: 750px)": {
    //     left: "15%",
    //     width: "10rem",
    //     fontSize: "2rem"
    // },
    "@media (max-width: 960px)": {
        top: "25%",
        left: "40%",
        // fontSize: "1.5rem"
    },
    "@media (max-width: 550px)": {
        top: "27%",
        left: "27%",
        fontSize: "2rem"
    },
})

const BookButton = styled(Button)({
    position: "absolute",
    zIndex: "1",
    top: "50%",
    right: "5%",
    transform: "translate(-50%, -50%)",
    fontSize: "1.5rem",
    // "@media (min-width: 900px)": {
    //     display: "none"
    // },
    // "@media (max-width: 750px)": {
    //     right: "0",
    //     fontSize: "0.9rem"
    // },
    "@media (max-width: 960px)": {
        // "@media (max-width: 650px)": {
        top: "25%",
        right: "43%",
        fontSize: "0.9rem"
    },
    "@media (max-height: 455px) and (max-width: 650px)": {
        top: "50%",
        right: "-2%",
        fontSize: "0.9rem"
    }
})

const SliderThreeTextBox = styled(Box)({
    position: "absolute",
    zIndex: "1",
    // top: "45%",
    // left: "8%",
    // top: "50%",
    bottom: "-25%",
    left: "50%",
    // border: "solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "40%",
    // width: "40rem",
    width: "100%",
    fontSize: "3.5rem",
    // backdropFilter: "blur(8px)",
    // border: "solid black",
    transform: "translate(-50%, -50%)",
    // "@media (max-width: 900px)": {
    //     top: "55%",
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "space-evenly",
    //     height: "40%",
    //     width: "10rem",
    //     fontSize: "2rem",
    // }
    "@media (max-width: 550px)": {
        fontSize: "2.5rem"
    },
})

const SuggestButton = styled(Button)({
    marginBottom: "1.5rem",
    fontSize: "1.5rem",
    // "@media (max-width: 550px)": {
    //     fontSize: "1rem"
    // }
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
                {/* <img src={SliderImgOne} alt="" className={classes.sliderOne} /> */}
                <div className={classes.imageOne}>
                    <SliderOneTextBox>
                        <div>Holiday Sale extended to 2/11</div>
                        <div>20% off on select books</div>
                    </SliderOneTextBox>
                </div>
            </SlideContainer>
            <SlideContainer newSlideOrder={slideOrder}>
                {/* <img src={SliderImgTwo} alt="" className={classes.sliderTwo} /> */}
                <div className={classes.imageTwo}>
                    <SliderTwoTextBox>
                        February&apos;s new book
                    </SliderTwoTextBox>
                    <div className={`${classes.chatBubble} ${classes.chatBubbleTri}`}>&ldquo;Reach beyond your grasp, have immortal finish lines, and turn your red light green because a roof is a man-made thing...&rdquo;</div>
                    <div className={classes.triangle}></div>
                </div>
                {/* <BookButton variant="contained" type="button">See More</BookButton> */}
            </SlideContainer>
            <SlideContainer newSlideOrder={slideOrder}>
                {/* <img src={SliderImgThree} alt="" className={classes.sliderThree} /> */}
                <div className={classes.imageThree}>
                    <SliderThreeTextBox>
                        <div className={classes.sliderThreeContent}>Recommend a book for review</div>
                        <Link className={classes.browseLink} to="/suggest">
                            <SuggestButton variant="contained" type="button">Suggest</SuggestButton>
                        </Link>
                    </SliderThreeTextBox>
                </div>
            </SlideContainer>
        </div>
    )
}