import React, { useState } from "react"
import Header from "../../components/Header/Header"
import Slider from "../../components/Slider/Slider"
import { Footer } from "../../components/Footer/Footer"
import classes from "./HomePage.module.css"

function HomePage() {
    return (
        <div>
            <Header />
            <Slider />
            <Footer />
        </div>
    )
}

export default HomePage