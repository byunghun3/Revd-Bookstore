import React, { ReactElement, useState, FC } from "react"
import { Container, Box } from "@mui/material"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { styled } from "@mui/system"
import styles from "styled-components"
import Header from "../../components/Header/Header"
import { Footer } from "../../components/Footer/Footer"
import SliderImgOne from "../../assets/images/holiday-gift.jpg"
import BookPile from "../../assets/images/book-pile.png"
import GreenlightsSlider from "../../assets/images/greenlights-slider.jpeg"
import classes from "./HomePage.module.css"


const HomePageContainer = styled(Container)({
    backgroundColor: "orange",
    width: "100vw",
    height: "auto",
    position: "relative",
    display: "flex",
    margin: "0",

})

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

function HomePage(props) {
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

    console.log(slideOrder)

    return (
        <div>
            <Header />
            <div className={classes.container}>
                <SlideContainer slideOrderTwo={slideOrder}>
                    {/* <HomePageContainer> */}
                    <LeftArrow id="left" onClick={handleClick} />
                    <RightArrow id="right" onClick={handleClick} />
                    <img src={SliderImgOne} alt="" className={classes.sliderOne} />
                    <TextBox>Holiday Sale 30%</TextBox>
                    {/* </HomePageContainer> */}
                </SlideContainer>
                <SlideContainer slideOrderTwo={slideOrder}>
                    <div className={classes.sliderTwo}>
                        {/* <HomePageContainer> */}
                        <LeftArrow id="left" onClick={handleClick} />
                        <RightArrow id="right" onClick={handleClick} />
                        <img src={BookPile} alt="" className={classes.sliderTwoImg} />
                        <TextBox>Recommend a book for review</TextBox>
                        {/* </HomePageContainer> */}
                    </div>
                </SlideContainer>
                <SlideContainer slideOrderTwo={slideOrder}>
                    <div className={classes.sliderThree}>
                        {/* <HomePageContainer> */}
                        <LeftArrow id="left" onClick={handleClick} />
                        <RightArrow id="right" onClick={handleClick} />
                        <img src={GreenlightsSlider} alt="" className={classes.sliderThreeImg} />
                        <TextBox>New book</TextBox>
                        {/* </HomePageContainer> */}
                    </div>
                </SlideContainer>
            </div >
            <Footer />
        </div>
    )
}

export default HomePage