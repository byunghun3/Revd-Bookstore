import React, { ReactElement, useState } from "react"
import { Container, Box } from "@mui/material"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { styled } from "@mui/system"
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

const a = `${(props: any) => props.slideOrder}`
// const b = -200
const c = `${5 + 10}`


const SlideContainer = styled("div")({
    position: "relative",
    display: "flex",
    width: "100vw",
    height: "100%",
    // padding: 8,
    /* height: 100vh; */
    /* flex: 1; */
    // transform: `translateX(${b}vw)`
    // transform: "translateX(-200vw)"
    // transform: `translateX(${1 * (-100)}vw)`
    // transform: `translateX(${a}vw)`
    // transform: `translateX(${(props: any) => props.slideOrder * -100}vw)`
    transform: `translateX(${(props: any) => props.slideOrder})`
})


const LeftArrow = styled(ArrowBackIosIcon)({
    position: "absolute",
    left: "0",
    top: "50%",
    zIndex: "2",
    margin: "0 10px"

})

const RightArrow = styled(ArrowForwardIosIcon)({
    position: "absolute",
    right: "0",
    top: "50%",
    zIndex: "2",
    margin: "0 10px"
})

const TextBox = styled(Box)({
    position: "absolute",
    right: "10%",
    top: "30%",
    zIndex: "1",
    color: "red",
    fontSize: "50px"
})


// type Props {
//     value: string
// }


export default function HomePage() {
    const [slideOrder, setSlideOrder] = useState("-100vw")
    console.log(a)
    console.log(c)
    const handleClick = (e: any) => {
        if (e.currentTarget.id === "left") {
            // setSlideOrder(slideOrder > 0 ? slideOrder - 1 : 2)
            setSlideOrder(slideOrder)
            console.log("left")
            console.log(slideOrder)
        } else {
            // setSlideOrder(slideOrder < 2 ? slideOrder + 1 : 0)
            console.log("right")
            console.log(slideOrder)

        }

    }

    return (
        <div>
            <Header />
            <div className={classes.container}>
                <SlideContainer>
                    {/* <HomePageContainer> */}
                    <LeftArrow id="left" onClick={handleClick} />
                    <RightArrow id="right" onClick={handleClick} />
                    <img src={SliderImgOne} alt="" className={classes.sliderOne} />
                    <TextBox>Holiday Sale 30%</TextBox>
                    {/* </HomePageContainer> */}
                </SlideContainer>
                <SlideContainer>
                    <div className={classes.sliderTwo}>
                        {/* <HomePageContainer> */}
                        <LeftArrow id="left" onClick={handleClick} />
                        <RightArrow id="right" onClick={handleClick} />
                        <img src={BookPile} alt="" className={classes.sliderTwoImg} />
                        <TextBox>Recommend a book for review</TextBox>
                        {/* </HomePageContainer> */}
                    </div>
                </SlideContainer>
                <SlideContainer>
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
