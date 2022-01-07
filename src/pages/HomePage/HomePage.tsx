import React, { ReactElement } from "react"
import { Container, Box } from "@mui/material"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { styled } from "@mui/system"
import SliderImgOne from "../../assets/images/holiday-gift.jpg"
import classes from "./HomePage.module.css"


const HomePageContainer = styled(Container)({
    backgroundColor: "orange",
    width: "100vw",
    height: "auto",
    position: "relative",
    display: "flex",
    margin: "0",

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


interface Props {

}


export default function HomePage({ }: Props): ReactElement {
    return (
        <div className={classes.div}>
            {/* <HomePageContainer> */}
            <LeftArrow />
            <RightArrow />
            <img src={SliderImgOne} alt="" className={classes.sliderOne} />
            <TextBox>Holiday Sale 30%</TextBox>
            {/* </HomePageContainer> */}
        </div>
    )
}
